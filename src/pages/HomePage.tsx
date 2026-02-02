import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/features/HeroSection";
import { HomeServicesPreview } from "@/components/features/HomeServicesPreview";
import { HomeMetrics } from "@/components/features/HomeMetrics";
import { HomeTestimonial } from "@/components/features/HomeTestimonial";
import { CaseStudiesSection } from "@/components/features/CaseStudiesSection";
import { ProcessSection } from "@/components/features/ProcessSection";

import { PageTransition } from "@/components/animations/PageTransition";

export function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <HomeServicesPreview />
          <CaseStudiesSection />
          <ProcessSection />
          <HomeMetrics />
          <HomeTestimonial />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
