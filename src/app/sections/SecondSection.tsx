"use client";

import { useState, useEffect } from "react";
import { Users, Heart, Network } from "lucide-react";

const assessmentData = [
  {
    title: "Personality",
    description:
      "Understand individual personalities and how they interact within your relationship.",
    icon: Users,
  },
  {
    title: "ACEs",
    description:
      "Assess past experiences that may impact emotional responses and relationship dynamics.",
    icon: Heart,
  },
  {
    title: "Relationship Exposure",
    description:
      "Measure social and environmental factors affecting your partnership.",
    icon: Network,
  },
];

export default function MarriageAssessment() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8F5F2] via-[#FAF7F4] to-[#F8F5F2] py-24 px-4">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />

      {/* Background Decorations with parallax */}
      <div 
        className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl transition-transform duration-100"
        style={{
          transform: mounted ? `translateY(${scrollY * 0.15}px)` : "translateY(0)"
        }}
      />
      <div 
        className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-amber-50/40 blur-3xl transition-transform duration-100"
        style={{
          transform: mounted ? `translateY(${-scrollY * 0.1}px)` : "translateY(0)"
        }}
      />

      {/* Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <div 
          className="inline-block mb-4"
          style={{
            animation: mounted ? "fadeIn 0.6s ease-out" : "none"
          }}
        >
          <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-[#C28E3A] to-transparent" />
        </div>
        <h2 
          className="font-serif mb-6 text-4xl md:text-5xl tracking-tight text-[#1A1612]"
          style={{
            animation: mounted ? "fadeInUp 0.8s ease-out 0.1s both" : "none"
          }}
        >
          Marriage Survival Assessment
        </h2>
        <p 
          className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed font-light text-[#1A1612]/60"
          style={{
            animation: mounted ? "fadeInUp 0.8s ease-out 0.2s both" : "none"
          }}
        >
          Three pillars that determine the health and longevity of your relationship.
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {assessmentData.map((card, i) => {
          const Icon = card.icon;
          return (
            <div 
              key={card.title} 
              className="group relative flex flex-col items-center text-center rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 border border-[#1A1612]/5 hover:-translate-y-2 hover:border-[#C28E3A]/20 hover:shadow-2xl"
              style={{ 
                animation: mounted ? `fadeInUp 0.6s ease-out ${0.3 + i * 0.15}s both` : "none"
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C28E3A]/5 via-transparent to-[#D4A047]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#C28E3A]/10 via-[#C28E3A]/20 to-[#D4A047]/10 p-5 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-3">
                <Icon size={28} className="text-[#1A1612] transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C28E3A]/20 to-transparent blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <h3 className="relative mb-3 text-2xl font-semibold tracking-tight text-[#1A1612] transition-colors duration-300 group-hover:text-[#C28E3A]">
                {card.title}
              </h3>
              <p className="relative text-[#1A1612]/60 font-light leading-relaxed transition-colors duration-300 group-hover:text-[#1A1612]/70">
                {card.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-transparent via-[#C28E3A]/0 to-transparent transition-all duration-500 group-hover:via-[#C28E3A]/30" />
            </div>
          );
        })}
      </div>
    </section>
  );
}