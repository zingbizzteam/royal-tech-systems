"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const checkTime = () => {
      if (videoRef.current) {
        const video = videoRef.current;
        // Check time with high precision (requestAnimationFrame runs at 60fps)
        // Reset slightly before the end (e.g. 0.2s) to avoid the flash
        if (video.duration && video.duration - video.currentTime < 0.2) {
          video.currentTime = 0.05; // skip the very first black frames if any
        }
      }
      animationFrameId = requestAnimationFrame(checkTime);
    };

    animationFrameId = requestAnimationFrame(checkTime);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-[#000214]">
        {/* Fallback image behind the video to mask seeking flashes */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src="/hero-video/vlcsnap-2026-06-11-15h43m13s265@3x.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000214] via-[#000214]/20 to-transparent pointer-events-none"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="w-full md:w-1/2 lg:w-5/12">
              <h1 className="text-5xl font-bold text-white leading-snug">
                Driving Smarter Logistics Through{" "}
                <span className="innovation-glow satisfy-font font-normal text-6xl md:text-7xl px-4 -mx-4 py-2">
                  Innovation
                </span>
              </h1>
              <p className="text-white text-sm md:text-base mt-4">
                Empowering logistics businesses with smart technology solutions that
                enhance efficiency and visibility. Streamline operations, optimize
                supply chains, and drive sustainable growth.
              </p>
              <div className="flex gap-12 mt-8">
                <div className="flex flex-col">
                  <div className="text-5xl md:text-6xl text-[#EAB308] mb-1 satisfy-font font-normal tracking-wide">
                    <AnimatedCounter end={23} />
                  </div>
                  <div className="text-white/90 text-sm md:text-base font-medium uppercase tracking-wider">
                    Years
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-5xl md:text-6xl text-[#EAB308] mb-1 satisfy-font font-normal tracking-wide">
                    <AnimatedCounter end={2000} suffix="+" />
                  </div>
                  <div className="text-white/90 text-sm md:text-base font-medium uppercase tracking-wider">
                    Trusted Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
