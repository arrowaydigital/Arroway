import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";

export function HomeServicesPreview() {
  const services = [
    {
      icon: "AD",
      title: "Paid Advertising",
      description: "High-impact PPC and social media campaigns that generate qualified leads and deliver 300%+ ROI through data-driven optimization.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "SEO",
      title: "SEO & Content",
      description: "Advanced SEO strategies combined with conversion-focused content that drives organic traffic growth of 400%+ year over year.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: "SM",
      title: "Social Media",
      description: "Strategic social media management that builds authentic communities, increases brand awareness by 250%, and drives consistent engagement.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "AN",
      title: "Analytics & Strategy",
      description: "Advanced analytics, performance tracking, and growth strategy development that turns data into actionable insights for 200%+ business growth.",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Do Best
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing services designed to help small businesses and startups grow.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeInSection key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:border-[#074edb] hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <div className="text-xl">{service.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.4}>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-[#074edb] hover:bg-[#063db3] text-white px-8 py-6 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
