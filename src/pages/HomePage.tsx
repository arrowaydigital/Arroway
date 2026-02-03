import React from "react";
import { HeroSection } from "@/components/features/HeroSection";
import { HomeServicesPreview } from "@/components/features/HomeServicesPreview";
import { HomeMetrics } from "@/components/features/HomeMetrics";
import { HomeTestimonial } from "@/components/features/HomeTestimonial";
import { CaseStudiesSection } from "@/components/features/CaseStudiesSection";
import { ProcessSection } from "@/components/features/ProcessSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeServicesPreview />
      <CaseStudiesSection />
      <ProcessSection />
      <HomeMetrics />
      <HomeTestimonial />
    </>
  );
}
