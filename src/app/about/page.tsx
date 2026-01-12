"use client";

import Image from "next/image";
import { Circle } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function StrategicSection() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      if (top < window.innerHeight) controls.start("visible");
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); 
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Local image paths (assuming they are in your /public folder)
  const localImages = [
    { src: "/img_1.jpg", alt: "Strategic Consultation" },
    { src: "/img_2.jpg", alt: "Business Execution" },
    { src: "/img_3.jpg", alt: "Corporate Growth" },
  ];

  return (
    <section className="w-full font-sans overflow-hidden" ref={ref}>
      {/* ===================== */}
      {/* ABOUT SECTION – TOP */}
      {/* ===================== */}
      <motion.section
        className="bg-[#f5e6c8] px-6 pt-32 pb-20"
        initial="hidden"
        animate={controls}
        variants={fadeUp}
      >
        <article className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:gap-24 items-center">
          <div className="flex items-center gap-3 text-sm font-medium text-[#1a1208]">
            <Circle className="h-2 w-2 fill-[#d4a047] text-[#d4a047]" />
            <span className="tracking-wide uppercase">About Acelia</span>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="text-3xl leading-tight text-[#1a1208] md:text-4xl italic font-serif">
              With over 15 years of experience, we specialize in delivering tailored solutions that align strategy, technology, and execution.
            </p>
          </div>
        </article>
      </motion.section>

      {/* ===================== */}
      {/* HERO + IMAGE GRID */}
      {/* ===================== */}
      <motion.section
        className="relative bg-[#1a1208] px-6 pt-28 pb-48"
        initial="hidden"
        animate={controls}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#f5e6c8]">
            Your strategic partner for business success
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-[#e7d7b5]">
            We help organizations navigate complexity, scale intelligently, and execute with confidence.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {localImages.map((img, i) => (
              <motion.div
                key={i}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#2a1d12] border border-[#d4a047]/10"
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                variants={{
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: i * 0.2 + 0.2, duration: 0.8 } 
                  }
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0} // Prioritize first image for LCP
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}