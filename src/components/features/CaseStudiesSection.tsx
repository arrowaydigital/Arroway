import { FadeInSection } from "@/components/animations/FadeInSection";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    client: "TechStart Solutions",
    industry: "SaaS",
    challenge: "Low brand awareness and minimal organic traffic",
    results: [
      { metric: "320%", label: "Increase in organic traffic" },
      { metric: "2.4x", label: "Conversion rate improvement" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
  },
  {
    client: "EcoHome Designs",
    industry: "E-commerce",
    challenge: "High customer acquisition costs and low ROAS",
    results: [
      { metric: "185%", label: "ROAS improvement" },
      { metric: "42%", label: "Lower cost per acquisition" },
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&auto=format",
  },
  {
    client: "FitLife Pro",
    industry: "Health & Wellness",
    challenge: "Poor social media engagement and brand visibility",
    results: [
      { metric: "450%", label: "Social media growth" },
      { metric: "5.2x", label: "Engagement rate increase" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real clients. See how we've helped businesses like yours achieve their growth goals.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <FadeInSection key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#074edb]">
                    {study.industry}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {study.client}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Challenge:</span> {study.challenge}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="h-4 w-4 text-[#074edb] mr-1" />
                          <div className="text-2xl font-bold text-[#074edb]">
                            {result.metric}
                          </div>
                        </div>
                        <div className="text-xs text-gray-600">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full inline-flex items-center justify-center text-[#074edb] font-semibold hover:underline group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* View All CTA */}
        <FadeInSection>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 bg-[#074edb] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
