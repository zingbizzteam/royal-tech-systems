import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/RoyalHero";
import ClientLogos from "@/components/ClientLogos";
import PlatformHub from "@/components/PlatformHub";
import FieldBanner from "@/components/FieldBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-sans antialiased selection:bg-blue-500 selection:text-white flex flex-col items-center">
      <FloatingActionButtons />
      {/* Navigation Header */}
      <Header />

      {/* Main Landing Content */}
      <main className="w-full flex flex-col">
        {/* Hero Section with Live GPS Fleet HUD */}
        <Hero />

        {/* Infinite Client Logos Slider */}
        <ClientLogos />

        {/* Combined Platform Hub Selector & Detailed Photographic Showcases */}
        <PlatformHub />

        {/* Photographic Field Operations Banner */}
        <FieldBanner />

        {/* Customer Success Stories & Case Studies */}
        <Testimonials />
      </main>


      {/* Corporate Sitemap Footer */}
      <Footer />
    </div>
  );
}
