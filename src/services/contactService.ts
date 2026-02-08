export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  // This function can be extended to send data to a backend API
  // For now, it just returns success
  return {
    success: true,
    message: "Message sent successfully"
  };
};

export const prepareWhatsAppMessage = (data: ContactFormData): string => {
  const message = `
*New Contact Form Submission*

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
${data.company ? `*Company:* ${data.company}` : ''}
*Subject:* ${data.subject}

*Message:*
${data.message}
  `.trim();
  
  return message;
};
