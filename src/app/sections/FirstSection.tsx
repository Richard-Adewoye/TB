"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subtext: string;
  imageSrc: string[];
}

export default function HeroSection({
  headline,
  subtext,
  imageSrc,
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = imageSrc;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1a1208]">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Warm dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208]/90 via-[#241809]/5 to-[#1a1208]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,71,0.12),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20 md:px-12 lg:px-16">
        <div className="max-w-3xl text-white">
          {/* Headline */}
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-br from-white via-[#f5e6c8] to-[#d4a047] bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-lg text-[#e7d7b5]">{subtext}</p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link
              href="/#"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#c28e3a] via-[#d4a047] to-[#c28e3a] px-8 py-4 text-base font-medium text-[#1a1208] transition hover:brightness-110"
            >
              Take the Marriage Assessment
              <ChevronRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
