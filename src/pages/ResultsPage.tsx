import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/animations/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

export function ResultsPage() {
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
      color: "from-purple-500 to-purple-600",
      timeline: "8 months",
      investment: "$12,000/mo"
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
      color: "from-green-500 to-green-600",
      timeline: "4 months",
      investment: "$6,500/mo"
    },
    {
      id: 4,
      title: "B2B Lead Generation",
      client: "DataSync Solutions",
      industry: "Software & Technology",
      challenge: "Low-quality leads and long sales cycles",
      solution: "LinkedIn Ads + Content marketing + Marketing automation",
      results: [
        { metric: "Qualified Leads", value: "450% increase" },
        { metric: "Sales Cycle", value: "40% shorter" },
        { metric: "Deal Size", value: "130% larger" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "from-indigo-500 to-indigo-600",
      timeline: "10 months",
      investment: "$15,000/mo"
    },
    {
      id: 5,
      title: "Restaurant Chain Expansion",
      client: "Fresh Bites",
      industry: "Food & Beverage",
      challenge: "Limited brand awareness in new markets",
      solution: "Multi-channel advertising + Influencer partnerships + Local SEO",
      results: [
        { metric: "Brand Awareness", value: "300% increase" },
        { metric: "Foot Traffic", value: "250% growth" },
        { metric: "Online Orders", value: "500% increase" }
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      color: "from-orange-500 to-orange-600",
      timeline: "5 months",
      investment: "$10,000/mo"
    },
    {
      id: 6,
      title: "Health & Wellness Brand",
      client: "VitaLife",
      industry: "Health & Wellness",
      challenge: "Competing in a saturated market",
      solution: "Influencer marketing + SEO + Email campaigns",
      results: [
        { metric: "Social Following", value: "800% growth" },
        { metric: "Email List", value: "50K subscribers" },
        { metric: "Product Sales", value: "380% increase" }
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      color: "from-teal-500 to-teal-600",
      timeline: "7 months",
      investment: "$9,000/mo"
    }
  ];

  const overallStats = [
    { icon: TrendingUp, value: "300%+", label: "Average ROI" },
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: DollarSign, value: "$25M+", label: "Revenue Generated" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative pt-24 pb-16 sm:pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="bg-blue-100 text-[#074edb] px-4 py-2 rounded text-sm font-semibold inline-block mb-6">
                    <br/>
                    <br/>
                    Case Studies & Results
                  </span>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Real Results from <span className="text-[#074edb]">Real Businesses</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    See how we've helped businesses like yours achieve remarkable growth through data-driven marketing strategies.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Overall Stats */}
          <section className="py-12 bg-white border-y border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {overallStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <stat.icon className="h-8 w-8 text-[#074edb]" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className={`absolute top-4 right-4 bg-gradient-to-br ${study.color} rounded-lg px-4 py-2 shadow-lg`}>
                        <div className="text-white font-bold text-sm">{study.industry}</div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6">
                        Client: {study.client}
                      </p>
                      
                      <div className="mb-6">
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

                      <div className="mb-6 grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-600 mb-1">Timeline</div>
                          <div className="font-semibold text-[#074edb]">{study.timeline}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-600 mb-1">Investment</div>
                          <div className="font-semibold text-[#074edb]">{study.investment}</div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Key Results</h4>
                        <div className="space-y-3">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">{result.metric}</span>
                              <span className="text-sm font-bold text-[#074edb] bg-blue-50 px-3 py-1 rounded">
                                {result.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button className="w-full bg-white border-2 border-gray-200 text-gray-700 hover:border-[#074edb] hover:text-[#074edb] hover:bg-blue-50">
                          Read Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 bg-gradient-to-r from-[#074edb] to-blue-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    Ready to Achieve Similar Results?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Let's discuss how we can help your business grow with proven digital marketing strategies.
                  </p>
                  <Button 
                    className="bg-white text-[#074edb] hover:bg-gray-100 px-8 py-4 text-lg h-auto"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Your Free Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
