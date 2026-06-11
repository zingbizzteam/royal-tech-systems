"use client";

import React, { useState, useEffect } from "react";
import { ShieldIcon, TrackingIcon } from "./Icons";

export default function Hero() {
  const [trackingPulse, setTrackingPulse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrackingPulse((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Left Column Text */}
        <div className="lg:col-span-6 flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-sm font-semibold text-blue-400 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            The Motive AI Platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            One platform to manage your operations, compliance & safety.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
            Automate driver safety, tracking, dispatch, maintenance, and fuel card spend in real-time with our advanced AI suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="mailto:sales@royaltechsystems.co.in" 
              className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-lg shadow-blue-500/20 transition-all font-bold px-8 py-4 rounded-full duration-300 border-none text-center inline-block"
            >
              Get a demo
            </a>
            <a 
              href="#platform" 
              className="border border-zinc-700 hover:border-zinc-500 text-white hover:bg-zinc-900/50 font-bold px-8 py-4 rounded-full transition-all duration-300 text-center"
            >
              Explore Platform
            </a>
          </div>
        </div>

        {/* Right Column: Premium Active HUD Showcase */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="w-full max-w-xl aspect-[1.15] bg-[#0c0c0e] rounded-3xl p-6 border border-zinc-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none"></div>
            
            {/* Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs font-semibold text-zinc-500 bg-zinc-900/60 px-3 py-1 rounded-md border border-zinc-800">
                LIVE FLEET FEED
              </div>
            </div>

            {/* Fleet List & Map HUD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[75%]">
              {/* Simulated Fleet Drivers List */}
              <div className="flex flex-col gap-3 overflow-y-auto">
                <div className="p-3.5 bg-zinc-900/40 border border-zinc-800 rounded-2xl flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400">
                      JD
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0c0c0e]"></div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">John Davis</div>
                    <div className="text-[10px] text-zinc-500">ELD: Driving (3.2h remaining)</div>
                  </div>
                </div>
                <div className="p-3.5 bg-zinc-900/40 border border-zinc-800 rounded-2xl flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">
                      SR
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0c0c0e]"></div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Sarah Reynolds</div>
                    <div className="text-[10px] text-zinc-500">Motive Spend: Chevron $124.50</div>
                  </div>
                </div>
                <div className="p-3.5 bg-zinc-900/40 border border-zinc-800/20 rounded-2xl flex items-center gap-3 opacity-60">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-400">
                      MK
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-zinc-500 border-2 border-[#0c0c0e]"></div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-300">Marcus Kane</div>
                    <div className="text-[10px] text-zinc-500">Duty Status: Off duty</div>
                  </div>
                </div>
              </div>

              {/* Simulated High-Frequency Map View */}
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-grid-pattern pointer-events-none"></div>
                
                {/* Fake Map Route Drawing */}
                <svg className="absolute inset-0 w-full h-full p-6 text-zinc-700" fill="none" viewBox="0 0 100 100">
                  <path d="M 10 70 Q 30 30 60 80 T 90 20" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="10" cy="70" r="4" fill="#6b7280" />
                  
                  {/* Simulated pulse along the line */}
                  {trackingPulse === 0 && <circle cx="30" cy="48" r="6" fill="#3b82f6" className="animate-ping" />}
                  {trackingPulse === 0 && <circle cx="30" cy="48" r="3" fill="#3b82f6" />}
                  
                  {/* Active Pulsing Truck Position */}
                  {trackingPulse === 1 && <circle cx="48" cy="62" r="6" fill="#3b82f6" className="animate-ping" />}
                  {trackingPulse === 1 && <circle cx="48" cy="62" r="3" fill="#3b82f6" />}

                  {trackingPulse === 2 && <circle cx="68" cy="68" r="6" fill="#3b82f6" className="animate-ping" />}
                  {trackingPulse === 2 && <circle cx="68" cy="68" r="3" fill="#3b82f6" />}

                  {trackingPulse === 3 && <circle cx="85" cy="27" r="6" fill="#3b82f6" className="animate-ping" />}
                  {trackingPulse === 3 && <circle cx="85" cy="27" r="3" fill="#3b82f6" />}
                </svg>

                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold text-zinc-400">VEHICLE TRACKING</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <div className="z-10 bg-zinc-950/90 border border-zinc-800 p-2.5 rounded-xl text-left">
                  <div className="text-[10px] font-extrabold text-white">Truck #1052</div>
                  <div className="text-[9px] text-blue-400 font-medium">Speed: 64 mph (Route 80)</div>
                </div>
              </div>
            </div>

            {/* Live Alerts bar */}
            <div className="mt-4 bg-blue-950/20 border border-blue-500/20 rounded-xl p-3 flex items-center justify-between text-xs text-blue-400 font-semibold">
              <span className="flex items-center gap-2">
                <ShieldIcon /> AI Safety Alert: Tailgating detected (Truck #204)
              </span>
              <span className="text-[10px] text-zinc-500 font-normal">Just now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
