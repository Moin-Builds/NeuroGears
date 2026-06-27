import { HeroSection } from "@/components/sections/hero/HeroSection";
import { StatisticsSection } from "@/components/sections/statistics/StatisticsSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
    </div>
  );
}
