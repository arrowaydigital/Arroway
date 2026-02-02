import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/features/ContactSection";
import { PageTransition } from "@/components/animations/PageTransition";

export function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
