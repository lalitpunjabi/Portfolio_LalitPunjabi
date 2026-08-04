// EmailJS Configuration for Contact Form
// Replace the values below with your actual credentials from EmailJS dashboard

export const EMAILJS_CONFIG = {
  // Step 1: Get this from Email Services > Your Gmail Service
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_150nk2g',
  
  // Step 2: Get this from Email Templates > Your Template
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_21d4nqe',
  
  // Step 3: Get this from Account > API Keys > Public Key
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'dbm9TiSEDNZpIYS_Q',
  
  // Your email where you'll receive messages
  toEmail: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'lalitpunjabi.pro@gmail.com'
};

// QUICK SETUP GUIDE:
// 1. Sign up at https://www.emailjs.com/ (FREE)
// 2. Add Gmail service → Copy Service ID
// 3. Create template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Set template "To Email" to lalitpunjabi.pro@gmail.com → Copy Template ID
// 5. Get Public Key from Account > API Keys
// 6. Replace values above
// 7. Done! Test the form

// TEMPLATE VARIABLES TO USE:
// - {{from_name}}     → Visitor's name
// - {{from_email}}    → Visitor's email  
// - {{message}}       → Visitor's message
// - {{to_email}}      → lalitpunjabi.pro@gmail.com (your email)
