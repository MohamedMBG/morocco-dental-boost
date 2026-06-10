<?php

declare(strict_types=1);

return [
    'booking_transport' => 'sheet_webhook',
    'sheet_webhook_url' => 'https://script.google.com/macros/s/your-script-id/exec',
    'sheet_webhook_secret' => 'replace-with-a-random-secret',
    'curl_ssl_verify' => true,

    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 465,
    'smtp_secure' => 'ssl',
    'smtp_username' => 'your-smtp@gmail.com',
    'smtp_password' => 'your-app-password',
    'to_email' => 'drfatihelmehdi@gmail.com',
    'from_name' => 'ORIS Dental Center Website',
];
