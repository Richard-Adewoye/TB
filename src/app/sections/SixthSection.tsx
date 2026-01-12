"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function CommunityCTA() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.05;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5ECE0] via-[#EFE7DC] to-[#F5ECE0] py-24 px-6">
      {/* Ambient blurred blobs */}
      <div
        className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl transition-transform duration-1000"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-amber-100/30 blur-3xl transition-transform duration-1000"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />

      <div className="relative flex justify-center">
        <div className="relative max-w-2xl rounded-3xl bg-gradient-to-br from-[#FFF8F0] via-[#F5ECE0] to-[#FFF8F0] p-8 text-center shadow-2xl transition-all duration-700 hover:shadow-[0_25px_80px_-15px_rgba(194,142,58,0.3)] md:p-12 border border-amber-200/40 transform hover:-translate-y-1 hover:scale-[1.01]">
          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-100/25 via-transparent to-amber-50/25" />

          {/* Corner accents */}
          <div className="absolute top-6 left-6 h-16 w-16 rounded-tl-2xl border-t-2 border-l-2 border-amber-400/40" />
          <div className="absolute bottom-6 right-6 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-amber-400/40" />

          {/* Header accent line */}
          <div className="mb-6">
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>

          {/* Headline */}
          <h2 className="mb-4 font-serif text-3xl tracking-tight text-[#3C2F25] md:text-4xl animate-fade-up">
            Join Our Community
          </h2>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-xl text-base font-light leading-relaxed text-[#5A4D41] md:text-lg animate-fade-up delay-100">
            Connect with like-minded individuals and access exclusive content for growth.
          </p>

          {/* CTA Button */}
          <Link
            href="/community"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#C28E3A] to-[#D4A047] px-8 py-3 font-semibold text-white shadow-xl shadow-amber-400/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-amber-400/50 active:scale-[0.98]"
          >
            <span className="relative z-10">Join the Community</span>
            <ArrowRight
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
          </Link>

          {/* Bottom accent line */}
          <div className="mt-8">
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Fade overlay at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5ECE0] to-transparent" />

      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.8s ease-out forwards;
          }
          .animate-fade-up.delay-100 {
            animation-delay: 0.1s;
          }
        `}
      </style>
    </section>
  );
}
