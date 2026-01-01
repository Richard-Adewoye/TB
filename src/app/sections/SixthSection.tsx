"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CommunityCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0D0D0D] via-[#111111] to-[#0D0D0D] py-20 px-6">
      {/* Ambient background */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-amber-900/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-amber-800/10 blur-3xl" />

      <div className="relative flex justify-center">
        <div className="relative max-w-2xl rounded-3xl bg-gradient-to-br from-[#F4F1ED] via-[#F8F5F2] to-[#F4F1ED] p-8 text-center shadow-2xl transition-all duration-700 hover:shadow-[0_25px_80px_-15px_rgba(194,142,58,0.3)] md:p-12 border border-amber-200/30">
          {/* Inner glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-100/20 via-transparent to-amber-50/20" />

          {/* Corners */}
          <div className="absolute top-6 left-6 h-16 w-16 rounded-tl-2xl border-t-2 border-l-2 border-amber-400/30" />
          <div className="absolute bottom-6 right-6 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-amber-400/30" />

          {/* Accent */}
          <div className="mb-6">
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>

          <h2 className="mb-4 font-serif text-3xl tracking-tight text-[#0D0D0D] md:text-4xl">
            Join Our Community
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-base font-light leading-relaxed text-neutral-600 md:text-lg">
            Connect with like-minded individuals and access exclusive content for growth.
          </p>

          <Link
            href="/community"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#A68249] to-[#B8904F] px-8 py-3 font-semibold text-white shadow-xl shadow-amber-900/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-900/30 active:scale-[0.98]"
          >
            <span className="relative z-10">Join the Community</span>
            <ArrowRight
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
          </Link>

          <div className="mt-8">
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
    </section>
  );
}
