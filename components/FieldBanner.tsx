import React from "react";
import Image from "next/image";

export default function FieldBanner() {
  return (
    <section className="relative w-full h-[520px] flex items-center justify-center overflow-hidden">
      {/* Dynamic Photo Background */}
      <Image 
        src="/assets/erp-demo-bg.png" 
        alt="High-tech logistics control room overlooking a modern container port" 
        fill 
        className="object-cover brightness-[0.35]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-black"></div>

      {/* Contents */}
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#00a8e8]">SEE IT IN ACTION</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
          Experience eRoyal ERP with a Live Demo
        </h2>
        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Schedule a personalized, live demonstration to see how our integrated trade suite automates your shipping, customs filings, manifest reporting, and trade finance in real-time.
        </p>

        {/* CTA Button */}
        <div className="mb-4">
          <a
            href="mailto:sales@royaltechsystems.co.in"
            className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-lg shadow-blue-500/20 transition-all font-bold px-8 py-4 rounded-full duration-300 border-none text-center inline-block"
          >
            Schedule a Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
