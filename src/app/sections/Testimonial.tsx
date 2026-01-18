"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role?: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mr O A",
    role: "Chevron Drive",
    text:
      "I was trapped in a cycle of addiction that I thought I'd never escape. It consumed my life and broke my relationships. Through therapy, I was introduced to powerful tools like mindfulness exercises, emotional regulation techniques, and practical coping strategies to address my triggers. For the first time, I began to understand the root cause of my addiction instead of just battling the symptoms. Now, it's been almost six months, and my addiction feels like a distant memory. I finally feel free, strong, and in control of my life. I'm forever grateful for this transformation.",
  },
  {
    name: "Tope",
    role: "Ottawa, Canada",
    text:
      "I was completely lost after calling off a marriage in view. I couldn't sleep, and the worry consumed me. Despite the time difference, Coach TJ was always there, asking the right questions that helped me process my emotions and heal. Through the sessions, I gained an empowering perspective, and for the first time in six months, I overcame insomnia and regained my self-esteem. I feel like myself again.",
  },
  {
    name: "Mr Olowokere",
    role: "California",
    text:
      "We were on the brink of separation, but therapy gave us clarity and hope. It wasn't easy, but the transformation in our marriage has been nothing short of a miracle. We're closer now than we ever imagined. Can't forget the inner child therapy session. Thanks TJ.",
  },
  {
    name: "Dr Mrs Smith",
    role: "Canada",
    text:
      "I was carrying years of resentment and unspoken pain. Through counseling, I learned to let go, forgive, and create healthy boundaries. For the first time in years, I feel at peace in my relationship.",
  },
  {
    name: "Tolani",
    role: "NHS",
    text:
      "Our arguments were constant, and I felt like we were growing apart. Therapy gave us tools to handle conflict and reminded us of why we chose each other in the first place. We're in a better place now than we've ever been. Coach T created a non-judgemental environment for us. Love you loads.",
  },
  {
    name: "Chioma",
    role: "Lekki",
    text:
      "I came in broken and lost after my divorce, unsure of who I was anymore. The guidance I received helped me rediscover my worth and taught me how to heal. I'm now stronger and ready to love myself again.",
  },
  {
    name: "Mr and Mrs Roland",
    role: "Manchester",
    text:
      "I thought my marriage was over, but through therapy, we found a way back to each other. The sessions helped us rebuild trust and taught us how to truly communicate. I am forever grateful for this second chance.",
  },
  {
    name: "Henrietta",
    role: "Lekki",
    text:
      "Thank you so much for everything PT. For caring about me even before you ever saw me in person. All the free sessions when we first met. For listening to me, encouraging me, taking my late night calls because I was overwhelmed. If that book ever gets written, you'll definitely be mentioned.",
  },
  {
    name: "Chisom O",
    role: "Client Reflection",
    text:
      "As the year comes to a close, I am filled with gratitude for the impact you have had on my life. You have been a father, a coach, a mentor, and a pillar of unwavering support. From guiding me in leadership to offering counsel in my job and relationship, you've always been there with wisdom, patience, and understanding. Thank you for believing in me and challenging me to grow. God bless you richly.",
  },
  {
    name: "Barrister T.",
    role: "Ottawa",
    text:
      "Looking back and looking forward, my 2024 recap would not be complete without mentioning you. Thank you for understanding the things I can't express. Thank you for hearing my silence.",
  },
];

export default function HorizontalTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <section className="relative bg-[#0D0D0D] py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#0D0D0D_60%)] opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h3 className="text-center text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-6 font-medium">
          Testimonials
        </h3>

        <div className="relative h-[260px] md:h-[240px] flex items-center justify-center">
          <AnimatePresence mode="popLayout" custom={direction}>
            {testimonials.map((t, i) => {
              const isCenter = i === index;
              const isLeft =
                i === (index - 1 + testimonials.length) % testimonials.length;
              const isRight = i === (index + 1) % testimonials.length;

              if (!isCenter && !isLeft && !isRight) return null;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.9 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.25,
                    scale: isCenter ? 1 : 0.92,
                    x: isCenter ? 0 : isLeft ? -320 : 320,
                    zIndex: isCenter ? 20 : 10,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute w-[340px] md:w-[420px]"
                >
                  <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800/70 to-zinc-900/70 backdrop-blur-xl p-6 shadow-xl">
                    <p className="text-gray-200 text-sm leading-relaxed italic">
                      “{t.text}”
                    </p>

                    <div className="pt-4 mt-4 border-t border-white/5">
                      <p className="text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text font-semibold text-sm">
                        {t.name}
                      </p>
                      {t.role && (
                        <p className="text-gray-400 text-[11px] uppercase tracking-wide mt-0.5">
                          {t.role}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-1 rounded-full transition-all ${
                index === i
                  ? "w-8 bg-gradient-to-r from-yellow-400 to-amber-500"
                  : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
