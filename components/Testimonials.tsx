"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const testimonialsData = [
    {
      text: "Dear Sir, we would like to extend our heartfelt thanks to your Chennai team for solving our problems. Your prompt and effective support has made a significant difference for us. Thank you!",
      author: "Arun Kumar",
      role: "Operations Manager, Madras Logistics Corp",
      badge: "Excellent Support"
    },
    {
      text: "Thank you for your support in resolving the BE issue. Your team's efforts were impressive and made a difference.",
      author: "Priya Sharma",
      role: "Customs Brokerage Lead, Indomax Shipping",
      badge: "BE Resolution"
    },
    {
      text: "We are happy to inform you that your shipping bill filing for our SEZ unit has been successfully generated with the SB number. Thank you for your excellent service!",
      author: "Rajesh Patel",
      role: "Export Director, Zenith SEZ Garments",
      badge: "SB Filing Successful"
    },
    {
      text: "I truly appreciate your team's efforts and the great job you've done. Thank you for your patience. We will connect with you tomorrow morning!",
      author: "Suresh Nair",
      role: "Managing Director, Chennai Forwarding Services",
      badge: "Highly Recommended"
    },
    {
      text: "I am extremely satisfied with using eRoyal Tech Product (eRoyal IMPEX) and very grateful that I chose the right software product for my business, product is the very innovative and latest technology, thanks to eRoyal Tech Systems.",
      author: "Karthik Sundaram",
      role: "Founder, Sundaram Global Trade",
      badge: "eRoyal IMPEX User"
    }
  ];

  // Adjust number of visible cards based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - visibleCards);

  // Clamp current index if visibleCards changed and index became out of bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, currentIndex, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Set up auto-play
  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white text-zinc-900 relative w-full flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center w-full mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mt-2 tracking-tight">
            See how our customers are winning
          </h2>
        </div>

        {/* Carousel Viewport Container */}
        <div className="w-full relative overflow-hidden px-1 py-4">
          <motion.div
            className="flex items-stretch"
            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
          >
            {testimonialsData.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 px-3 flex flex-col"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="h-full rounded-3xl border border-zinc-150/80 bg-zinc-50/50 p-8 md:p-10 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-zinc-200 transition-all duration-300 min-h-[300px] relative group bg-white">
                  <div className="space-y-4">
                    {/* Large Quote Indicator */}
                    <span className="text-5xl font-serif block select-none h-4 -mt-2 leading-none text-blue-600/30">
                      &ldquo;
                    </span>
                    <p className="text-base md:text-lg font-medium leading-relaxed italic text-zinc-800 pr-2">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-zinc-200/50 pt-5 mt-8 gap-4">
                    <div>
                      <div className="text-sm font-bold text-zinc-950">{item.author}</div>
                      <div className="text-xs text-zinc-500 font-medium">{item.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls Row */}
        <div className="flex items-center justify-between w-full mt-6 px-4">

          {/* Previous Slide Button */}
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-colors shadow-sm cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2.5">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex
                  ? "w-7 bg-blue-600"
                  : "w-2.5 bg-zinc-200 hover:bg-zinc-300"
                  }`}
                aria-label={`Go to testimonial slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Slide Button */}
          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-colors shadow-sm cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}
