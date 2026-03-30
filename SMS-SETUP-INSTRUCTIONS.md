# SMS Notification Setup Instructions

Your website now has SMS push notifications configured to alert you when someone submits a contact form. The notifications will be sent to:
- 416-526-4116
- 416-841-6057
- 647-707-7884

## What Was Changed

### 1. Forms Updated
- ✅ Split "Name" field into "First Name" and "Last Name" on both contact forms
- ✅ Changed "renovations" (plural) to "renovation" (singular) throughout the site
- ✅ Added JavaScript to send SMS notifications on form submission

### 2. SMS System Created
- ✅ Created `/api/send-sms.js` - Vercel serverless function for SMS
- ✅ Added Twilio integration
- ✅ Forms now trigger SMS alerts while still sending emails via Web3Forms

## How to Complete the Setup

To enable SMS notifications, you need to:

### Step 1: Create a Twilio Account
1. Go to https://www.twilio.com/try-twilio
2. Sign up for a free trial account (includes free credits)
3. Verify your phone number

### Step 2: Get Your Twilio Credentials
Once logged into Twilio:
1. Go to your **Twilio Console Dashboard**
2. Find and copy these three values:
   - **Account SID** (starts with "AC...")
   - **Auth Token** (click to reveal)
   - **Phone Number** (from your trial number, format: +1xxxxxxxxxx)

### Step 3: Add Environment Variables to Vercel
1. Log into your Vercel dashboard
2. Go to your project: **elite-carpenter-website**
3. Click **Settings** → **Environment Variables**
4. Add these three variables:

   **Variable Name:** `TWILIO_ACCOUNT_SID`
   **Value:** Your Account SID from Twilio
   **Environment:** Production, Preview, Development (select all)

   **Variable Name:** `TWILIO_AUTH_TOKEN`
   **Value:** Your Auth Token from Twilio
   **Environment:** Production, Preview, Development (select all)

   **Variable Name:** `TWILIO_PHONE_NUMBER`
   **Value:** Your Twilio phone number (format: +1xxxxxxxxxx)
   **Environment:** Production, Preview, Development (select all)

5. Click **Save** after each variable

### Step 4: Redeploy Your Site
After adding the environment variables:
1. Go to the **Deployments** tab in Vercel
2. Click the **•••** menu on the latest deployment
3. Select **Redeploy**
4. Or simply push a new commit to GitHub

## Testing the Setup

1. Visit your website contact form
2. Fill out and submit the form
3. You should receive:
   - ✅ An email (via Web3Forms)
   - ✅ SMS text messages to all three phone numbers

The SMS message will look like:
```
🔔 New Elite Carpenter Lead!

Name: John Doe
Phone: 416-555-1234
Email: john@example.com
Project: Kitchen Renovation
City: Hamilton
Message: Looking for a kitchen remodel...

Respond ASAP!
```

## Costs

**Twilio Free Trial:**
- Includes $15.50 in free credits
- SMS costs $0.0079 per message
- Your setup sends 3 SMS per form submission = $0.0237 per lead
- Trial credits = ~650 leads worth of notifications

**After Trial:**
- Pay-as-you-go: $0.0079/SMS
- Or upgrade to a paid plan for better rates

## Troubleshooting

### SMS notifications not working?
1. Check Vercel environment variables are set correctly
2. Make sure you've redeployed after adding variables
3. Check Vercel Function Logs for errors
4. Verify your Twilio account is active

### Only getting emails, no SMS?
- Environment variables likely not set
- Check Vercel Dashboard → Settings → Environment Variables

### SMS going to wrong numbers?
- Edit `/api/send-sms.js` and update the `notifyNumbers` array

## Important Notes

- ✅ Email notifications will ALWAYS work (via Web3Forms)
- ✅ If SMS fails, it won't break the form submission
- ✅ SMS notifications run in the background after form submission
- ✅ All three phone numbers receive the same notification simultaneously

## File Locations

- SMS Handler: `/api/send-sms.js`
- Homepage Form: `/index.html` (line ~1951)
- Contact Page Form: `/contact.html` (line ~178)
- Dependencies: `/package.json`

## Need Help?

If you have issues:
1. Check Vercel deployment logs
2. Check Twilio console for error messages
3. Ensure environment variables are saved and deployment was redeployed

---

**Note:** The SMS system is now installed and ready. It just needs the Twilio credentials added to Vercel to start working!
