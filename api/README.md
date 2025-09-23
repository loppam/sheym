# Vercel Serverless Functions

This directory contains the serverless functions for the Sheytimah Media website.

## Environment Variables Required

To make the email functionality work, you need to set the following environment variables in your Vercel project:

### Required Environment Variables

1. **EMAIL_USER** - The Gmail address to send emails from (e.g., `sheytimahmedia@gmail.com`)
2. **EMAIL_PASS** - The Gmail App Password (not your regular password)

### How to Set Up Gmail App Password

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. At the bottom, find "App passwords"
4. Generate a new app password for "Mail"
5. Use this 16-character password as `EMAIL_PASS`

### Setting Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the following variables:
   - `EMAIL_USER` = `sheytimahmedia@gmail.com`
   - `EMAIL_PASS` = `your-16-character-app-password`

## API Endpoints

### POST /api/submit-form

Handles form submissions from the booking page.

**Request Body:**

```json
{
  "formType": "consultation" | "recovery",
  "formData": {
    // Form data based on formType
  }
}
```

**Response:**

```json
{
  "success": true,
  "message": "Form submitted successfully!"
}
```

## Features

- ✅ Sends formatted HTML emails to sheytimahmedia@gmail.com
- ✅ Sends confirmation emails to users
- ✅ Handles both consultation and recovery form types
- ✅ CORS enabled for frontend integration
- ✅ Error handling and validation
- ✅ Professional email templates with styling
