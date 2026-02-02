import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrendingUp, Users, Award, Target } from "lucide-react";
import { PageTransition } from "@/components/animations/PageTransition";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";

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
                    Our Results
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {metrics.map((metric, index) => (
                  <FadeInSection key={metric.label} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="bg-gradient-to-br from-blue-50 to-white p-8 rounded border border-blue-100 hover:shadow-lg transition-shadow h-full"
                    >
                      <div className="w-12 h-12 bg-[#074edb] rounded flex items-center justify-center mb-4">
                        <metric.icon className="h-6 w-6 text-white" />
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
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
