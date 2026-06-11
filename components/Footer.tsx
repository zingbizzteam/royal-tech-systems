"use client";

import React from "react";
import { RoyalLogo } from "./Header";

// Social SVG Icons
const FacebookIcon = () => (
  <svg className="w-5 h-5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3 0-5 2-5 5v2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 00.502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 002.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 002.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-zinc-50 text-zinc-600 text-sm border-t border-zinc-200 pt-16 pb-12 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Left Column: Logo & Request a Demo */}
        <div className="flex flex-col items-start gap-4">
          <RoyalLogo />
          <a 
            href="mailto:sales@royaltechsystems.co.in" 
            className="text-zinc-500 hover:text-blue-600 font-semibold text-sm transition-colors mt-2"
          >
            Request a Demo
          </a>
        </div>

        {/* Middle Column: Quick Links */}
        <div>
          <h4 className="text-zinc-800 text-base font-bold mb-4 tracking-tight">Quick Links</h4>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2.5 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About us</a></li>
              <li><a href="#platform" className="hover:text-blue-600 transition-colors">Products</a></li>
              <li><a href="mailto:sales@royaltechsystems.co.in" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="mailto:sales@royaltechsystems.co.in" className="hover:text-blue-600 transition-colors">Events</a></li>
            </ul>
            <ul className="space-y-2.5 text-zinc-500 text-sm">
              <li><a href="mailto:sales@royaltechsystems.co.in" className="hover:text-blue-600 transition-colors">Contact us</a></li>
              <li><a href="mailto:sales@royaltechsystems.co.in" className="hover:text-blue-600 transition-colors">News</a></li>
              <li><a href="mailto:sales@royaltechsystems.co.in" className="hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column: Social Updates */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-zinc-800 text-base font-bold tracking-tight">Social Updates</h4>
            <p className="text-zinc-500 text-sm mt-1.5">Check out our pages</p>
          </div>
          {/* Social Icons Row */}
          <div className="flex items-center gap-3 mt-1">
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-10 h-10 bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center rounded-lg hover:scale-105 transition-transform hover:shadow-md cursor-pointer"
            >
              <FacebookIcon />
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-10 h-10 bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center rounded-lg hover:scale-105 transition-transform hover:shadow-md cursor-pointer"
            >
              <InstagramIcon />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="w-10 h-10 bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center rounded-lg hover:scale-105 transition-transform hover:shadow-md cursor-pointer"
            >
              <TwitterIcon />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-10 h-10 bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center rounded-lg hover:scale-105 transition-transform hover:shadow-md cursor-pointer"
            >
              <LinkedInIcon />
            </a>
            <a 
              href="#" 
              aria-label="YouTube"
              className="w-10 h-10 bg-white border border-zinc-200/80 shadow-sm flex items-center justify-center rounded-lg hover:scale-105 transition-transform hover:shadow-md cursor-pointer"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Legal Section */}
      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-xs">
        <div>
          &copy; 2026 Royal Tech Systems. All rights reserved.
        </div>
        <div className="flex gap-6 font-semibold">
          <a href="#features" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
          <a href="#features" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
