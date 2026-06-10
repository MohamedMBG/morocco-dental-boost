<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

$rootPath = dirname(__DIR__, 2);

function resolve_config_path(string $rootPath): ?string
{
    $configuredPath = trim((string) getenv('BOOKING_CONFIG_PATH'));

    if ($configuredPath === '') {
        $configuredPath = trim((string) getenv('MAIL_CONFIG_PATH'));
    }

    $candidates = array_filter([
        $configuredPath !== '' ? $configuredPath : null,
        $rootPath . '/mail-config.php',
        dirname($rootPath) . '/mail-config.php',
        dirname($rootPath, 2) . '/mail-config.php',
    ]);

    foreach ($candidates as $candidate) {
        if (is_file($candidate) && is_readable($candidate)) {
            return $candidate;
        }
    }

    return null;
}

$configPath = resolve_config_path($rootPath);

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['health'])) {
    $health = [
        'ok' => true,
        'endpoint' => 'landing_page_booking',
        'method' => 'GET',
        'phpVersion' => PHP_VERSION,
        'curlAvailable' => function_exists('curl_init'),
        'configLoaded' => $configPath !== null,
        'configPath' => $configPath !== null ? basename($configPath) : null,
    ];

    if ($configPath !== null) {
        $healthConfig = require $configPath;
        $health['bookingTransport'] = is_array($healthConfig) ? ($healthConfig['booking_transport'] ?? null) : null;
        $health['hasSheetWebhookUrl'] = is_array($healthConfig) && trim((string) ($healthConfig['sheet_webhook_url'] ?? '')) !== '';
        $health['hasSheetWebhookSecret'] = is_array($healthConfig) && trim((string) ($healthConfig['sheet_webhook_secret'] ?? '')) !== '';
        $health['sheetWebhookUrlHash'] = $health['hasSheetWebhookUrl'] ? substr(hash('sha256', trim((string) $healthConfig['sheet_webhook_url'])), 0, 12) : null;
        $health['sheetWebhookSecretHash'] = $health['hasSheetWebhookSecret'] ? substr(hash('sha256', trim((string) $healthConfig['sheet_webhook_secret'])), 0, 12) : null;
    }

    echo json_encode($health);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

if ($configPath === null) {
    http_response_code(500);
    echo json_encode(['message' => "Configuration de reservation manquante sur le serveur."]);
    exit;
}

$config = require $configPath;

if (!is_array($config)) {
    http_response_code(500);
    echo json_encode(['message' => "Configuration de reservation invalide."]);
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

if (text_length($name) > 100 || text_length($phone) > 20 || text_length($preferredDay) > 50 || text_length($service) > 100) {
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

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
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
    $fromName = (string) ($config['from_name'] ?? 'ORIS Dental Center Website');

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

function post_booking_to_sheet_webhook(array $config, string $name, string $phone, string $preferredDay, string $service): void
{
    $webhookUrl = trim((string) ($config['sheet_webhook_url'] ?? ''));

    if ($webhookUrl === '') {
        throw new RuntimeException('URL du webhook Google Sheets manquante.');
    }

    $origin = (string) ($_SERVER['HTTP_HOST'] ?? 'unknown');
    $ipAddress = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
    $secret = trim((string) ($config['sheet_webhook_secret'] ?? ''));

    $requestBody = [
        'secret' => $secret,
        'name' => clean_input($name),
        'phone' => clean_input($phone),
        'preferredDay' => clean_input($preferredDay),
        'service' => $service !== '' ? clean_input($service) : 'Non precise',
        'site' => $origin,
        'ip' => $ipAddress,
        'submittedAtUtc' => gmdate('Y-m-d H:i:s') . ' UTC',
    ];

    $headers = [
        'Content-Type: application/json',
        'Accept: application/json',
    ];

    $sslVerify = ($config['curl_ssl_verify'] ?? true) !== false;
    $response = send_sheet_webhook_request($webhookUrl, 'POST', $headers, json_encode($requestBody, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES), $sslVerify);
    $redirectsRemaining = 5;

    while (in_array($response['status'], [301, 302, 303, 307, 308], true) && $response['location'] !== '') {
        if ($redirectsRemaining <= 0) {
            throw new RuntimeException('Trop de redirections depuis le webhook Google Sheets.');
        }

        $redirectsRemaining--;
        $redirectUrl = resolve_redirect_url($webhookUrl, $response['location']);

        // Apps Script returns the JSON result from the redirected URL with GET.
        $response = send_sheet_webhook_request($redirectUrl, 'GET', ['Accept: application/json'], null, $sslVerify);
    }

    $statusCode = $response['status'];

    if ($statusCode < 200 || $statusCode >= 300) {
        throw new RuntimeException('Le webhook Google Sheets a retourne une erreur HTTP ' . $statusCode . '.');
    }

    $decodedResponse = json_decode($response['body'], true);

    if (!is_array($decodedResponse) || ($decodedResponse['ok'] ?? null) !== true) {
        throw new RuntimeException('Le webhook Google Sheets a refuse la reservation.');
    }
}

function send_sheet_webhook_request(string $url, string $method, array $headers, ?string $body, bool $sslVerify): array
{
    $location = '';
    $ch = curl_init($url);

    $options = [
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 20,
        CURLOPT_SSL_VERIFYPEER => $sslVerify,
        CURLOPT_SSL_VERIFYHOST => $sslVerify ? 2 : 0,
        CURLOPT_HEADERFUNCTION => static function ($curl, string $headerLine) use (&$location): int {
            if (stripos($headerLine, 'Location:') === 0) {
                $location = trim(substr($headerLine, strlen('Location:')));
            }

            return strlen($headerLine);
        },
    ];

    if ($method === 'POST') {
        $options[CURLOPT_POST] = true;
        $options[CURLOPT_POSTFIELDS] = $body ?? '';
    } else {
        $options[CURLOPT_HTTPGET] = true;
    }

    curl_setopt_array($ch, $options);
    $responseBody = curl_exec($ch);

    if ($responseBody === false) {
        $error = curl_error($ch);
        curl_close($ch);
        throw new RuntimeException($error !== '' ? $error : 'Echec de l appel webhook.');
    }

    $statusCode = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);

    return [
        'status' => $statusCode,
        'body' => (string) $responseBody,
        'location' => $location,
    ];
}

function resolve_redirect_url(string $baseUrl, string $location): string
{
    if (preg_match('/^https?:\/\//i', $location)) {
        return $location;
    }

    $parts = parse_url($baseUrl);
    $scheme = $parts['scheme'] ?? 'https';
    $host = $parts['host'] ?? '';

    if ($host === '') {
        return $location;
    }

    if (strpos($location, '/') === 0) {
        return $scheme . '://' . $host . $location;
    }

    $path = isset($parts['path']) ? dirname($parts['path']) : '';
    return $scheme . '://' . $host . rtrim($path, '/') . '/' . $location;
}

function dispatch_booking(array $config, string $name, string $phone, string $preferredDay, string $service): void
{
    $mode = strtolower(trim((string) ($config['booking_transport'] ?? 'smtp_email')));

    if ($mode === 'sheet_webhook') {
        post_booking_to_sheet_webhook($config, $name, $phone, $preferredDay, $service);
        return;
    }

    if ($mode === 'smtp_email') {
        send_smtp_mail($config, $name, $phone, $preferredDay, $service);
        return;
    }

    throw new RuntimeException('Mode de reservation inconnu.');
}

try {
    enforce_rate_limit();
    dispatch_booking($config, $name, $phone, $preferredDay, $service);
    echo json_encode(['success' => true]);
} catch (Throwable $exception) {
    error_log('ORIS booking failed: ' . $exception->getMessage());
    http_response_code(500);
    echo json_encode(['message' => "L'enregistrement de la reservation a echoue."]);
}
