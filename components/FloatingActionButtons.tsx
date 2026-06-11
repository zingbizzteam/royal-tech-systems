"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingActionButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 50% of the viewport or 50% of document height
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      if (pageHeight > 0 && scrollPosition > pageHeight * 0.5) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center justify-end w-14 h-14">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToTop}
            className="absolute bottom-0 p-3 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:scale-110 hover:shadow-blue-500/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
      
      <motion.a
        animate={{ y: showBackToTop ? -68 : 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        href="https://wa.me/918015999489"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 p-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20b858] hover:shadow-[#25D366]/50 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.004 2c-5.46 0-9.888 4.428-9.888 9.888 0 1.745.454 3.447 1.317 4.954L2 22l5.318-1.396c1.46.793 3.102 1.213 4.786 1.213 5.46 0 9.888-4.428 9.888-9.888 0-5.46-4.428-9.888-9.888-9.888zm0 18.067c-1.5 0-2.969-.404-4.258-1.168l-.305-.181-3.16.83.844-3.08-.198-.315a8.212 8.212 0 0 1-1.267-4.401c0-4.542 3.696-8.238 8.238-8.238 4.542 0 8.238 3.696 8.238 8.238 0 4.542-3.696 8.238-8.238 8.238zm4.519-6.177c-.247-.124-1.465-.724-1.692-.808-.227-.084-.393-.124-.558.124-.165.248-.64 .808-.784.973-.145.165-.29 .186-.537.062-.247-.124-1.045-.385-1.99-1.23-.735-.657-1.23-1.47-1.375-1.718-.145-.248-.016-.381.108-.505.111-.11.247-.288.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.062-.124-.558-1.347-.765-1.841-.202-.482-.407-.417-.558-.425-.145-.008-.31-.008-.475-.008-.165 0-.433.062-.66.31-.227.248-.867.847-.867 2.065 0 1.218.888 2.395 1.011 2.56.124.165 1.745 2.66 4.226 3.731.591.255 1.051.407 1.411.52.593.187 1.133.161 1.558.098.472-.07 1.465-.599 1.672-1.176.206-.578.206-1.074.145-1.176-.062-.103-.227-.165-.475-.29z" />
        </svg>
      </motion.a>
    </div>
  );
}
