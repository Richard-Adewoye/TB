import Image from "next/image";
import { Circle } from "lucide-react";

export default function StrategicSection() {
  return (
    <section className="w-full">
      {/* Dark Hero Section */}
      <section className="relative bg-[#1a1208] px-6 pt-28 pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[#f5e6c8] md:text-5xl">
            Your strategic partner for business success
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#e7d7b5] md:text-lg">
            We help organizations navigate complexity, scale intelligently,
            and execute with confidence.
          </p>
        </div>

        {/* Image Grid */}
        <div className="relative z-10 mx-auto mt-20 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {["/img1.jpg", "/img2.jpg", "/img3.jpg"].map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#2a1d12] ring-1 ring-[#d4a047]/20"
              >
                <Image
                  src={src}
                  alt={`Team portrait ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="-mt-32 bg-[#f5e6c8] px-6 pt-40 pb-24">
        <article className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:gap-20">
          {/* Left column */}
          <div className="flex items-center gap-3 text-sm font-medium text-[#1a1208]">
            <Circle className="h-2 w-2 fill-[#d4a047] text-[#d4a047]" />
            <span className="tracking-wide uppercase">About Acelia</span>
          </div>

          {/* Right column */}
          <div className="mt-8 md:mt-0">
            <p className="text-2xl leading-tight text-[#1a1208] md:text-3xl">
              With over 15 years of experience, we specialize in delivering
              tailored solutions that align strategy, technology, and execution
              to help businesses grow sustainably and decisively.
            </p>
          </div>
        </article>
      </section>
    </section>
  );
}
