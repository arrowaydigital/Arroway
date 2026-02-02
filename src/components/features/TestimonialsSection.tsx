import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content:
        "Arroway transformed our digital presence. Within 3 months, we saw a 250% increase in qualified leads and our ad spend became 40% more efficient.",
      rating: 5,
      metric: "+250% Leads",
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content:
        "The team's data-driven approach to SEO helped us rank #1 for our main keywords. Our organic traffic tripled in just 6 months.",
      rating: 5,
      metric: "3x Organic Traffic",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, ShopLocal",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content:
        "Best marketing investment we've made. The ROI speaks for itself - every dollar spent generates over $4 in revenue. Highly recommend!",
      rating: 5,
      metric: "400% ROI",
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with Arroway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Metric Badge */}
              <div className="inline-block bg-blue-100 text-[#074edb] px-4 py-2 rounded text-sm font-semibold mb-6">
                {testimonial.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
