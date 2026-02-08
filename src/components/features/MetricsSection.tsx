import { TrendingUp, Users, Award, Target } from "lucide-react";

export function MetricsSection() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "347%",
      label: "Average Return",
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
    <section id="results" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We measure success by your growth. Here's what we've achieved for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded border border-blue-100 hover:shadow-lg transition-shadow"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
