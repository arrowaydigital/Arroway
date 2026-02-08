import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

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
      industry: "Technology",
      service: "Digital Marketing",
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content:
        "The team's data-driven approach to SEO helped us rank #1 for our main keywords. Our organic traffic tripled in just 6 months.",
      rating: 5,
      metric: "3x Organic Traffic",
      industry: "SaaS",
      service: "SEO",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, ShopLocal",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content:
        "Best marketing investment we've made. The return speaks for itself - every dollar spent generates over $4 in revenue. Highly recommend!",
      rating: 5,
      metric: "400% Return",
      industry: "E-commerce",
      service: "Performance Marketing",
    },
    {
      name: "David Kim",
      role: "Marketing Lead, FinTech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content:
        "Arroway's expertise in financial services marketing helped us navigate complex compliance requirements while growing our customer base by 180%.",
      rating: 5,
      metric: "180% Customer Growth",
      industry: "Finance",
      service: "Compliance Marketing",
    },
    {
      name: "Jessica Williams",
      role: "Director, HealthPlus Clinic",
      image: "https://images.unsplash.com/photo-1494790108505-5ad9d5bded99?w=100&h=100&fit=crop",
      content:
        "Working with Arroway allowed us to reach more patients while maintaining HIPAA compliance. Our appointment bookings increased by 150% in 4 months.",
      rating: 5,
      metric: "150% Appointment Increase",
      industry: "Healthcare",
      service: "Healthcare Marketing",
    },
    {
      name: "Robert Thompson",
      role: "Owner, Local Restaurant Group",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
      content:
        "As a restaurant owner, I needed immediate results. Arroway delivered - our online orders doubled and foot traffic increased by 60% in just two months.",
      rating: 5,
      metric: "2x Online Orders",
      industry: "Hospitality",
      service: "Local Marketing",
    },
  ];

  const [filter, setFilter] = useState<'all' | 'industry' | 'service'>('all');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter testimonials based on selected category
  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => 
        (filter === 'industry' ? t.industry.toLowerCase() === activeCategory.toLowerCase() : true) &&
        (filter === 'service' ? t.service.toLowerCase() === activeCategory.toLowerCase() : true)
      );

  // Get unique industries and services for filter options
  const industries = [...new Set(testimonials.map(t => t.industry))];
  const services = [...new Set(testimonials.map(t => t.service))];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <br/>
            <br/>
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses who transformed their growth with Arroway.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Testimonial filters">
          <button 
            onClick={() => { setActiveCategory('all'); }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === 'all' ? 'bg-[#074edb] text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
            role="tab"
            aria-selected={activeCategory === 'all'}
            tabIndex={activeCategory === 'all' ? 0 : -1}
          >
            All
          </button>
          
          <span className="font-medium text-gray-500 self-center hidden sm:block" aria-hidden="true">Industries:</span>
          {industries.map(industry => (
            <button 
              key={industry}
              onClick={() => { setActiveCategory(industry); setFilter('industry'); }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === industry ? 'bg-emerald-500 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              role="tab"
              aria-selected={activeCategory === industry}
              tabIndex={activeCategory === industry ? 0 : -1}
            >
              {industry}
            </button>
          ))}
          
          <span className="font-medium text-gray-500 self-center hidden sm:block ml-4" aria-hidden="true">Services:</span>
          {services.map(service => (
            <button 
              key={service}
              onClick={() => { setActiveCategory(service); setFilter('service'); }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === service ? 'bg-purple-500 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              role="tab"
              aria-selected={activeCategory === service}
              tabIndex={activeCategory === service ? 0 : -1}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredTestimonials.map((testimonial, index) => (
            <div 
              key={`${testimonial.name}-${testimonial.industry}-${testimonial.service}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#074edb]/5 to-emerald-50/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-[#074edb] bg-blue-50 px-2.5 py-1 rounded-full">
                    {testimonial.metric}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-5 text-base relative z-10">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-600">{testimonial.role}</div>
                    <div className="flex gap-1.5 mt-1">
                      <span className="text-xs text-gray-500">{testimonial.industry}</span>
                      <span className="text-xs text-gray-300">•</span>
                      <span className="text-xs text-gray-500">{testimonial.service}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
