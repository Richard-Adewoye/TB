'use client';

import Image from "next/image";

const heroContent = {
  mobile: {
    altText: "Tunji Babajide",
    imageSrc: "/Tunji Babajide.jpg",
  },
  desktop: {
    altText: "Tunji Babajide",
    imageSrc: "/Tunji Babajide.jpg",
  },
};

export default function PortraitSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0F0D0A] text-gray-100">
      {/* Subtle ambient depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16120D] to-[#0F0D0A] opacity-70 pointer-events-none" />

      {/* Mobile View */}
      <div className="relative flex flex-col md:hidden px-6 pt-24 pb-16 space-y-10">
        <h1 className="text-[1.8rem] leading-[1.3] font-light tracking-tight">
          I am a global expert in{" "}
          <span className="font-semibold text-[#3A2E22] drop-shadow-[0_0_14px_rgba(58,46,34,0.65)]">
            mental wellness and holistic transformation.
          </span>
          <br /><br />
          I help people achieve{" "}
          <span className="font-semibold text-[#3A2E22] drop-shadow-[0_0_14px_rgba(58,46,34,0.65)]">
            lasting, meaningful change.
          </span>
        </h1>

        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(58,46,34,0.35)_0%,_transparent_70%)]" />
          <Image
            src={heroContent.mobile.imageSrc}
            alt={heroContent.mobile.altText}
            width={900}
            height={900}
            className="relative w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="relative hidden md:grid grid-cols-12 items-center max-w-7xl mx-auto px-12 py-36 gap-16">
        {/* Text Content */}
        <div className="col-span-7">
          <h1 className="text-[2.2rem] lg:text-[2.6rem] leading-[1.2] font-light tracking-tight">
            I am a global expert in{" "}
            <span className="font-semibold text-[#3A2E22] drop-shadow-[0_0_18px_rgba(58,46,34,0.7)]">
              mental wellness and holistic transformation.
            </span>
            <br /><br />
            I help people achieve{" "}
            <span className="font-semibold text-[#3A2E22] drop-shadow-[0_0_18px_rgba(58,46,34,0.7)]">
              lasting, meaningful change.
            </span>
          </h1>
        </div>

        {/* Image Content */}
        <div className="col-span-5 flex justify-end">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(58,46,34,0.45)_0%,_transparent_65%)]" />
            <Image
              src={heroContent.desktop.imageSrc}
              alt={heroContent.desktop.altText}
              width={800}
              height={800}
              className="relative w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
