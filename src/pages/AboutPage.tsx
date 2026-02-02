import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/animations/PageTransition";

export function AboutPage() {
  const teamMembers = [
    {
      name: "Mohammed Mufeez",
      role: "Founder",
      image: "/images/mufeez.png",
      bio: "10+ years in digital marketing with expertise in AI-driven campaigns and startup growth strategies."
    },
    {
      name: "Abdul Raafih",
      role: "Co-Founder",
      image: "/images/abdul_raafih.png",
      bio: "Former Google Ads specialist with a track record of 300%+ ROI improvements for clients."
    },
    {
      name: "Mohamed Ukaasha",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning creative with 8+ years of experience in brand storytelling and content creation."
    }
  ];

  const values = [
    {
      title: "Results-First Approach",
      description: "We measure success by real business outcomes, not vanity metrics. Every strategy is designed to drive measurable growth."
    },
    {
      title: "Innovation Driven",
      description: "We stay ahead of industry trends and leverage cutting-edge AI tools to give our clients competitive advantages."
    },
    {
      title: "Client Partnership",
      description: "We're not just vendors—we become true partners invested in your long-term success and growth."
    }
  ];

  const achievements = [
    { number: "300%+", label: "Average ROI for clients" },
    { number: "500+", label: "Campaigns managed" },
    { number: "50+", label: "Happy clients" },
    { number: "8", label: "Years of experience" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative pt-24 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <br/>
                  <br/>
                  <span className="bg-blue-100 text-[#074edb] px-4 py-2 rounded text-sm font-semibold inline-block mb-6">
                    About Arroway
                  </span>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    We Help Businesses <span className="text-[#074edb]">Grow Through</span> Data-Driven Marketing
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Since 2018, we've been partnering with ambitious businesses to unlock their growth potential through innovative digital marketing strategies that deliver real results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="bg-[#074edb] hover:bg-[#063db3] text-white px-8 py-4 text-lg h-auto"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Work With Us
                      <span className="ml-2">→</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-2 border-gray-300 px-8 py-4 text-lg h-auto hover:border-[#074edb] hover:text-[#074edb]"
                      onClick={() => window.location.href = '/services'}
                    >
                      Our Services
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      Our Story
                    </h2>
                    <div className="space-y-4 text-gray-600">
                      <p>
                        Arroway was born from a simple observation: most marketing agencies focus on tactics rather than results. 
                        We saw businesses spending thousands on campaigns that looked good but didn't move the needle.
                      </p>
                      <p>
                        In 2018, our founder Alex Johnson set out to change this. With a background in data science and digital marketing, 
                        he assembled a team of specialists who shared his vision: marketing that's measurable, accountable, and results-driven.
                      </p>
                      <p>
                        Today, we've helped over 50 businesses achieve 300%+ growth through our AI-powered approach to digital marketing.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                      <div className="text-5xl font-bold mb-2">2018</div>
                      <div className="text-xl font-semibold mb-4">Founded with a mission</div>
                      <p className="text-blue-100">
                        To revolutionize digital marketing by focusing on measurable results rather than vanity metrics.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  These principles guide everything we do and every relationship we build.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <div className="text-2xl font-bold text-[#074edb]">
                        {index === 0 ? "01" : index === 1 ? "02" : "03"}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Meet Our Team
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The passionate experts behind your marketing success.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-64 bg-gray-200 overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                                <div class="text-white text-4xl font-bold">
                                  ${member.name.charAt(0)}
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-[#074edb] font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-16 sm:py-20 bg-gradient-to-r from-[#074edb] to-blue-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  By The Numbers
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  The results we've delivered for our clients speak for themselves.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl sm:text-5xl font-bold mb-2">{achievement.number}</div>
                    <div className="text-lg sm:text-xl text-blue-100">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    Ready to Grow Your Business?
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Join hundreds of businesses that have achieved remarkable growth with our data-driven marketing strategies.
                  </p>
                  <Button 
                    className="bg-[#074edb] hover:bg-[#063db3] text-white px-8 py-4 text-lg h-auto"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Started Today
                    <span className="ml-2">→</span>
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
