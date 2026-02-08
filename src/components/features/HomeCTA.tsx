import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { motion } from "framer-motion";

export function HomeCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have achieved remarkable growth with our data-driven marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 text-base h-auto shadow-lg hover:shadow-xl transition-all"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Your Free Growth Strategy
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 px-6 py-3 text-base h-auto hover:border-[#074edb] hover:text-[#074edb] shadow-sm hover:shadow-md transition-all"
                  onClick={() => window.location.href = '/about'}
                >
                  Learn More About Us
                </Button>
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
