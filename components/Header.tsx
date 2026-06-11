"use client";

import React, { useState } from "react";
import Image from "next/image";

// Royal Logo Image Component
export function RoyalLogo() {
  return (
    <div className="flex items-center">
      <Image 
        src="/logo/logo.png" 
        alt="Royal Tech Systems Logo" 
        width={190} 
        height={54} 
        className="h-12 w-auto object-contain select-none"
        priority
      />
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 border-b border-zinc-150 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Royal Logo */}
        <a href="#" className="flex items-center">
          <RoyalLogo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 text-[14px] font-medium text-zinc-600">
          <a href="#" className="text-zinc-950 font-bold border-b-2 border-blue-600 pb-1 px-1 transition-all">
            Home
          </a>
          <a href="#testimonials" className="hover:text-blue-600 pb-1 px-1 transition-colors">
            About us
          </a>
          <a href="#platform" className="hover:text-blue-600 pb-1 px-1 flex items-center gap-1 transition-colors">
            Products
            <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a href="mailto:sales@royaltechsystems.co.in" className="hover:text-blue-600 pb-1 px-1 transition-colors">
            Careers
          </a>
          <a href="mailto:sales@royaltechsystems.co.in" className="hover:text-blue-600 pb-1 px-1 transition-colors">
            Events
          </a>
          <a href="#features" className="hover:text-blue-600 pb-1 px-1 transition-colors">
            Terms & Conditions
          </a>
          <a href="#features" className="hover:text-blue-600 pb-1 px-1 transition-colors">
            Privacy Policy
          </a>
        </nav>

        {/* Contact Us Gradient Button */}
        <div className="hidden xl:flex items-center">
          <a 
            href="mailto:sales@royaltechsystems.co.in" 
            className="bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] hover:scale-[1.02] shadow-md shadow-blue-500/15 font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 border-none inline-block text-center"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="xl:hidden p-2 text-zinc-600 hover:text-zinc-950 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-6 pb-6 pt-2 border-t border-zinc-100 bg-white flex flex-col gap-3 shadow-inner">
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-blue-600 py-2 border-b border-zinc-50"
          >
            Home
          </a>
          <a 
            href="#testimonials" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-blue-600 py-2 border-b border-zinc-50"
          >
            About us
          </a>
          <a 
            href="#platform" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-blue-600 py-2 border-b border-zinc-50 flex items-center justify-between"
          >
            <span>Products</span>
            <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          <a 
            href="mailto:sales@royaltechsystems.co.in" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-blue-600 py-2 border-b border-zinc-50"
          >
            Careers
          </a>
          <a 
            href="mailto:sales@royaltechsystems.co.in" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-blue-600 py-2 border-b border-zinc-50"
          >
            Events
          </a>
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-blue-600 py-2 border-b border-zinc-50"
          >
            Terms & Conditions
          </a>
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-blue-600 py-2 border-b border-zinc-50"
          >
            Privacy Policy
          </a>
          <a 
            href="mailto:sales@royaltechsystems.co.in" 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-gradient-to-r from-[#0033a0] to-[#009bf2] text-white hover:from-[#002882] hover:to-[#008ce0] font-bold py-3 rounded-full transition-all duration-300 block mt-4 border-none shadow-md shadow-blue-500/10"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
