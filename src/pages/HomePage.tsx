import React from "react";
import { HeroSection } from "@/components/features/HeroSection";
import { HomeServicesPreview } from "@/components/features/HomeServicesPreview";
import { HomeMetrics } from "@/components/features/HomeMetrics";
import { HomeTestimonial } from "@/components/features/HomeTestimonial";
import { CaseStudiesSection } from "@/components/features/CaseStudiesSection";
import { ProcessSection } from "@/components/features/ProcessSection";
import { HomeCTA } from "@/components/features/HomeCTA";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeServicesPreview />
      <HomeMetrics />
      <CaseStudiesSection />
      <ProcessSection />
      <HomeCTA />
      <HomeTestimonial />
    </>
  );
}
