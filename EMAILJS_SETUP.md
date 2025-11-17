# EmailJS Setup Instructions

Your contact form is now functional with EmailJS! Follow these steps to complete the setup:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## 2. Set Up Email Service
1. In EmailJS dashboard, click "Email Services"
2. Add your email provider (Gmail, Outlook, etc.)
3. Follow the connection process (you'll need to authorize EmailJS to send emails on your behalf)

## 3. Create Email Template
1. Click "Email Templates" in the dashboard
2. Create a new template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (where you want to receive messages)

Example template:
```
You have a new message from {{from_name}} ({{from_email}}):

{{message}}

---
Sent from your portfolio contact form
```

## 4. Get Your Credentials
Find these in your EmailJS dashboard:
- **Service ID**: In Email Services → click your service → copy Service ID
- **Template ID**: In Email Templates → click your template → copy Template ID  
- **Public Key**: In Account → General → copy Public Key

## 5. Update Your Code
In `src/App.js`, replace the placeholder values in the `handleSubmit` function:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID', // Replace with your actual Template ID
  templateParams,
  'YOUR_PUBLIC_KEY' // Replace with your actual Public Key
);
```

Also update the recipient email:
```javascript
to_email: 'your-email@example.com' // Replace with your actual email
```

## 6. Test Your Form
1. Run `npm start` to start your development server
2. Fill out the contact form and submit
3. Check your email for the test message

## Troubleshooting
- **No email received**: Check your EmailJS dashboard logs
- **Error in console**: Verify all IDs are correct and properly copied
- **Spam folder**: Check if emails are going to spam

## Free Plan Limits
EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 3 email templates
- 1,000 contacts

For higher volume, consider upgrading to a paid plan.
