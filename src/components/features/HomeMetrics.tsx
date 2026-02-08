import { TrendingUp, Users, Award, Target } from "lucide-react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { AnimatedMetricCard } from "@/components/ui/AnimatedMetricCard";

export function HomeMetrics() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "347%",
      label: "Average ROI",
      description: "Return on investment",
    },
    {
      icon: Users,
      value: "200+",
      label: "Active Clients",
      description: "Growing businesses",
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction",
      description: "Client retention rate",
    },
    {
      icon: Target,
      value: "$12M+",
      label: "Ad Spend",
      description: "Managed annually",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We measure our success by your growth. Here are the numbers that matter.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <AnimatedMetricCard
              key={metric.label}
              icon={<metric.icon className="h-6 w-6 text-white" />}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              animationDelay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
