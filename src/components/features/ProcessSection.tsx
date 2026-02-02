import { FadeInSection } from "@/components/animations/FadeInSection";
import { Target, LineChart, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Strategy",
    description: "We analyze your business goals and create a customized marketing roadmap.",
  },
  {
    icon: LineChart,
    title: "Implementation",
    description: "Execute campaigns across multiple channels with data-driven precision.",
  },
  {
    icon: Users,
    title: "Optimization",
    description: "Continuously monitor and refine campaigns based on performance metrics.",
  },
  {
    icon: Rocket,
    title: "Scale",
    description: "Expand successful strategies to maximize ROI and business growth.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results for our clients
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeInSection key={index}>
                <div className="relative text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#074edb] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 mt-6">
                    <Icon className="h-8 w-8 text-[#074edb]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                  
                  {/* Connector Line (hidden on last item on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-blue-200" />
                  )}
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
