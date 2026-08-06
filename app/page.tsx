import { Hero } from "@/components/home/Hero";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TechStackGrid } from "@/components/home/TechStackGrid";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <ProcessTimeline />
      <TechStackGrid />
      <TestimonialsCarousel />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
