# Push Notification Setup - Elite Carpenter Website

Your website now sends instant push notifications when someone submits a contact form!

**Current Setup:** WhatsApp notifications (can switch to FREE Telegram)

**Recipients:**
- 416-526-4116
- 416-841-6057
- 647-707-7884

---

## Choose Your Notification Method

### ⭐ OPTION 1: WhatsApp (RECOMMENDED)
**Pros:**
- ✅ Uses existing WhatsApp (no new app needed)
- ✅ Instant push notifications to phone
- ✅ Rich formatting with emojis
- ✅ Only **$0.005 per message** (3 people = $0.015 per lead)
- ✅ Way cheaper than SMS ($0.0079/msg)

**Cons:**
- 💰 Costs ~$0.015 per lead (very cheap but not free)
- Requires Twilio account setup

**Best for:** Teams who want instant notifications without downloading new apps

---

### 🆓 OPTION 2: Telegram (100% FREE)
**Pros:**
- ✅ **Completely FREE forever**
- ✅ Instant push notifications
- ✅ Works exactly like WhatsApp
- ✅ Group chat with all team members
- ✅ Rich formatting
- ✅ 5 minute setup

**Cons:**
- ⚠️ Requires downloading Telegram app (free, 2 minutes)

**Best for:** Teams who want zero costs and don't mind a new app

---

## 📱 OPTION 1 SETUP: WhatsApp via Twilio

### Step 1: Create Twilio Account
1. Go to https://www.twilio.com/try-twilio
2. Sign up (free trial includes credits)
3. Verify your phone number

### Step 2: Activate WhatsApp Sandbox
1. In Twilio Console, go to **Messaging** → **Try it out** → **Send a WhatsApp message**
2. You'll see a sandbox number (e.g., +1 415 523 8886)
3. **Each of the 3 people must:**
   - Send a WhatsApp message to the sandbox number
   - Message format: `join <your-code>` (Twilio shows the exact code)
   - Example: `join happy-lion`
4. You'll get confirmation: "You are all set!"

### Step 3: Get Twilio Credentials
1. Go to Twilio Console Dashboard
2. Copy these values:
   - **Account SID** (starts with AC...)
   - **Auth Token** (click to reveal)
   - **WhatsApp Number** (from sandbox, format: whatsapp:+14155238886)

### Step 4: Add to Vercel
1. Go to Vercel Dashboard → **elite-carpenter-website**
2. Click **Settings** → **Environment Variables**
3. Add these variables:

```
Name: TWILIO_ACCOUNT_SID
Value: [Your Account SID]
Environments: Production, Preview, Development

Name: TWILIO_AUTH_TOKEN
Value: [Your Auth Token]
Environments: Production, Preview, Development

Name: TWILIO_WHATSAPP_NUMBER
Value: whatsapp:+14155238886
Environments: Production, Preview, Development
```

### Step 5: Redeploy
1. Go to **Deployments** tab
2. Click **Redeploy** on latest deployment
3. Done! Test the form.

---

## 🆓 OPTION 2 SETUP: Telegram (FREE)

### Step 1: Download Telegram
All 3 people download Telegram:
- iPhone: App Store → "Telegram"
- Android: Play Store → "Telegram"
- Desktop: https://telegram.org/apps

### Step 2: Create a Bot
1. Open Telegram and search for: **@BotFather**
2. Start chat and send: `/newbot`
3. Follow prompts:
   - Bot name: `Elite Carpenter Leads`
   - Username: `elitecarpenter_leads_bot` (or any unique name)
4. **Save the Bot Token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Step 3: Create Group Chat
1. In Telegram, create **New Group**
2. Name it: `Elite Carpenter Leads`
3. Add all 3 people:
   - Add by phone: +14165264116
   - Add by phone: +14168416057
   - Add by phone: +16477077884
4. Add your bot: Search `@elitecarpenter_leads_bot` and add

