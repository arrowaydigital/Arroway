import { TrendingUp, Users, Award, Target } from "lucide-react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";

export function HomeMetrics() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "347%",
      label: "Average ROI",
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
            <FadeInSection key={metric.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-lg text-blue-100">
                  {metric.label}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
