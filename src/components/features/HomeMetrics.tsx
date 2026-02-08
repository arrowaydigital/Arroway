import { TrendingUp, Users, Award, Target } from "lucide-react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";

export function HomeMetrics() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "347%",
      label: "Average Return",
    },
    {
      icon: Users,
      value: "200+",
      label: "Active Clients",
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      icon: Target,
      value: "$12M+",
      label: "Ad Spend Managed",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#074edb] to-[#063db3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We measure success by your growth. Here's what we've achieved together.
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-colors"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-8 w-8 text-[#074edb]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-white mb-2">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
