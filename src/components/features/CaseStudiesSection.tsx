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
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "SaaS Platform Scaling",
      client: "CloudTask Pro",
      industry: "Productivity Software",
      challenge: "Stagnant user acquisition and retention",
      solution: "Content marketing + Social media + Email automation",
      results: [
        { metric: "User Base", value: "15x growth" },
        { metric: "Monthly Recurring Revenue", value: "420% increase" },
        { metric: "Customer Lifetime Value", value: "180% improvement" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
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
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Results, Real Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours achieve remarkable growth through data-driven marketing strategies.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <FadeInSection key={study.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col"
              >
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${study.color} rounded p-3 shadow-lg`}>
                    <div className="h-6 w-6 text-white">📈</div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-[#074edb] px-3 py-1 rounded text-sm font-medium mb-2">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      For {study.client}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                          <span className="text-sm text-gray-600">{result.metric}</span>
                          <span className="text-sm font-semibold text-[#074edb]">{result.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 pt-0">
                  <Button className="w-full bg-white border-2 border-gray-300 text-gray-700 hover:border-[#074edb] hover:text-[#074edb]">
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
              <Button className="bg-[#074edb] hover:bg-[#063db3] text-white px-8 py-6 text-lg">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}