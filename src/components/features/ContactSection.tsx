import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
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
      // WhatsApp number (include country code, no +, no spaces)
      const phoneNumber = "+916379644145"; // ← CHANGE THIS

      // WhatsApp message format
      const whatsappMessage = `
New Contact Enquiry

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "N/A"}

Message:
${formData.message}
      `.trim();

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

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
        company: "",
        message: "",
      });
      
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
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
              <br/>
              <br/>
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Want to discuss your marketing goals? Reach out to our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                We'll connect with you via WhatsApp to discuss your project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
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
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
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
                  className="w-full bg-[#074edb] hover:bg-[#063db3] text-white py-6 text-lg flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="text-[#074edb] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:info@arroway.com" className="text-gray-600 hover:text-[#074edb] transition-colors">
                    info@arroway.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#074edb] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+15551234567" className="text-gray-600 hover:text-[#074edb] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[#074edb] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">New York, USA</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Clock className="text-[#074edb] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Business Hours</p>
                  <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
