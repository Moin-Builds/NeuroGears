"use client";

import { Branch } from "@/data/branches";

interface MapProps {
  userLocation: { lat: number; lng: number } | null;
  branches: (Branch & { distance?: number })[];
}

export default function EmergencyMap({ userLocation, branches }: MapProps) {
  // Build the iframe src — if we have user location, center on it. Otherwise use the first branch.
  const nearestBranch = branches[0];
  
  // Use user location for map center if available, otherwise default to first branch
  const lat = userLocation?.lat ?? nearestBranch.latitude;
  const lng = userLocation?.lng ?? nearestBranch.longitude;

  // OpenStreetMap embed URL — no API key required, no JS library, no initialization issues
  const iframeSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.05}%2C${lat - 0.05}%2C${lng + 0.05}%2C${lat + 0.05}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="w-full h-[420px] md:h-[580px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
      {/* Dark overlay gradient to blend with dark theme */}
      <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl ring-1 ring-white/10" />
      
      <iframe
        key={`${lat}-${lng}`}
        src={iframeSrc}
        width="100%"
        height="100%"
        style={{ 
          border: 0,
          filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(90%) saturate(0.7)",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NeuroGears Emergency Map"
      />

      {/* Branch pins overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-3 border border-white/10">
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Nearest Branches</p>
          <div className="flex flex-col gap-1.5">
            {branches.slice(0, 2).map((branch) => (
              <a
                key={branch.id}
                href={`https://www.google.com/maps/search/?api=1&query=${branch.latitude},${branch.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm text-white hover:text-primary transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {branch.name}
                </span>
                {branch.distance != null && (
                  <span className="text-xs text-slate-400 ml-2">{branch.distance.toFixed(1)} km</span>
                )}
              </a>
            ))}
            {userLocation && (
              <div className="flex items-center gap-2 text-sm text-green-400 mt-1 border-t border-white/5 pt-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
                Your Location Detected
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
