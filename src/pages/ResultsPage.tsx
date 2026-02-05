import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, Target } from "lucide-react";

export function ResultsPage() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "347%",
      label: "Average ROI",
      description: "Across all campaigns",
    },
    {
      icon: Users,
      value: "200+",
      label: "Active Clients",
      description: "Small businesses & startups",
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction",
      description: "Rating from reviews",
    },
    {
      icon: Target,
      value: "$12M+",
      label: "Ad Spend Managed",
      description: "Optimized for performance",
    },
  ];

  const detailedCaseStudies = [
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
      timeline: "6 months",
      investment: "$8,000/mo",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&h=400&fit=crop",
      color: "from-blue-500 to-blue-600",
      successStory: "TechWear went from struggling to find customers to becoming the go-to brand in their niche, with their customer base growing 5x in just 6 months."
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
      timeline: "8 months",
      investment: "$12,000/mo",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-purple-500 to-purple-600",
      successStory: "CloudTask Pro transformed from a bootstrapped startup to a market leader with predictable revenue streams and a loyal customer base."
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
      timeline: "4 months",
      investment: "$6,500/mo",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      color: "from-green-500 to-green-600",
      successStory: "Prime Home Services reduced their marketing costs while increasing lead quality, resulting in higher profit margins and sustainable growth."
    },
    {
      id: 4,
      title: "Restaurant Chain Digital Presence",
      client: "Urban Bites",
      industry: "Food & Beverage",
      challenge: "Limited online presence and competition from delivery apps",
      solution: "Social media marketing + Online ordering platform + Local SEO",
      results: [
        { metric: "Online Orders", value: "240% increase" },
        { metric: "Social Following", value: "300K+ followers" },
        { metric: "Brand Awareness", value: "180% improvement" }
      ],
      timeline: "5 months",
      investment: "$7,000/mo",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=400&fit=crop",
      color: "from-red-500 to-red-600",
      successStory: "Urban Bites created a strong digital ecosystem that drove both online orders and foot traffic to their physical locations."
    }
  ];

  const testimonials = [
    {
      quote: "The results exceeded our expectations. We've seen a 340% increase in conversion rate and over $2.3M in revenue in just 6 months.",
      author: "Sarah Johnson",
      position: "CEO, TechWear Co.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Working with Arroway transformed our business from a bootstrapped startup to a market leader with predictable revenue streams.",
      author: "Michael Chen",
      position: "Founder, CloudTask Pro",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "They reduced our marketing costs while increasing lead quality, resulting in higher profit margins and sustainable growth.",
      author: "David Park",
      position: "Owner, Prime Home Services",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Page Header */}
          <section className="pt-24 sm:pt-28 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInSection>
                <div className="text-center max-w-3xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    <br/>
                    Proven Results That Matter
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600">
                    We measure success by your growth. Here's what we've achieved for our clients.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </section>

          {/* Metrics Grid */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInSection>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Our Impact
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    The measurable results we've delivered for businesses like yours.
                  </p>
                </div>
              </FadeInSection>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {metrics.map((metric, index) => (
                  <FadeInSection key={metric.label} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gradient-to-br from-blue-50 to-white p-8 rounded border border-blue-100 hover:shadow-lg transition-shadow h-full"
                    >
                      <div className="w-12 h-12 bg-[#074edb] rounded flex items-center justify-center mb-4">
                        {metric.icon && <metric.icon className="h-6 w-6 text-white" />}
                      </div>
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-lg font-semibold text-gray-700 mb-1">
                        {metric.label}
                      </div>
                      <div className="text-sm text-gray-600">{metric.description}</div>
                    </motion.div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed Case Studies */}
          <section className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInSection>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Success Stories
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Real businesses, real results, real impact.
                  </p>
                </div>
              </FadeInSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
                {detailedCaseStudies.map((study, index) => (
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
                          <div className="h-6 w-6 text-white font-bold text-center text-xs">ROI</div>
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
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {study.solution}
                          </p>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Timeline:</span>
                            <span className="font-medium text-[#074edb]">{study.timeline}</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600 mb-3">
                            <span>Investment:</span>
                            <span className="font-medium text-[#074edb]">{study.investment}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Success Story</h4>
                          <p className="text-gray-600 text-sm leading-relaxed italic">
                            "{study.successStory}"
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
                          <span className="ml-2">→</span>
                        </Button>
                      </div>
                    </motion.div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FadeInSection>
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    What Our Clients Say
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Don't just take our word for it - hear from businesses we've helped grow.
                  </p>
                </div>
              </FadeInSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <FadeInSection key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded border border-blue-100"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.author}</div>
                          <div className="text-sm text-gray-600">{testimonial.position}</div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </motion.div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </section>


        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
