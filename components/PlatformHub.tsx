"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


export default function PlatformHub() {
  const platformTabs = [
    {
      id: "importExport",
      name: "Import & Export",
      icon: <Image src="/svg-for-platformhub/import-export-svgrepo-com.svg" alt="Import & Export" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />,
      bgColor: "bg-blue-950/80 text-blue-400",
      borderColor: "border-blue-900"
    },
    {
      id: "customs",
      name: "Customs Filings",
      icon: <Image src="/svg-for-platformhub/customs-check-examine-security-svgrepo-com.svg" alt="Customs Filings" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />,
      bgColor: "bg-indigo-950/80 text-indigo-400",
      borderColor: "border-indigo-900"
    },
    {
      id: "freight",
      name: "Freight Docs",
      icon: <Image src="/svg-for-platformhub/docs-svgrepo-com.svg" alt="Freight Docs" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />,
      bgColor: "bg-sky-950/80 text-sky-400",
      borderColor: "border-sky-900"
    },
    {
      id: "nvocc",
      name: "NVOCC Operations",
      icon: <Image src="/svg-for-platformhub/teleop-svgrepo-com.svg" alt="NVOCC Operations" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />,
      bgColor: "bg-cyan-950/80 text-cyan-400",
      borderColor: "border-cyan-900"
    },
    {
      id: "scmtr",
      name: "SCMTR Filing",
      icon: <Image src="/svg-for-platformhub/cabinet-filing-svgrepo-com.svg" alt="SCMTR Filing" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />,
      bgColor: "bg-teal-950/80 text-teal-400",
      borderColor: "border-teal-900"
    },
    {
      id: "manifest",
      name: "Console Manifest",
      icon: <Image src="/svg-for-platformhub/console-svgrepo-com.svg" alt="Console Manifest" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />,
      bgColor: "bg-emerald-950/80 text-emerald-400",
      borderColor: "border-emerald-900"
    },
    {
      id: "finance",
      name: "Trade Finance",
      icon: <Image src="/svg-for-platformhub/finance-markting-money-coin-dollar-molecule-svgrepo-com.svg" alt="Trade Finance" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />,
      bgColor: "bg-purple-950/80 text-purple-400",
      borderColor: "border-purple-900"
    },
    {
      id: "autoDocs",
      name: "Automate Docs",
      icon: <Image src="/svg-for-platformhub/automate-svgrepo-com.svg" alt="Automate Docs" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />,
      bgColor: "bg-rose-950/80 text-rose-400",
      borderColor: "border-rose-900"
    },
    {
      id: "dutyFree",
      name: "Duty-Free Ops",
      icon: <Image src="/svg-for-platformhub/dev-ops-svgrepo-com.svg" alt="Duty-Free Ops" width={48} height={48} className="w-12 h-12 object-contain dark:invert" />,
      bgColor: "bg-violet-950/80 text-violet-400",
      borderColor: "border-violet-900"
    }
  ];

  const handlePillarClick = (tabId: string) => {
    let targetId = "";
    switch (tabId) {
      case "importExport":
        targetId = "feature-import-export";
        break;
      case "customs":
        targetId = "feature-customs-filings";
        break;
      case "freight":
        targetId = "feature-freight-docs";
        break;
      case "nvocc":
        targetId = "feature-nvocc-ops";
        break;
      case "scmtr":
        targetId = "feature-scmtr-filing";
        break;
      case "manifest":
        targetId = "feature-console-manifest";
        break;
      case "finance":
        targetId = "feature-trade-accounting";
        break;
      case "autoDocs":
        targetId = "feature-auto-docs";
        break;
      case "dutyFree":
        targetId = "feature-duty-free";
        break;
      default:
        targetId = "";
    }
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Offset by the height of sticky header (80px)
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className="w-full bg-white text-zinc-900 rounded-[3.5rem] relative z-20 shadow-2xl -mt-10 overflow-hidden flex flex-col items-center">
      {/* ==========================================
          THE DETAILED ALTERNATING SHOWCASE CARDS (9 FEATURES)
          ========================================== */}
      <section id="features" className="py-24 bg-white text-zinc-900 relative w-full flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 space-y-20 w-full">

          {/* Centered Title block */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#005293] uppercase">
              INTEGRATED GLOBAL TRADE PLATFORM
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 text-zinc-900 tracking-tight leading-tight">
              A fully integrated ERP suite for modern logistics operations.
            </h2>
          </div>

          {/* ==========================================
              PREMIUM DARK-THEMED ARCHITECTURE MENU
              ========================================== */}
          <div className="w-full max-w-6xl mx-auto bg-[#0c0c0e] border border-zinc-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none"></div>

            {/* Central Platform Flow Connector UI (eR Logo & SVG Branching Lines) */}
            <div className="hidden lg:flex flex-col items-center justify-center relative w-full max-w-5xl mx-auto">
              {/* Helper Text */}
              <div className="absolute right-0 top-3 -translate-y-1/2 hidden md:block">
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-[0.2em] text-right">
                  -Click the icons to explore products
                </p>
              </div>

              {/* Central Logo */}
              <div className="w-14 h-14 rounded-2xl bg-[#0c0c0e] border border-white/20 flex items-center justify-center relative z-20">
                <Image src="/logo/logo_earth.png" alt="eRoyal Earth" width={60} height={60} className="object-contain opacity-90 z-10 relative" />
                <div className="absolute inset-0 rounded-2xl border border-blue-500/50 animate-ping opacity-30"></div>
              </div>

              {/* SVG Curved Connectors */}
              <div className="w-full h-12 relative -mt-1">
                <svg
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 100"
                >
                  <defs>
                    <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#60a5fa" /> {/* Light blue */}
                      <stop offset="100%" stopColor="#1e3a8a" /> {/* Dark blue */}
                    </linearGradient>
                  </defs>
                  <path
                    d="
                      M 500,0 L 500,10 Q 500,40 470,40
                      M 500,0 L 500,10 Q 500,40 530,40
                      M 500,10 L 500,100
                      
                      M 470,40 L 85.5,40
                      M 530,40 L 914.4,40
                      
                      M 85.5,40 Q 55.5,40 55.5,70 L 55.5,100
                      M 196.7,40 Q 166.7,40 166.7,70 L 166.7,100
                      M 307.8,40 Q 277.8,40 277.8,70 L 277.8,100
                      M 418.9,40 Q 388.9,40 388.9,70 L 388.9,100
                      
                      M 581.1,40 Q 611.1,40 611.1,70 L 611.1,100
                      M 692.2,40 Q 722.2,40 722.2,70 L 722.2,100
                      M 803.3,40 Q 833.3,40 833.3,70 L 833.3,100
                      M 914.4,40 Q 944.4,40 944.4,70 L 944.4,100
                    "
                    fill="none"
                    stroke="url(#blue-grad)"
                    className="stroke-[1.5px]"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>

            {/* 9 Cards Selector Grid */}
            <div className="flex overflow-x-auto lg:grid lg:grid-cols-9 gap-3 pb-2 lg:pb-0 scrollbar-none [scrollbar-width:none] &::-webkit-scrollbar:hidden select-none">
              {platformTabs.map((tab) => {
                return (
                  <button
                    key={tab.id}
                    onClick={() => handlePillarClick(tab.id)}
                    className="relative rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/90 hover:border-zinc-650 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer min-w-[140px] lg:min-w-0 flex-shrink-0 group overflow-hidden h-20 lg:h-24"
                  >
                    <div className="flex flex-col h-[200%] w-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-1/2">

                      {/* Top: Icon */}
                      <div className="h-1/2 w-full flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-lg flex items-center text-2xl justify-center ${tab.bgColor} border ${tab.borderColor}`}>
                          {tab.icon}
                        </div>
                      </div>

                      {/* Bottom: Text */}
                      <div className="h-1/2 w-full flex items-center justify-center px-2">
                        <span className="text-[12px] font-bold tracking-tight text-white whitespace-normal text-center leading-tight">
                          {tab.name}
                        </span>
                      </div>

                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* FEATURE 1: End-to-End Import & Export Management */}
          <motion.div
            id="feature-import-export"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Visual Column */}
            <div className="lg:col-span-6 w-full flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-xl aspect-[1.4] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative group">
                <Image
                  src="/assets/import-export.png"
                  alt="End-to-End Import & Export Management"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Right Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                End-to-End Import & Export Management
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Streamline international shipping from initial booking to final port delivery. Manage slot allocation, customs clearing cycles, and freight movements inside a single integrated control center.
              </p>
              <div className="mt-2">
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/10 font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 group transition-all duration-300 border-none"
                >
                  Know More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 2: Effortless BE & SB Filing for SEZ Units */}
          <motion.div
            id="feature-customs-filings"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Effortless BE & SB Filing for SEZ Units
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Automate Bill of Entry (BE) and Shipping Bill (SB) documentation for Special Economic Zones. Seamlessly connect with customs ICEGATE portals to prevent manual data transcription errors and process approvals faster.
              </p>
              <div className="mt-2">
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/10 font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 group transition-all duration-300 border-none"
                >
                  Know More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Right Visual Column */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="w-full max-w-xl aspect-[1.4] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative group">
                <Image
                  src="/assets/customs-filing.png"
                  alt="Effortless BE & SB Filing for SEZ Units"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* FEATURE 3: Smart & Automated Freight Documentation */}
          <motion.div
            id="feature-freight-docs"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Visual Column */}
            <div className="lg:col-span-6 w-full flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-xl aspect-[1.4] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative group">
                <Image
                  src="/assets/freight-docs.png"
                  alt="Smart & Automated Freight Documentation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Right Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Smart & Automated Freight Documentation
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Generate commercial invoices, packing lists, and cargo declarations using dynamic templates. Eliminate manual typing errors and accelerate cargo handovers at international hubs.
              </p>
              <div className="mt-2">
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/10 font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 group transition-all duration-300 border-none"
                >
                  Know More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 4: Transform NVOCC Operations with Next-Gen ERP */}
          <motion.div
            id="feature-nvocc-ops"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Transform NVOCC Operations with Next-Gen ERP
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Maintain full control over slot management, inventory allocation, and billing agreements. Centralize your non-vessel operating common carrier operations inside a powerful ERP dashboard.
              </p>
              <div className="mt-2">
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/10 font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 group transition-all duration-300 border-none"
                >
                  Know More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Right Visual Column */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="w-full max-w-xl aspect-[1.4] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative group">
                <Image
                  src="/assets/nvocc-ops.png"
                  alt="Transform NVOCC Operations with Next-Gen ERP"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* FEATURE 5: Seamless SCMTR Filing & Smart Integration */}
          <motion.div
            id="feature-scmtr-filing"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Visual Column */}
            <div className="lg:col-span-6 w-full flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-xl aspect-[1.4] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative group">
                <Image
                  src="/assets/scmtr-filing.png"
                  alt="Seamless SCMTR Filing & Smart Integration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Right Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Seamless SCMTR Filing & Smart Integration
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Generate and file Sea Cargo Manifest and Transhipment Regulations (SCMTR) entries. Match regulatory timelines with automated validation checks and direct XML integrations.
              </p>
              <div className="mt-2">
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/10 font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 group transition-all duration-300 border-none"
                >
                  Know More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 6: Effortless Console Manifest Filing */}
          <motion.div
            id="feature-console-manifest"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Effortless Console Manifest Filing
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Consolidate multiple cargo loads and automate filing logs for freight forwarders. Access Master BLs and House BL configurations directly inside our manifest workspace.
              </p>
              <div className="mt-2">
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/10 font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 group transition-all duration-300 border-none"
                >
                  Know More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Right Visual Column */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="w-full max-w-xl aspect-[1.4] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative group">
                <Image
                  src="/assets/console-manifest.png"
                  alt="Effortless Console Manifest Filing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* FEATURE 7: Smart Accounting for Global Trade */}
          <motion.div
            id="feature-trade-accounting"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Visual Column */}
            <div className="lg:col-span-6 w-full flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-xl aspect-[1.4] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative group">
                <Image
                  src="/assets/trade-accounting.png"
                  alt="Smart Accounting for Global Trade"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Right Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Smart Accounting for Global Trade
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Consolidate ledger accounting with multi-currency invoicing, custom duty collections, and tax reconciliations tailored specifically for international logistics and customs agencies.
              </p>
              <div className="mt-2">
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/10 font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 group transition-all duration-300 border-none"
                >
                  Know More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 8: Automate Documentation for Faster Global Trade */}
          <motion.div
            id="feature-auto-docs"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Automate Documentation for Faster Global Trade
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Minimize operational delays with smart templates. Populate HS codes, port addresses, container configurations, and tax categories automatically.
              </p>
              <div className="mt-2">
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/10 font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 group transition-all duration-300 border-none"
                >
                  Know More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Right Visual Column */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="w-full max-w-xl aspect-[1.4] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative group">
                <Image
                  src="/assets/auto-docs.png"
                  alt="Automate Documentation for Faster Global Trade"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* FEATURE 9: Smarter Duty-Free Ops with eRoyal ERP */}
          <motion.div
            id="feature-duty-free"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center scroll-mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Left Visual Column */}
            <div className="lg:col-span-6 w-full flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-xl aspect-[1.4] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative group">
                <Image
                  src="/assets/duty-free.png"
                  alt="Smarter Duty-Free Ops with eRoyal ERP"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Right Text Column */}
            <div className="lg:col-span-6 flex flex-col gap-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Smarter Duty-Free Ops with eRoyal ERP
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Track duty-free licenses, Advance Authorizations, and Export Promotion Capital Goods (EPCG) licenses automatically. Prevent compliance leaks and maximize export benefit savings.
              </p>
              <div className="mt-2">
                <a
                  href="mailto:sales@royaltechsystems.co.in"
                  className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/10 font-semibold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2 group transition-all duration-300 border-none"
                >
                  Know More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
