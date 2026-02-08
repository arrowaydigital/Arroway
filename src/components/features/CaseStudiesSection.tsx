import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Startup Growth",
      client: "TechWear Co.",
      industry: "Fashion E-commerce",
      challenge: "Low conversion rates and poor brand visibility",
      solution: "Comprehensive SEO + Paid Advertising strategy",
      results: [
        { metric: "Conversion Rate", value: "340% increase" },
        { metric: "Organic Traffic", value: "520% growth" },
        { metric: "Revenue", value: "$2.3M in first year" }
      ],
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&h=400&fit=crop",
      color: "from-blue-500 to-blue-600",
      timeline: "6 months",
      investment: "$8,000/mo"
    },
    {
      id: 2,
      title: "Local Service Business",
      client: "Prime Home Services",
      industry: "Home Services",
      challenge: "Dependence on expensive local advertising",
      solution: "Local SEO + Google Ads + Reputation management",
      results: [
        { metric: "Lead Quality", value: "280% improvement" },
        { metric: "Cost Per Lead", value: "65% reduction" },
        { metric: "Monthly Revenue", value: "$85K growth" }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      color: "from-green-500 to-green-600",
      timeline: "4 months",
      investment: "$6,500/mo"
    },
    {
      id: 3,
      title: "SaaS Company Expansion",
      client: "CloudTech Solutions",
      industry: "Software as a Service",
      challenge: "Intense competition and low market awareness",
      solution: "Content Marketing + LinkedIn Ads + Conversion Optimization",
      results: [
        { metric: "Trial Signups", value: "420% increase" },
        { metric: "Customer Acquisition", value: "180% growth" },
        { metric: "ARR", value: "$1.7M in 8 months" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-purple-500 to-purple-600",
      timeline: "8 months",
      investment: "$12,000/mo"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours achieve remarkable growth through data-driven marketing strategies.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <FadeInSection key={study.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03, y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col group"
              >
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${study.color} rounded-xl p-4 shadow-lg`}>
                    <div className="text-white text-xs font-bold">CASE STUDY</div>
                  </div>
                </div>
                
                <div className="p-7 flex-grow">
                  <div className="mb-5">
                    <span className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-[#074edb] px-4 py-2 rounded-full text-sm font-medium mb-3 border border-blue-100">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-2 group-hover:text-[#074edb] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      For {study.client}
                    </p>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#074edb] rounded-full"></span>
                      The Challenge
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-5">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Our Solution
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Timeline</div>
                      <div className="font-semibold text-gray-900">{study.timeline}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500">Investment</div>
                      <div className="font-semibold text-gray-900">{study.investment}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Results
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">{result.metric}</span>
                            <span className="text-sm font-semibold text-emerald-600">{result.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-7 pt-0">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg transition-all py-3">
                    Read Full Case Study
                  </Button>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.3}>
          <div className="text-center">
            <Link to="/results">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 text-base shadow-lg hover:shadow-xl transition-all">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

