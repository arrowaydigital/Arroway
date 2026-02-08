// Mock contact service for form submission
// In a real application, this would make an API call to your backend

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real application, you would send the data to your backend API
  console.log('Contact form submitted:', data);
  
  // For now, simulate a successful response
  // In production, you might send this to an actual backend endpoint
  return {
    success: true,
    message: 'Your message has been sent successfully. Our team will contact you shortly.',
  };
};

// Alternative function for WhatsApp integration (keeping existing functionality)
export const prepareWhatsAppMessage = (data: ContactFormData): string => {
  return `
New Contact Enquiry

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || "N/A"}
Subject: ${data.subject}

Message:
${data.message}
  `.trim();
};