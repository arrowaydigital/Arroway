import React from "react";
// Using generic div elements instead of lucide-react icons due to import issues
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      icon: "megaphone", // Using string identifiers instead of actual icon components
      title: "Paid Advertising (PPC/Social)",
      description:
        "Drive qualified leads with strategic Google Ads, Facebook, and Instagram campaigns optimized for maximum ROI and conversion rates.",
      features: ["Google Ads Management", "Social Media Ads", "Retargeting Campaigns"],
      color: "from-blue-500 to-blue-600",
      stats: ["300%+ Average ROI", "Lead Generation", "Brand Awareness"],
      price: "$2,500/mo+",
      testimonial: {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        quote: "Their PPC campaigns increased our qualified leads by 300% in just 3 months!"
      }
    },
    {
      icon: "search",
      title: "SEO & Content Marketing",
      description:
        "Increase organic visibility and attract your ideal customers with data-driven SEO strategies and compelling content that ranks.",
      features: ["Technical SEO", "Content Strategy", "Link Building"],
      color: "from-indigo-500 to-indigo-600",
      stats: ["400%+ Traffic Growth", "Keyword Ranking", "Domain Authority"],
      price: "$1,800/mo+",
      testimonial: {
        name: "Michael Chen",
        company: "GrowthCo",
        quote: "Our organic traffic grew 400% year-over-year thanks to their SEO expertise."
      }
    },
    {
      icon: "share",
      title: "Social Media Management",
      description:
        "Build engaged communities and strengthen your brand presence across all major social platforms with consistent, strategic content.",
      features: ["Content Creation", "Community Management", "Brand Strategy"],
      color: "from-purple-500 to-purple-600",
      stats: ["250% Community Growth", "Engagement Rate", "Brand Recognition"],
      price: "$1,500/mo+",
      testimonial: {
        name: "Emma Rodriguez",
        company: "StyleHub",
        quote: "Our community grew 250% and engagement rates doubled with their social strategy."
      }
    },
    {
      icon: "bar-chart",
      title: "Analytics & Strategy",
      description:
        "Make informed decisions with comprehensive analytics, performance tracking, and strategic planning tailored to your business goals.",
      features: ["Performance Tracking", "Custom Reporting", "Strategic Planning"],
      color: "from-cyan-500 to-cyan-600",
      stats: ["Data-Driven Insights", "Growth Strategy", "Performance Optimization"],
      price: "$1,200/mo+",
      testimonial: {
        name: "David Park",
        company: "FinTech Solutions",
        quote: "Their analytics helped us identify growth opportunities we were missing for years."
      }
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to grow your online presence and drive measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded flex items-center justify-center`}>
                  {/* Simple div with text instead of emoji */}
                  <div className="text-white text-2xl font-bold">
                    {service.icon === "megaphone" && "AD"}
                    {service.icon === "search" && "SEO"}
                    {service.icon === "share" && "SM"}
                    {service.icon === "bar-chart" && "AN"}
                  </div>
                </div>
                
                <div className="flex-1 mt-4 sm:mt-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#074edb] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.stats.map((stat, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-[#074edb] border border-blue-100 whitespace-nowrap"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 rounded bg-[#074edb]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-5">
                    <div className="bg-blue-50 rounded p-4 border border-blue-100">
                      <p className="text-sm italic text-gray-700 mb-2">"{service.testimonial.quote}"</p>
                      <p className="text-xs font-semibold text-[#074edb]">— {service.testimonial.name}, {service.testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <div className="flex-1">
                      <div className="text-center py-3 text-lg font-bold text-[#074edb]">
                        {service.price}
                      </div>
                    </div>
                    {/* @ts-ignore */}
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2 border-gray-200 hover:border-[#074edb] hover:text-[#074edb] transition-colors py-5 sm:py-6"
                    >
                      Learn More
                    </Button>
                    {/* @ts-ignore */}
                    <Button 
                      className="flex-1 bg-[#074edb] hover:bg-[#063db3] text-white py-5 sm:py-6"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Started
                    </Button>
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
