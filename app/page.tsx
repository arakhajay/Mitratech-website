import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { FaqPreview } from "@/components/home/FaqPreview";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <ProcessTimeline />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
