import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";

export function HomeTestimonial() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content:
        "Arroway transformed our digital presence. Within 3 months, we saw a 250% increase in qualified leads.",
      rating: 5,
      metric: "+250% Leads",
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content:
        "The team's data-driven approach helped us rank #1 for our main keywords. Our organic traffic tripled.",
      rating: 5,
      metric: "3x Traffic",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our clients have to say about partnering with Arroway.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={testimonial.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow relative h-full"
              >
                <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-4 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Metric Badge */}
                <div className="inline-block bg-blue-100 text-[#074edb] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {testimonial.metric}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.3}>
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="border-2 border-gray-300 hover:border-[#074edb] hover:text-[#074edb] px-8 py-6 text-lg">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
