import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeInSection } from "@/components/animations/FadeInSection";

export function HomeCTA() {
  const benefits = [
    "Free marketing audit worth $500",
    "Customized growth strategy",
    "No obligation consultation",
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#074edb] to-[#063db3] rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 200+ businesses that trust Arroway to drive their digital marketing success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-[#074edb] hover:bg-gray-100 px-8 py-6 text-lg font-semibold group">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