### Step 4: Get Chat ID
1. Send a message in the group: "Test"
2. Visit this URL in browser (replace YOUR_BOT_TOKEN):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
3. Look for `"chat":{"id":-1234567890}`
4. **Save the Chat ID** (the negative number)

### Step 5: Add to Vercel
1. Go to Vercel Dashboard → **elite-carpenter-website**
2. Click **Settings** → **Environment Variables**
3. Add these variables:

```
Name: TELEGRAM_BOT_TOKEN
Value: [Your Bot Token from Step 2]
Environments: Production, Preview, Development

Name: TELEGRAM_CHAT_ID
Value: [Your Chat ID from Step 4]
Environments: Production, Preview, Development
```

### Step 6: Switch to Telegram
1. Edit both `index.html` and `contact.html`
2. Find this line:
   ```javascript
   fetch('/api/whatsapp-notify', {
   ```
3. Change to:
   ```javascript
   fetch('/api/telegram-notify', {
   ```
4. Commit and push changes

### Step 7: Redeploy
1. Go to **Deployments** tab
2. Click **Redeploy**
3. Done! Test the form.

---

## 🎯 What You'll Receive

### WhatsApp Message:
```
🔔 NEW LEAD - Elite Carpenter

👤 Name: John Doe
📱 Phone: 416-555-1234
📧 Email: john@example.com
🏗️ Project: Kitchen Renovation
📍 City: Hamilton

💬 Message:
Looking to renovate my kitchen this spring...

⏰ Mar 30, 2026, 1:15 PM

Respond ASAP to close this lead! 🚀
```

### Telegram Message:
```
🔔 NEW LEAD - Elite Carpenter

👤 Name: John Doe
📱 Phone: 416-555-1234
📧 Email: john@example.com
🏗️ Project: Kitchen Renovation
📍 City: Hamilton

💬 Message:
Looking to renovate my kitchen this spring...

⏰ Received: Mar 30, 2026, 1:15 PM
```

---

## 💰 Cost Comparison

| Method | Cost per Lead | 100 Leads | 1000 Leads |
|--------|--------------|-----------|------------|
| **Telegram** | $0 | $0 | $0 |
| **WhatsApp** | $0.015 | $1.50 | $15 |
| **SMS** | $0.024 | $2.40 | $24 |

---

## 🔧 How It Works

1. Someone fills out contact form
2. Form data sent to `/api/whatsapp-notify` (or `telegram-notify`)
3. Instant push notification to all 3 phones
4. Email also sent via Web3Forms
5. User redirected to thank-you page

**Both systems run in parallel** - if one fails, the other still works!

---

## 📂 File Locations

- WhatsApp Handler: `/api/whatsapp-notify.js`
- Telegram Handler: `/api/telegram-notify.js`
- Homepage Form: `/index.html` (line ~2120)
- Contact Page Form: `/contact.html` (line ~232)
- Dependencies: `/package.json`

---

## 🐛 Troubleshooting

### WhatsApp not working?
1. Did all 3 people join the Twilio sandbox?
2. Check Vercel environment variables
3. Verify WhatsApp number format: `whatsapp:+14155238886`
4. Check Vercel Function Logs for errors

### Telegram not working?
1. Is bot added to group?
2. Did you send test message to get Chat ID?
3. Check environment variables
4. Verify bot token is correct

### Neither working?
- Form submissions will still send emails via Web3Forms
- Check browser console for errors
- Verify you switched the API endpoint in code

---

## 🎉 Testing

1. Visit: https://www.elitecarpenterreno.ca
2. Fill out the contact form
3. Submit
4. Check your phone for instant notification!

---

## 📞 Support

Both systems are now installed and ready. Choose one:
- **Want free?** → Set up Telegram (5 minutes)
- **Want existing WhatsApp?** → Set up Twilio WhatsApp ($0.015/lead)

Both are better than SMS! 🚀
