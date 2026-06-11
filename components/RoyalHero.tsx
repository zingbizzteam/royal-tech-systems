import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="h-full w-full">
          <Image
            src="/assets/royal_hero.png"
            alt="Hero Background"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
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
                  <div className="text-4xl md:text-5xl font-bold text-[#EAB308] mb-1">
                    <AnimatedCounter end={23} />
                  </div>
                  <div className="text-white/90 text-sm md:text-base font-medium uppercase tracking-wider">
                    Years
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold text-[#EAB308] mb-1">
                    <AnimatedCounter end={20} suffix="+" />
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
