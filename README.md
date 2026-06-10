# Morocco Dental Boost

Landing page with a booking form. The frontend submits reservations to [`public/api/book-appointment.php`](/c:/Users/pc/projectw/morocco-dental-boost/public/api/book-appointment.php), which can now either:

- send an email with SMTP
- append each reservation into a Google Sheet through a Google Apps Script webhook

## Google Sheet Setup

1. Create a Google Sheet.
2. Open `Extensions > Apps Script`.
3. Paste the content of [`google-apps-script-bookings-example.js`](/c:/Users/pc/projectw/morocco-dental-boost/google-apps-script-bookings-example.js).
4. Replace `WEBHOOK_SECRET` with a long random secret.
5. Deploy it as a `Web app`.
6. Use:
   - Execute as: `Me`
   - Who has access: `Anyone`
7. Copy the generated `/exec` URL.

## PHP Config

Create `mail-config.php` from [`mail-config.example.php`](/c:/Users/pc/projectw/morocco-dental-boost/mail-config.example.php) and set:

```php
<?php

return [
    'booking_transport' => 'sheet_webhook',
    'sheet_webhook_url' => 'https://script.google.com/macros/s/your-script-id/exec',
    'sheet_webhook_secret' => 'same-secret-as-apps-script',
];
```

If you want to keep email available as a fallback, switch:

```php
'booking_transport' => 'smtp_email',
```

and fill the SMTP keys already present in the example config.

## Local Development

```bash
npm install
npm run dev
```

The booking form still posts to `/api/book-appointment.php`; only the backend delivery target changes.
