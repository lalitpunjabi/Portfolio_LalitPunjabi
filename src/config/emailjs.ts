// EmailJS Configuration for Contact Form
// Replace the values below with your actual credentials from EmailJS dashboard

export const EMAILJS_CONFIG = {
  // Step 1: Get this from Email Services > Your Gmail Service
  serviceId: 'service_150nk2g', // e.g., 'service_abc123xyz'
  
  // Step 2: Get this from Email Templates > Your Template
  templateId: 'template_21d4nqe', // e.g., 'template_xyz789'
  
  // Step 3: Get this from Account > API Keys > Public Key
  publicKey: 'dbm9TiSEDNZpIYS_Q', // e.g., 'user_abc123xyz'
  
  // Your email where you'll receive messages
  toEmail: 'lalitpunjabi.pro@gmail.com'
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
