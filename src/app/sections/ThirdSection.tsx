"use client";

import React from "react";
import { AlertCircle, Lightbulb, Shield } from "lucide-react";

interface FrameworkItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  accentColor: string;
}

const frameworkData: FrameworkItem[] = [
  {
    title: "Rats",
    description:
      "Unexpected challenges that test the resilience of your relationship.",
    icon: <AlertCircle size={28} className="text-white" />,
    iconBg: "bg-gradient-to-br from-red-700/40 to-red-800/30",
    accentColor: "from-red-700/20 to-red-800/10",
  },
  {
    title: "Carrots",
    description:
      "Opportunities and rewards that motivate growth and connection.",
    icon: <Lightbulb size={28} className="text-white" />,
    iconBg: "bg-gradient-to-br from-[#C28E3A]/40 to-[#D4A047]/30",
    accentColor: "from-[#C28E3A]/20 to-[#D4A047]/10",
  },
  {
    title: "Cats",
    description:
      "Protective factors that safeguard your relationship's stability.",
    icon: <Shield size={28} className="text-white" />,
    iconBg: "bg-gradient-to-br from-yellow-700/40 to-yellow-800/30",
    accentColor: "from-yellow-700/20 to-yellow-800/10",
  },
];

export default function RelationshipFramework() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#1C1611] via-[#1A1612] to-[#1C1611] py-24 px-4">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-amber-900/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-amber-800/10 blur-3xl" />

      {/* Header */}
      <div className="relative mx-auto mb-16 max-w-7xl text-center">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-[#C28E3A] to-transparent" />

        <h2 className="font-serif text-4xl tracking-tight text-[#F8F5F2] md:text-5xl">
          <span className="bg-gradient-to-r from-[#F8F5F2] via-amber-50 to-[#F8F5F2] bg-clip-text text-transparent">
            The Framework: Rats, Carrots, Cats
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-[#F8F5F2]/60 md:text-xl">
          Understand the key elements that influence the strength and health of
          your partnership.
        </p>
      </div>

      {/* Card */}
      <div className="relative mx-auto max-w-7xl">
        <div className="relative rounded-3xl border border-[#F8F5F2]/10 bg-gradient-to-br from-[#2A1F18]/80 via-[#2A1F18]/70 to-[#2A1F18]/80 p-10 shadow-2xl backdrop-blur-xl md:p-16">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 via-transparent to-amber-600/5" />

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {frameworkData.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-1"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br ${item.accentColor} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Icon */}
                <div className="relative mb-6 transition-transform duration-500 group-hover:scale-110">
                  <div
                    className={`${item.iconBg} relative flex items-center justify-center rounded-2xl p-5 shadow-lg transition-all duration-500 group-hover:shadow-2xl border border-white/10 group-hover:border-white/20`}
                  >
                    {item.icon}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accentColor} opacity-50 blur-lg transition-opacity duration-500 group-hover:opacity-100`}
                    />
                  </div>
                </div>

                <h3 className="mb-4 font-serif text-2xl tracking-tight text-[#F8F5F2] transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="max-w-xs text-base font-light leading-relaxed text-[#F8F5F2]/60 transition-colors duration-300 group-hover:text-[#F8F5F2]/80">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:w-3/4" />
              </div>
            ))}
          </div>

          {/* Corners */}
          <div className="absolute top-4 left-4 h-16 w-16 rounded-tl-2xl border-t-2 border-l-2 border-amber-500/20" />
          <div className="absolute bottom-4 right-4 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-amber-500/20" />
        </div>
      </div>
    </section>
  );
}
