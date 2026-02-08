import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GoogleMap } from "@/components/ui/GoogleMap";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Globe, Twitter, Facebook, Instagram, Linkedin, MessageCircle, MailIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, prepareWhatsAppMessage } from "@/services/contactService";

export function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone.replace(/[-\s\(\)]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);

    try {
      // Prepare WhatsApp message
      const whatsappMessage = prepareWhatsAppMessage(formData);
      
      // WhatsApp number (include country code, no +, no spaces)
      const phoneNumber = "+916379644145"; // ← CHANGE THIS

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Open WhatsApp
      window.open(whatsappURL, "_blank");

      // Success toast
      toast({
        title: "Message Ready!",
        description: "Your message is being prepared for WhatsApp.",
        className: "bg-green-500 text-white",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      
      setErrors({});
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-[#074edb] flex-shrink-0 mt-1" />,
      title: "Email",
      value: "arrowaydigital@gmail.com",
      link: "mailto:arrowaydigital@gmail.com",
    },
    {
      icon: <Phone className="text-[#074edb] flex-shrink-0 mt-1" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <Globe className="text-[#074edb] flex-shrink-0 mt-1" />,
      title: "Office",
      value: "123 Business Ave, Suite 100, New York, NY 10001",
      link: "https://maps.google.com/?q=123+Business+Ave,+Suite+100,+New+York,+NY+10001",
    },
    {
      icon: <Clock className="text-[#074edb] flex-shrink-0 mt-1" />,
      title: "Business Hours",
      value: "Mon-Fri: 9AM - 6PM EST",
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "https://twitter.com/arroway" },
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", url: "https://facebook.com/arroway" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", url: "https://instagram.com/arroway" },
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "https://linkedin.com/company/arroway" },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Want to discuss your marketing goals? Reach out to our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-[12px] shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill out the form and our team will contact you via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Project Inquiry"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={errors.subject ? "border-red-500 focus-visible:ring-red-500" : ""}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-sm text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your marketing goals..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#25D366] hover:bg-[#1da851] text-white py-6 text-lg flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-5 w-5" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      {item.icon}
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} className="text-gray-600 hover:text-[#074edb] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-[12px] bg-gray-100 hover:bg-[#074edb] hover:text-white transition-colors duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
                <GoogleMap 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1612345678901!5m2!1sen!2sus" 
                  title="Arroway Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
