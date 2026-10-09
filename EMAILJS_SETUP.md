# EmailJS contact form setup

This portfolio sends contact messages directly through EmailJS. No database or backend is required.

The included `.env` is configured with the EmailJS public credentials for this portfolio.

## Required EmailJS template variables

Your EmailJS template must use these variable names:

- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`
- `{{reply_to}}` (optional, useful for Reply)

Example subject:
`Portfolio Contact — {{from_name}}`

Example body:
```
New message from your portfolio

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

Make sure the template's **To Email** is the Gmail address where you want to receive messages.

After changing `.env`, restart Vite.
