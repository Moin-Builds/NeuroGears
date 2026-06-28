"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { EmergencyAssistanceCard } from "@/components/sections/emergency/EmergencyAssistanceCard";
import EmergencyMap from "@/components/sections/emergency/EmergencyMap";
import { BRANCHES, Branch } from "@/data/branches";

export default function EmergencyPage() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [branches, setBranches] = useState<(Branch & { distance?: number })[]>(BRANCHES);

  const handleLocationFound = (lat: number, lng: number, sortedBranches: (Branch & { distance: number })[]) => {
    setUserLocation({ lat, lng });
    setBranches(sortedBranches);
  };

  return (
    <div className="min-h-screen pt-40 lg:pt-48 pb-24 bg-background relative overflow-hidden flex flex-col">
      {/* Background styling elements matching the premium aesthetic */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge="24/7 Roadside Assistance"
          title="Emergency Help"
          subtitle="Find the nearest open workshop or request immediate mechanic assistance."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 w-full">
            <EmergencyAssistanceCard onLocationFound={handleLocationFound} />
            <div className="mt-8 text-center text-slate-400 text-sm">
              <p>For immediate life-threatening emergencies, please dial your local emergency services (911).</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 w-full h-full">
            <div className="sticky top-24">
              <EmergencyMap userLocation={userLocation} branches={branches} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
