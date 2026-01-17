"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role?: string;
  text: string;
  imageSrc?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    role: "CEO, GlobalTech",
    text: "Tunji's guidance transformed our workplace culture. The results were immediate and profound.",
    imageSrc: "/clients/alice.jpg",
  },
  {
    name: "Michael Smith",
    role: "Parent & Entrepreneur",
    text: "Through Tunji's coaching, I gained clarity in both personal and professional life.",
    imageSrc: "/clients/michael.jpg",
  },
  {
    name: "Sophie Adeyemi",
    role: "HR Director",
    text: "The workshops delivered actionable strategies and lasting emotional impact for our teams.",
    imageSrc: "/clients/sophie.jpg",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds per testimonial
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#0F0D0A] py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F3F4F6] mb-8">
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, i) =>
              i === current ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
                >
                  {testimonial.imageSrc && (
                    <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#EAB308]/40 shadow-lg">
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}

                  <div className="text-center md:text-left max-w-xl">
                    <p className="text-[#F3F4F6] text-lg md:text-xl italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="mt-4 font-semibold text-[#EAB308] text-lg">
                      {testimonial.name}
                    </p>
                    {testimonial.role && (
                      <p className="text-sm md:text-base text-[#F3F4F6]/80">
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-[#EAB308]"
                  : "bg-[#F3F4F6]/30 hover:bg-[#EAB308]/50"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
