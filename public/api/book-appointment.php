<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

$configPath = __DIR__ . '/mail-config.php';

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

if ($name === '' || $phone === '' || $preferredDay === '') {
    http_response_code(422);
    echo json_encode(['message' => "Veuillez remplir tous les champs obligatoires."]);
    exit;
}

if (!function_exists('curl_init')) {
    http_response_code(500);
    echo json_encode(['message' => "L'extension cURL n'est pas disponible sur le serveur."]);
    exit;
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
    $subject = 'Nouvelle demande de RDV - ' . $name;
    $serviceLabel = $service !== '' ? $service : 'Non precise';
    $origin = $_SERVER['HTTP_HOST'] ?? 'unknown';
    $ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'unknown';

    $bodyLines = [
        "Nouvelle demande de RDV depuis le site.",
        "",
        "Nom : {$name}",
        "Telephone : {$phone}",
        "Jour prefere : {$preferredDay}",
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
    send_smtp_mail($config, $name, $phone, $preferredDay, $service);
    echo json_encode(['success' => true]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode(['message' => "L'envoi de l'email a echoue."]);
}
