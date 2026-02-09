import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutPage() {


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
    { number: "300%+", label: "Average Return for clients" },
    { number: "500+", label: "Campaigns managed" },
    { number: "50+", label: "Happy clients" },
    { number: "8", label: "Years of experience" }
  ];

  const founders = [
    {
      name: "Mufeez",
      title: "Founder",
      bio: "Mufeez is the visionary founder who established Arroway with a passion for technology-driven marketing solutions. With extensive expertise in software engineering and AI technologies, he leads our technology innovation and product development. His technical leadership ensures our marketing strategies are powered by cutting-edge infrastructure.",
      expertise: ["AI/ML Engineering", "Product Development", "Technology Strategy", "Software Architecture"],
      image: "/images/mufeez.png"
    },
    {
      name: "Abdul Raafih",
      title: "Co-Founder",
      bio: "As co-founder and CEO, Abdul brings deep expertise in digital marketing and business strategy to Arroway. With years of experience in data-driven marketing strategies, he has successfully led numerous high-impact campaigns for clients across various industries, driving remarkable growth outcomes.",
      expertise: ["Digital Strategy", "Business Development", "Marketing Leadership", "Growth Hacking"],
      image: "/images/abdul_raafih.png"
    }
  ];

  return (
    <>
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
              <br />
              <br />
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

      {/* Founders Section */}
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
              Meet Our Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The visionaries behind Arroway's innovative approach to data-driven marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="md:flex h-full">
                    <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-6">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="bg-white/20 rounded-full w-40 h-40 flex items-center justify-center">
                                <span class="text-4xl font-bold text-white">
                                  ${founder.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                          {founder.title}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{founder.bio}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
    </>
  );
}
