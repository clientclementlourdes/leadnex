# Email Service Setup Guide

## Overview

The contact form now sends production-grade emails using **Resend** - a modern email service for developers.

## 🚀 Quick Setup

### Step 1: Get Your Resend API Key

1. Go to: https://resend.com
2. Sign up for a free account (no credit card required)
3. Go to: https://resend.com/api-keys
4. Copy your API key (starts with `re_`)

### Step 2: Update `.env.local`

Add these environment variables to `e:\Jefnish\leadnex\.env.local`:

```env
# Email Service (Resend)
RESEND_API_KEY=re_YOUR_API_KEY_HERE

# Email Configuration
CONTACT_EMAIL_TO=your-organization-email@example.com
CONTACT_EMAIL_FROM=forms@leadnex.com
```

### Step 3: Restart Dev Server

```bash
# Stop: Ctrl+C
# Restart: pnpm dev
```

## ✅ How It Works

### When User Submits Form:

1. **Form Validation** (client-side)
   - Checks all required fields
   - Validates email format
   - Prevents empty submissions

2. **Form Submission** (client → server)
   - Sends POST request to `/api/contact`
   - Shows loading state on button

3. **Server Processing** (API route)
   - Validates form data again (security)
   - Escapes all user input (XSS prevention)
   - Sends TWO emails:
     - **Organization Email**: Full inquiry details
     - **User Email**: Confirmation receipt

4. **User Feedback** (client)
   - Success toast shows: "Inquiry Submitted!"
   - Form closes automatically
   - User receives confirmation email

## 📧 Email Details

### Organization Receives:

```
Subject: 📋 New Inquiry: [Service] - [Name]
Contains:
- User's Name
- User's Email (clickable)
- User's Contact (clickable phone link)
- Service Interested In
- Optional Message/Notes
- Timestamp
```

### User Receives:

```
Subject: ✓ LeadNex - We've Received Your Inquiry
Contains:
- Personalized greeting
- Confirmation of service interest
- Contact details on file
- Response time expectation (24-48 hours)
```

## 🔒 Security Features

✅ **XSS Prevention**: All user input is HTML-escaped  
✅ **Input Validation**: Server-side validation of all fields  
✅ **Email Validation**: Proper email format checking  
✅ **Error Handling**: Graceful error messages without exposing internals  
✅ **Rate Limiting Ready**: Can add rate limiting to prevent spam

## 🧪 Test Email Service

### Option 1: Test Mode (Free)

- Send test emails without charges
- Perfect for development

### Option 2: Live Mode

- Send real emails to actual addresses
- Free tier includes 100 emails/day
- No credit card required for free tier

## 📝 Environment Variables Reference

| Variable             | Purpose              | Example               |
| -------------------- | -------------------- | --------------------- |
| `RESEND_API_KEY`     | API key from Resend  | `re_abc123...`        |
| `CONTACT_EMAIL_TO`   | Where form goes      | `contact@leadnex.com` |
| `CONTACT_EMAIL_FROM` | Email sender address | `forms@leadnex.com`   |

## 🚨 Troubleshooting

### Email not sending?

1. **Check API key** in `.env.local` - must start with `re_`
2. **Restart dev server** after changing `.env.local`
3. **Check browser console** for error messages
4. **Check server logs** for `[CONTACT_EMAIL_ERROR]` messages

### User not receiving confirmation email?

1. Check spam/junk folder
2. Verify email address is correct
3. Wait a few seconds (email takes time)
4. Check CONTACT_EMAIL_TO is valid organization address

### "Email service misconfigured"?

1. `RESEND_API_KEY` is missing or empty
2. Add it to `.env.local`: `RESEND_API_KEY=re_xxxxx`
3. Restart dev server

## 📊 Email Logs

Check server console for:

```
[CONTACT_FORM_RECEIVED] - Form received
[CONTACT_EMAIL_ORG_SENT] - Email sent to organization
[CONTACT_EMAIL_USER_SENT] - Confirmation sent to user
[CONTACT_EMAIL_ORG_ERROR] - Org email failed
[CONTACT_EMAIL_USER_ERROR] - User email failed (non-fatal)
```

## 🎯 For Production

### Pre-Deployment Checklist:

- [ ] Verify `RESEND_API_KEY` is set in production environment
- [ ] Set `CONTACT_EMAIL_TO` to actual organization email
- [ ] Test complete flow with real email
- [ ] Monitor email delivery (Resend dashboard)
- [ ] Set up email forwarding if needed

### Advanced Options:

- Set up Resend domain authentication for higher deliverability
- Configure bounce handling and complaint management
- Implement rate limiting to prevent form spam
- Add email templates to Resend console for versioning

## 📞 Support

**Resend Documentation**: https://resend.com/docs  
**API Status**: https://resend.com/status  
**Contact Resend**: support@resend.com

---

**Status**: ✅ Production-ready  
**Email Service**: Resend v6.14.0  
**Last Updated**: 2026-06-21
