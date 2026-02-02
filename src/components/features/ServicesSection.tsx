import { Megaphone, Search, Share2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const services = [
    {
      icon: Megaphone,
      title: "Paid Advertising (PPC/Social)",
      description:
        "Drive qualified leads with strategic Google Ads, Facebook, and Instagram campaigns optimized for maximum ROI and conversion rates.",
      features: ["Google Ads Management", "Social Media Ads", "Retargeting Campaigns"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Search,
      title: "SEO & Content Marketing",
      description:
        "Increase organic visibility and attract your ideal customers with data-driven SEO strategies and compelling content that ranks.",
      features: ["Technical SEO", "Content Strategy", "Link Building"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Build engaged communities and strengthen your brand presence across all major social platforms with consistent, strategic content.",
      features: ["Content Creation", "Community Management", "Brand Strategy"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: BarChart3,
      title: "Analytics & Strategy",
      description:
        "Make informed decisions with comprehensive analytics, performance tracking, and strategic planning tailored to your business goals.",
      features: ["Performance Tracking", "Custom Reporting", "Strategic Planning"],
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to grow your online presence and drive measurable business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <div className="w-2 h-2 rounded-full bg-[#074edb]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full border-2 border-gray-200 hover:border-[#074edb] hover:text-[#074edb]">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
