"use client";

import React, { useState, useEffect } from "react";
import { BRANCHES, Branch } from "@/data/branches";
import { calculateDistance } from "@/lib/haversine";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, Navigation, Phone, Wrench, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";

interface LocationState {
  lat: number | null;
  lng: number | null;
  error: string | null;
  loading: boolean;
}

interface EmergencyAssistanceCardProps {
  compact?: boolean;
  onLocationFound?: (lat: number, lng: number, branches: (Branch & { distance: number })[]) => void;
}

export function EmergencyAssistanceCard({ compact = false, onLocationFound }: EmergencyAssistanceCardProps) {
  const [location, setLocation] = useState<LocationState>({
    lat: null,
    lng: null,
    error: null,
    loading: false,
  });

  const [nearestBranches, setNearestBranches] = useState<(Branch & { distance: number })[]>([]);

  const detectLocation = () => {
    setLocation((prev) => ({ ...prev, loading: true, error: null }));
    
    if (!navigator.geolocation) {
      setLocation({
        lat: null,
        lng: null,
        error: "Geolocation is not supported by your browser.",
        loading: false,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude, error: null, loading: false });
        
        // Calculate distances
        const branchesWithDistance = BRANCHES.map((branch) => ({
          ...branch,
          distance: calculateDistance(latitude, longitude, branch.latitude, branch.longitude),
        })).sort((a, b) => a.distance - b.distance);

        setNearestBranches(branchesWithDistance);
        if (onLocationFound) {
          onLocationFound(latitude, longitude, branchesWithDistance);
        }
      },
      (error) => {
        let errorMsg = "Unable to retrieve your location.";
        if (error.code === error.PERMISSION_DENIED) {
          errorMsg = "Location permission denied. Please enable it in your browser settings.";
        }
        setLocation({ lat: null, lng: null, error: errorMsg, loading: false });
      }
    );
  };

  const branchesToDisplay = compact ? nearestBranches.slice(0, 1) : nearestBranches.slice(0, 3);

  return (
    <Card className="w-full bg-slate-900 border-primary/30 overflow-hidden shadow-[0_0_20px_rgba(220,38,38,0.1)]">
      <div className="bg-primary/10 border-b border-primary/20 p-4 flex items-center gap-3">
        <div className="p-2 rounded-full bg-primary/20 text-primary">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">Emergency Assistance</h3>
          <p className="text-sm text-slate-400">Find the nearest open workshop</p>
        </div>
      </div>

      <div className="p-6">
        {!location.lat && !location.error && (
          <div className="text-center py-6">
            <MapPin className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-300 mb-6">Allow location access to find the nearest NeuroGears branches.</p>
            <Button 
              onClick={detectLocation} 
              disabled={location.loading}
              className="bg-primary text-white hover:bg-primary/90"
            >
              {location.loading ? "Detecting..." : "Detect My Location"}
            </Button>
          </div>
        )}

        {location.error && (
          <div className="text-center py-6">
            <p className="text-red-400 mb-4">{location.error}</p>
            <Button onClick={detectLocation} variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              Try Again
            </Button>
          </div>
        )}

        {branchesToDisplay.length > 0 && (
          <div className="space-y-6">
            {branchesToDisplay.map((branch) => {
              // Estimate arrival time (assuming ~40km/h average urban speed)
              const estimatedMinutes = Math.round((branch.distance / 40) * 60);
              const etaText = estimatedMinutes < 60 ? `${estimatedMinutes} mins` : `${Math.floor(estimatedMinutes / 60)}h ${estimatedMinutes % 60}m`;

              return (
                <div key={branch.id} className="bg-slate-800/50 rounded-xl p-5 border border-white/5 relative overflow-hidden">
                  {branch.isOpen && (
                    <div className="absolute top-0 right-0 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-bl-lg border-b border-l border-green-500/20">
                      OPEN NOW
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-white mb-1 pr-20">{branch.name}</h4>
                  <p className="text-sm text-slate-400 mb-4">{branch.address}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Distance</p>
                      <p className="text-white font-medium">{branch.distance.toFixed(1)} km</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">ETA</p>
                      <p className="text-white font-medium">{etaText}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Mechanics</p>
                      <p className="text-white font-medium flex items-center gap-1">
                        <Wrench className="w-3 h-3 text-primary" /> {branch.mechanicsAvailable} Available
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Hours</p>
                      <p className="text-white font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {branch.workingHours}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="flex-1 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">
                      <a href={`tel:${branch.emergencyNumber}`}>
                        <Phone className="w-4 h-4 mr-2" /> Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/5">
                      <a 
                        href={`https://www.google.com/maps/dir/?api=1&origin=${location.lat},${location.lng}&destination=${branch.latitude},${branch.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="w-4 h-4 mr-2" /> Open Maps
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto border-blue-500/30 text-blue-400 hover:bg-blue-500/10 mt-2 sm:mt-0"
                      onClick={() => alert(`Mechanic requested from ${branch.name}. They will contact you shortly.`)}
                    >
                      <Wrench className="w-4 h-4 mr-2" /> Request Mechanic
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}
