import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/features/ServicesSection";
import { PageTransition } from "@/components/animations/PageTransition";

export function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
