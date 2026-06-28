import { HeroSection } from "@/components/sections/hero/HeroSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection";
import { StatisticsSection } from "@/components/sections/statistics/StatisticsSection";
import { FAQSection } from "@/components/sections/faq/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <StatisticsSection />
      <FAQSection />
    </div>
  );
}
