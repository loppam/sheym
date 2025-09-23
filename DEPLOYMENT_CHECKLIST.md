# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. **Environment Variables Setup**

In your Vercel dashboard → Settings → Environment Variables, add:

- `EMAIL_USER` = `sheytimahmedia@gmail.com`
- `EMAIL_PASS` = Your Gmail App Password (16-character code)

### 2. **Gmail App Password Setup**

1. Go to Google Account → Security → 2-Step Verification
2. Scroll down to "App passwords"
3. Generate a new app password for "Mail"
4. Use this 16-character password as `EMAIL_PASS`

### 3. **File Structure Verification**

Ensure these files exist:

- ✅ `api/submit-form.js` (main function)
- ✅ `api/test.js` (test endpoint)
- ✅ `vercel.json` (configuration)
- ✅ `src/components/BookingPage.tsx` (frontend)

## 🧪 Testing After Deployment

### 1. **Test API Endpoints**

Visit these URLs after deployment:

- `https://yourproject.vercel.app/api/test` - Should return API status
- `https://yourproject.vercel.app/api/submit-form` - Should return 405 (Method Not Allowed) for GET

### 2. **Test Form Submission**

1. Go to your booking page
2. Fill out the consultation form
3. Submit and check for success message
4. Check your email (sheytimahmedia@gmail.com) for the form data

### 3. **Check Vercel Function Logs**

1. Go to Vercel Dashboard → Functions
2. Click on `submit-form` function
3. Check logs for any errors

## 🔧 Troubleshooting

### Common Issues:

1. **405 Method Not Allowed**

   - ✅ Fixed: Updated `vercel.json` with proper runtime
   - ✅ Fixed: Corrected `createTransport` method

2. **Conflicting Functions and Builds Configuration**

   - ✅ Fixed: Removed conflicting `builds` and `routes` configuration
   - ✅ Fixed: Used modern Vercel configuration format
   - ✅ Fixed: Separated static build config from functions config

3. **Email Not Sending**

   - Check environment variables are set
   - Verify Gmail App Password is correct
   - Check Vercel function logs

4. **CORS Errors**

   - ✅ Fixed: CORS headers are properly set

5. **Function Not Found**
   - Ensure file is in `/api/` directory
   - Check `vercel.json` configuration

## 📧 Expected Email Format

### Consultation Request Email:

- Subject: "New Consultation Request from [Name]"
- Contains: Name, Email, Phone, Services, Message, Contact Method

### Recovery Request Email:

- Subject: "New Account Recovery Request from [Full Name]"
- Contains: Full Name, Username, Email, Platforms, Issue Type, etc.

## 🎯 Success Indicators

- ✅ Test endpoint returns 200 with nodemailer status
- ✅ Form submission shows success message
- ✅ Email received at sheytimahmedia@gmail.com
- ✅ User receives confirmation email
- ✅ No errors in Vercel function logs

---

**Ready to deploy!** 🚀
