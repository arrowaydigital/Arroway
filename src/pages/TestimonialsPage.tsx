import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsSection } from "@/components/features/TestimonialsSection";
import { PageTransition } from "@/components/animations/PageTransition";

export function TestimonialsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
