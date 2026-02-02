import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";
import { Target, TrendingUp, Users, BarChart3 } from "lucide-react";

export function HomeServicesPreview() {
  const services = [
    {
      icon: Target,
      title: "Paid Advertising",
      description: "High-impact PPC and social media campaigns that generate qualified leads and deliver 300%+ ROI through data-driven optimization.",
      color: "from-blue-500 to-blue-600",
      metric: "300%+ ROI",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "Retargeting"]
    },
    {
      icon: TrendingUp,
      title: "SEO & Content",
      description: "Advanced SEO strategies combined with conversion-focused content that drives organic traffic growth of 400%+ year over year.",
      color: "from-indigo-500 to-indigo-600",
      metric: "400%+ Traffic Growth",
      features: ["Technical SEO", "Content Strategy", "Keyword Research", "Link Building"]
    },
    {
      icon: Users,
      title: "Social Media",
      description: "Strategic social media management that builds authentic communities, increases brand awareness by 250%, and drives consistent engagement.",
      color: "from-purple-500 to-purple-600",
      metric: "250% Community Growth",
      features: ["Content Creation", "Community Management", "Influencer Outreach", "Social Analytics"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Strategy",
      description: "Advanced analytics, performance tracking, and growth strategy development that turns data into actionable insights for 200%+ business growth.",
      color: "from-cyan-500 to-cyan-600",
      metric: "Data-Driven Growth",
      features: ["Performance Tracking", "Custom Reporting", "A/B Testing", "Growth Strategy"]
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-[#074edb] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What We Do <span className="text-[#074edb]">Best</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing services designed to help small businesses and startups achieve remarkable growth.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeInSection key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="h-full bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#074edb] hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#074edb] transition-colors">
                  {service.title}
                </h3>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-[#074edb] rounded-full text-sm font-medium">
                    {service.metric}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#074edb] mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4">
                  <Link 
                    to="/services" 
                    className="text-[#074edb] font-semibold hover:text-[#063db3] transition-colors inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.4}>
          <div className="text-center mt-20">
            <div className="inline-block bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to transform your business?</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Let's discuss how our proven strategies can accelerate your growth journey.
              </p>
              <Link to="/contact">
                <Button className="bg-[#074edb] hover:bg-[#063db3] text-white px-8 py-4 text-lg h-auto">
                  Get Your Free Strategy Session
                </Button>
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
