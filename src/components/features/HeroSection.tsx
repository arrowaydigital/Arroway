import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transform Your Business with{" "}
              <span className="text-[#074edb]">AI-Powered</span> Marketing
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              We help small businesses and startups achieve 300%+ growth through AI-powered digital marketing campaigns that deliver measurable ROI and real business results.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-[#074edb] hover:bg-[#063db3] text-white px-8 py-6 text-lg h-auto">
                Get Your Free Growth Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 px-8 py-6 text-lg h-auto hover:border-[#074edb] hover:text-[#074edb]">
                Watch Demo
              </Button>
            </motion.div>
            
            {/* Right Image */}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Digital marketing analytics dashboard"
                className="w-full h-auto"
              />
              {/* Overlay card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white rounded p-6 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Campaign ROI</div>
                    <div className="text-3xl font-bold text-[#074edb]">347%</div>
                  </div>
                  <div className="w-16 h-16 rounded bg-green-100 flex items-center justify-center">
                    <div className="text-2xl">📈</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
