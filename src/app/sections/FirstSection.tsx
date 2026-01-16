"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subtext: string;
  imageSrc: string[];
  ctaText?: string;
  ctaHref?: string;
}

export default function HeroSection({
  headline,
  subtext,
  imageSrc,
  ctaText = "Get Started",
  ctaHref = "/#",
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSrc.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [imageSrc.length]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#1a1208]">
      {/* Background slideshow (NO parallax) */}
      <div className="absolute inset-0">
        {imageSrc.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
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

        {/* Color overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208]/95 via-[#241809]/70 to-[#1a1208]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,71,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(194,142,58,0.08),transparent_50%)]" />
      </div>

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20 md:px-12 lg:px-16">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-br from-white via-[#f5e6c8] to-[#d4a047] bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#e7d7b5]">
            {subtext}
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link
              href={ctaHref}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#c28e3a] via-[#d4a047] to-[#c28e3a] px-8 py-4 text-base font-medium text-[#1a1208] shadow-lg shadow-[#d4a047]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a047]/30 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#d4a047] via-[#e8b456] to-[#d4a047] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {ctaText}
              <ChevronRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
