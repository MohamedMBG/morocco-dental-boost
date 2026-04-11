<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

$configPath = dirname(__DIR__, 2) . '/mail-config.php';

if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['message' => "Configuration email manquante sur le serveur."]);
    exit;
}

$config = require $configPath;

if (!is_array($config)) {
    http_response_code(500);
    echo json_encode(['message' => "Configuration email invalide."]);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['message' => "Requete invalide."]);
    exit;
}

$name = trim((string) ($payload['name'] ?? ''));
$phone = trim((string) ($payload['phone'] ?? ''));
$preferredDay = trim((string) ($payload['preferredDay'] ?? ''));
$service = trim((string) ($payload['service'] ?? ''));
$website = trim((string) ($payload['website'] ?? ''));

if ($website !== '') {
    echo json_encode(['success' => true]);
    exit;
}

if ($name === '' || $phone === '' || $preferredDay === '') {
    http_response_code(422);
    echo json_encode(['message' => "Veuillez remplir tous les champs obligatoires."]);
    exit;
}

if (mb_strlen($name) > 100 || mb_strlen($phone) > 20 || mb_strlen($preferredDay) > 50 || mb_strlen($service) > 100) {
    http_response_code(422);
    echo json_encode(['message' => "Les donnees envoyees sont invalides."]);
    exit;
}

if (!preg_match('/^[\p{L}\s\'-]+$/u', $name)) {
    http_response_code(422);
    echo json_encode(['message' => "Le nom saisi est invalide."]);
    exit;
}

if (!preg_match('/^[0-9+\s().-]+$/', $phone)) {
    http_response_code(422);
    echo json_encode(['message' => "Le numero de telephone est invalide."]);
    exit;
}

if (!function_exists('curl_init')) {
    http_response_code(500);
    echo json_encode(['message' => "L'extension cURL n'est pas disponible sur le serveur."]);
    exit;
}

if (isset($_SERVER['HTTP_ORIGIN'], $_SERVER['HTTP_HOST'])) {
    $originHost = parse_url((string) $_SERVER['HTTP_ORIGIN'], PHP_URL_HOST);
    $requestHost = (string) $_SERVER['HTTP_HOST'];

    if (is_string($originHost) && $originHost !== '' && !hash_equals($requestHost, $originHost)) {
        http_response_code(403);
        echo json_encode(['message' => "Origine non autorisee."]);
        exit;
    }
}

function clean_input(string $value): string
{
    $value = str_replace(["\r", "\n"], ' ', $value);
    return trim($value);
}

function enforce_rate_limit(): void
{
    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $bucket = sha1($ipAddress);
    $path = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'oris-booking-' . $bucket . '.txt';
    $cooldownSeconds = 20;
    $now = time();

    if (file_exists($path)) {
        $lastAttempt = (int) file_get_contents($path);

        if ($lastAttempt > 0 && ($now - $lastAttempt) < $cooldownSeconds) {
            http_response_code(429);
            echo json_encode(['message' => "Merci de patienter quelques secondes avant de reessayer."]);
            exit;
        }
    }

    file_put_contents($path, (string) $now, LOCK_EX);
}

function encode_header(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function send_smtp_mail(array $config, string $name, string $phone, string $preferredDay, string $service): void
{
    $recipient = (string) ($config['to_email'] ?? $config['smtp_username'] ?? '');
    $username = (string) ($config['smtp_username'] ?? '');
    $password = (string) ($config['smtp_password'] ?? '');
    $host = (string) ($config['smtp_host'] ?? 'smtp.gmail.com');
    $port = (int) ($config['smtp_port'] ?? 465);
    $secure = strtolower((string) ($config['smtp_secure'] ?? 'ssl'));
    $fromName = (string) ($config['from_name'] ?? 'ORIS Dental Website');

    if ($recipient === '' || $username === '' || $password === '') {
        throw new RuntimeException('Parametres SMTP incomplets.');
    }

    $scheme = $secure === 'tls' ? 'smtp' : 'smtps';
    $safeName = clean_input($name);
    $safePhone = clean_input($phone);
    $safePreferredDay = clean_input($preferredDay);
    $safeService = clean_input($service);
    $subject = 'Nouvelle demande de RDV - ' . $safeName;
    $serviceLabel = $safeService !== '' ? $safeService : 'Non precise';
    $origin = $_SERVER['HTTP_HOST'] ?? 'unknown';
    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

    $bodyLines = [
        "Nouvelle demande de RDV depuis le site.",
        "",
        "Nom : {$safeName}",
        "Telephone : {$safePhone}",
        "Jour prefere : {$safePreferredDay}",
        "Soin souhaite : {$serviceLabel}",
        "",
        "Site : {$origin}",
        "IP : {$ipAddress}",
        "Date : " . gmdate('Y-m-d H:i:s') . ' UTC',
    ];

    $payload = implode("\r\n", [
        'To: ' . $recipient,
        'From: ' . encode_header($fromName) . " <{$username}>",
        'Subject: ' . encode_header($subject),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        '',
        implode("\r\n", $bodyLines),
        '',
    ]);

    $payloadLength = strlen($payload);
    $payloadPosition = 0;

    $ch = curl_init();

    curl_setopt_array($ch, [
        CURLOPT_URL => "{$scheme}://{$host}:{$port}",
        CURLOPT_USERNAME => $username,
        CURLOPT_PASSWORD => $password,
        CURLOPT_MAIL_FROM => $username,
        CURLOPT_MAIL_RCPT => [$recipient],
        CURLOPT_USE_SSL => CURLUSESSL_ALL,
        CURLOPT_UPLOAD => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_INFILESIZE => $payloadLength,
        CURLOPT_READFUNCTION => static function ($curl, $fd, $length) use ($payload, &$payloadPosition) {
            $chunk = substr($payload, $payloadPosition, $length);
            $payloadPosition += strlen($chunk);
            return $chunk;
        },
    ]);

    $result = curl_exec($ch);

    if ($result === false) {
        $error = curl_error($ch);
        curl_close($ch);
        throw new RuntimeException($error !== '' ? $error : "Echec d'envoi SMTP.");
    }

    curl_close($ch);
}

try {
    enforce_rate_limit();
    send_smtp_mail($config, $name, $phone, $preferredDay, $service);
    echo json_encode(['success' => true]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode(['message' => "L'envoi de l'email a echoue."]);
}
