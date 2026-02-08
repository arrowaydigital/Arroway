import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <br/>
              <br/>
              <span className="bg-blue-100 text-[#074edb] px-4 py-2 rounded text-sm font-semibold">
                #1 Marketing Partner for Startups
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transform Your Business with{" "}
              <span className="text-[#074edb]">AI-Powered</span> Marketing
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              We help small businesses and startups achieve 300%+ growth through AI-powered digital marketing campaigns that deliver measurable results and real business outcomes.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Button className="bg-[#074edb] hover:bg-[#063db3] text-white px-6 py-3 text-base h-auto">
                Get Your Free Growth Strategy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 px-6 py-3 text-base h-auto hover:border-[#074edb] hover:text-[#074edb]">
                Watch Demo
              </Button>
            </motion.div>
            
            {/* Right Image */}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Digital marketing analytics dashboard"
                className="w-full h-auto"
              />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
