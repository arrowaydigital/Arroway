import React from "react";

import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description: "We deep dive into your business goals, target audience, and competitive landscape to craft a winning marketing strategy.",
      icon: "",
      color: "from-blue-500 to-blue-600",
      details: [
        "Comprehensive business audit",
        "Competitor analysis",
        "Target audience research",
        "Goal setting and KPIs"
      ]
    },
    {
      id: 2,
      title: "Campaign Development",
      description: "Our team builds high-impact campaigns using cutting-edge tools and proven methodologies tailored to your unique needs.",
      icon: "",
      color: "from-purple-500 to-purple-600",
      details: [
        "Campaign strategy creation",
        "Creative development",
        "Technology setup",
        "Performance tracking implementation"
      ]
    },
    {
      id: 3,
      title: "Execution & Optimization",
      description: "We launch your campaigns and continuously optimize for maximum performance using real-time data and insights.",
      icon: "",
      color: "from-green-500 to-green-600",
      details: [
        "Campaign launch",
        "24/7 monitoring",
        "A/B testing",
        "Performance optimization"
      ]
    },
    {
      id: 4,
      title: "Results & Growth",
      description: "We deliver measurable results and help you scale successful strategies for sustained business growth.",
      icon: "",
      color: "from-orange-500 to-orange-600",
      details: [
        "Detailed performance reports",
        "Return analysis",
        "Strategy refinement",
        "Growth planning"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures consistent results and sustainable growth for your business.
            </p>
          </div>
        </FadeInSection>

        <div className="relative">
          {/* Process line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#074edb] to-[#063db3] hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <FadeInSection key={step.id} delay={index * 0.1}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-8`}>
                  {/* Step content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} lg:w-1/2 w-full`}>
                    <div className="bg-white p-6 sm:p-8 rounded border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      {step.icon && (
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br rounded mb-6">
                          <div className="text-2xl">{step.icon}</div>
                        </div>
                      )}
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Step {step.id}: {step.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#074edb] rounded flex-shrink-0"></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Step number */}
                  <div className="relative lg:w-16 lg:h-16 flex items-center justify-center my-4 lg:my-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#074edb] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      {step.id}
                    </div>
                  </div>
                  
                  {/* Empty div for spacing on mobile */}
                  <div className="lg:w-1/2 hidden lg:block"></div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        <FadeInSection delay={0.4}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-[#074edb] to-[#063db3] rounded p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses achieving remarkable growth with our proven marketing process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#074edb] px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white/10 transition-colors">
                  Learn More About Our Process
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
