"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = Array.from({ length: 21 }, (_, i) => `/client_logos/logo${i + 1}.jpg`);

export default function ClientLogos() {
  return (
    <section className="w-full pb-24 overflow-hidden flex flex-col items-center border-b border-zinc-900" style={{ backgroundColor: '#000214' }}>
      <p className="text-center text-3xl md:text-4xl satisfy-font text-zinc-300 mb-8">
        Trusted by Industry Leaders
      </p>

      <div className="relative w-full flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {/* First Set */}
          <div className="flex items-center gap-16 pr-16">
            {logos.map((src, index) => (
              <div key={`logo-set-1-${index}`} className="flex-shrink-0 w-36 h-20 bg-white relative rounded-2xl overflow-hidden transition-all duration-300">
                <Image
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  fill
                  sizes="144px"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
          {/* Second Set (Clone for infinite effect) */}
          <div className="flex items-center gap-16 pr-16">
            {logos.map((src, index) => (
              <div key={`logo-set-2-${index}`} className="flex-shrink-0 w-36 h-20 bg-white relative rounded-2xl overflow-hidden transition-all duration-300">
                <Image
                  src={src}
                  alt={`Client Logo ${index + 1}`}
                  fill
                  sizes="144px"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
