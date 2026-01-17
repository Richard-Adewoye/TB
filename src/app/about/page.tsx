"use client";

import Image from "next/image";
import { Circle, Check } from "lucide-react";
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

  const localImages = [
    { src: "/img_1.jpg", alt: "rl-1" },
    { src: "/img_2.jpg", alt: "rl-2" },
    { src: "/img_3.jpg", alt: "rl-3" },
  ];

  return (
    <section className="w-full font-sans overflow-hidden" ref={ref}>
      {/* ===================== */}
      {/* ABOUT INTRO */}
      {/* ===================== */}
      <motion.section
        className="bg-[#f5e6c8] px-6 pt-32 pb-20"
        initial="hidden"
        animate={controls}
        variants={fadeUp}
      >
        <article className="mx-auto max-w-4xl text-center">
          {/* Label */}
          <div className="mb-12 flex items-center justify-center gap-3 text-sm font-medium text-[#1a1208]">
            <Circle className="h-2 w-2 fill-[#d4a047] text-[#d4a047]" />
            <span className="tracking-wide uppercase">
              About Tunji Babajide
            </span>
          </div>

          {/* Center Image */}
          <div className="relative mx-auto mb-14 h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-3xl border border-[#d4a047]/25 shadow-lg">
            <Image
              src="/TB_1.jpeg"
              alt="Tunji Babajide"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,160,71,0.25),transparent_70%)]" />
          </div>

          {/* Intro Text */}
          <p className="mx-auto max-w-3xl text-3xl md:text-4xl leading-tight text-[#1a1208] font-serif italic">
            With close to two decades of dedication, I help individuals,
            families, and organisations achieve emotional clarity, resilience,
            and lasting transformation.
          </p>
        </article>
      </motion.section>

      {/* ===================== */}
      {/* HERO + IMAGES */}
      {/* ===================== */}
      <motion.section
        className="relative bg-[#1a1208] px-6 pt-28 pb-32"
        initial="hidden"
        animate={controls}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#f5e6c8]">
            Building the blueprint for thriving relationships
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-[#e7d7b5]">
            From families to boardrooms, I guide people through emotional
            complexity toward clarity, confidence, and sustainable success.
          </p>
        </div>

        <div className="mx-auto max-w-6xl mb-32">
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
                    transition: {
                      delay: i * 0.2 + 0.2,
                      duration: 0.8,
                    },
                  },
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===================== */}
        {/* LONG-FORM ABOUT */}
        {/* ===================== */}
        <div className="mx-auto max-w-4xl text-[#e7d7b5] space-y-6 text-lg leading-relaxed">
          <p>
            With close to two decades of unwavering dedication to mental health
            counselling, integrative coaching, and personal development, I have
            built a reputation as a trailblazer in mental wellness and holistic
            transformation across the UK, Nigeria, and globally.
          </p>

          <p>
            My approach blends evidence-based mental health counselling with
            integrative coaching techniques, identifying root causes and
            applying practical, data-driven strategies that create lasting
            change.
          </p>

          <p>
            From boardrooms to family systems, my work fosters resilience,
            emotional intelligence, and sustainable success for individuals,
            families, and organisations.
          </p>
        </div>
      </motion.section>

      {/* ===================== */}
      {/* KEY COMPETENCIES */}
      {/* ===================== */}
      <motion.section
        className="bg-[#f5e6c8] px-6 py-32"
        initial="hidden"
        animate={controls}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-[#1a1208]">
            Key Competencies
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              "Mental health counselling for trauma, addiction, and emotional healing",
              "Integrative coaching combining psychology with actionable strategies",
              "Organisational mental health and workplace well-being strategy",
              "Support for high-net-worth individuals navigating stress, leadership, and purpose",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-white p-8 shadow-sm"
              >
                <Check className="mt-1 h-5 w-5 text-[#d4a047]" />
                <p className="text-[#1a1208] text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </section>
  );
}
