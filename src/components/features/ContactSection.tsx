import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg text-gray-600">
              Let's discuss how we can help you achieve your marketing goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@company.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Your Company"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your marketing goals..."
                    rows={4}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#074edb] hover:bg-[#063db3] text-white py-6 text-lg"
                >
                  Get Free Consultation
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-600 mb-8">
                  Have questions? We're here to help. Reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#074edb]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email Us</div>
                    <div className="text-gray-600">info@arroway.com</div>
                    <div className="text-gray-600">support@arroway.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#074edb]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Call Us</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                    <div className="text-sm text-gray-500">Mon-Fri 9am-6pm EST</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#074edb]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Visit Us</div>
                    <div className="text-gray-600">123 Marketing Avenue</div>
                    <div className="text-gray-600">New York, NY 10001</div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-[#074edb] to-[#063db3] p-8 rounded text-white mt-8">
                <h4 className="text-xl font-bold mb-2">Free Marketing Audit</h4>
                <p className="text-blue-100 mb-4">
                  Get a comprehensive analysis of your current marketing strategy.
                </p>
                <Button className="bg-white text-[#074edb] hover:bg-gray-100 w-full">
                  Claim Your Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
