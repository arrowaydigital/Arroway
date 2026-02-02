import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/features/HeroSection";
import { HomeServicesPreview } from "@/components/features/HomeServicesPreview";
import { HomeMetrics } from "@/components/features/HomeMetrics";
import { HomeTestimonial } from "@/components/features/HomeTestimonial";
import { HomeCTA } from "@/components/features/HomeCTA";
import { PageTransition } from "@/components/animations/PageTransition";

export function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <HomeServicesPreview />
          <HomeMetrics />
          <HomeTestimonial />
          <HomeCTA />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
