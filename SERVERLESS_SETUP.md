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

- `api/submit-form/index.js` - Serverless function (CommonJS format)
- `api/test/index.js` - Test endpoint to verify API is working
- `api/submit-form/package.json` - Dependencies for submit-form function
- `api/test/package.json` - Dependencies for test function
- `vercel.json` - Updated configuration
- `package.json` - Added nodemailer dependency
- `src/components/BookingPage.tsx` - Updated to use the API

## Testing the API

Before testing the form submission, you can test if the API is working by visiting:

- `https://sheym.vercel.app/api/test` - Should return a JSON response

If this works, then the API routing is correct and the issue might be with the email configuration.

## Directory Structure

The API functions are now organized as:

```
api/
├── submit-form/
│   ├── index.js
│   └── package.json
└── test/
    ├── index.js
    └── package.json
```

This structure allows Vercel to properly detect and deploy each function as a separate serverless function.

## Testing

After deploying to Vercel with the environment variables set, the forms should work end-to-end.
