# Serverless Function Setup

This project now includes a serverless function to handle form submissions and send emails to sheytimahmedia@gmail.com.

## Environment Variables Required

Add these environment variables to your Vercel project:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add the following variables:

```
EMAIL_USER=sheytimahmedia@gmail.com
EMAIL_PASS=your_gmail_app_password_here
```

## Gmail App Password Setup

To get the EMAIL_PASS:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App passwords
5. Generate a new app password for "Mail"
6. Use this password as EMAIL_PASS (not your regular Gmail password)

## How It Works

1. When users submit forms on the booking page, the data is sent to `/api/submit-form`
2. The serverless function formats the data into HTML emails
3. Two emails are sent:
   - One to sheytimahmedia@gmail.com with the form data
   - One confirmation email to the user
4. The user sees a success/error message based on the response

## Files Added/Modified

- `api/submit-form.js` - Serverless function
- `vercel.json` - Updated to include API routes
- `package.json` - Added nodemailer dependency
- `src/components/BookingPage.tsx` - Updated to use the API

## Testing

After deploying to Vercel with the environment variables set, the forms should work end-to-end.
