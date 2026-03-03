# EmailJS Setup Guide for Contact Form

## 📧 Quick Setup (5 minutes)

Your contact form is ready to send messages directly to **lalitpunjabi.pro@gmail.com**. Follow these steps:

---

## Step 1: Create Free EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Create account with your Gmail
4. Verify your email

---

## Step 2: Add Email Service (Gmail)

1. In EmailJS Dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **Gmail**
4. Connect your Gmail account (`lalitpunjabi.pro@gmail.com`)
5. Click **"Create Service"**
6. Copy the **Service ID** (e.g., `service_abc123xyz`)

---

## Step 3: Create Email Template

1. Click **"Email Templates"** in left menu
2. Click **"Create New Template"**
3. Use this HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .container { padding: 20px; background: #f5f5f5; }
    .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    h2 { color: #00E5FF; margin-bottom: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { color: #333; margin-top: 5px; }
    .message { background: #f9f9f9; padding: 15px; border-left: 4px solid #00E5FF; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h2>📨 New Contact Form Message</h2>
      
      <div class="field">
        <div class="label">From:</div>
        <div class="value">{{from_name}}</div>
      </div>
      
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">{{from_email}}</div>
      </div>
      
      <div class="message">
        <div class="label">Message:</div>
        <div class="value" style="margin-top: 10px;">{{message}}</div>
      </div>
      
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
      <p style="color: #888; font-size: 12px;">Sent from Lalit Punjabi's Portfolio</p>
    </div>
  </div>
</body>
</html>
```

4. In **Template Settings** (gear icon):
   - Set **"To Email"** to: `lalitpunjabi.pro@gmail.com`
   - Set **"From Name"** to: `{{from_name}}`
   - Set **"From Email"** to: `{{from_email}}`
   - Set **"Subject"** to: `New Message from {{from_name}}`

5. Click **"Save Template"**
6. Copy the **Template ID** (e.g., `template_xyz789`)

---

## Step 4: Get Your Public Key

1. Click your **Profile Icon** (top right)
2. Go to **"Account"**
3. Scroll to **"API Keys"** section
4. Copy the **Public Key** (e.g., `user_abc123xyz`)

---

## Step 5: Update ContactSection.tsx

Open `src/components/ContactSection.tsx` and replace these values in the `handleSubmit` function:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',      // ← Replace with your Service ID
  'YOUR_TEMPLATE_ID',      // ← Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'lalitpunjabi.pro@gmail.com'
  },
  'YOUR_PUBLIC_KEY'        // ← Replace with your Public Key
);
```

### Example (with real values):

```typescript
await emailjs.send(
  'service_abc123',        // Your actual Service ID
  'template_xyz789',       // Your actual Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'lalitpunjabi.pro@gmail.com'
  },
  'user_def456'            // Your actual Public Key
);
```

---

## Step 6: Test the Form

1. Run your dev server: `npm run dev`
2. Scroll to the contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your Gmail inbox at `lalitpunjabi.pro@gmail.com`

✅ **You should receive the email instantly!**

---

## 🎯 How It Works

1. Visitor fills out the terminal form
2. Clicks "Send Message"
3. EmailJS sends email directly from their servers
4. You receive it at `lalitpunjabi.pro@gmail.com`
5. You read and reply manually from your Gmail

---

## 📊 EmailJS Free Plan Limits

- ✅ **200 emails/month** (FREE)
- ✅ Perfect for portfolio/contact forms
- ✅ No credit card required
- ✅ Automatic delivery tracking

---

## 🔒 Security Notes

- Your email stays private (not exposed to visitors)
- No backend code needed
- EmailJS handles all email delivery
- Spam protection built-in

---

## 💡 Pro Tips

1. **Customize the template**: Add your branding/colors
2. **Set up notifications**: Enable push notifications in EmailJS
3. **Monitor usage**: Check dashboard for email count
4. **Backup plan**: Add your email as plain text in footer for direct contact

---

## ❓ Troubleshooting

### "Failed to send message"
- Check your Service ID, Template ID, and Public Key
- Ensure they match exactly (case-sensitive)
- Verify your Gmail service is connected in EmailJS

### Emails not arriving
- Check spam folder
- Verify "To Email" in template settings
- Ensure your Gmail account is verified

### Need more than 200 emails/month
- Upgrade to EmailJS Pro ($9.99/month)
- Or use multiple free accounts

---

## 🎉 Done!

Your contact form is now fully functional and will deliver messages straight to your Gmail inbox where you can read and reply to them manually!

**Setup time:** ~5-10 minutes  
**Cost:** FREE  
**Maintenance:** Zero

---

**Questions?** Email me at lalitpunjabi.pro@gmail.com 😊
