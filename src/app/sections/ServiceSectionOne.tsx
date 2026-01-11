import Image from "next/image";
import { Circle } from "lucide-react";

export function ServiceSectionOne() {
  return (
    <section className="w-full">
      {/* Dark Hero Section */}
      <div className="relative bg-[#1A1613] px-6 pt-28 pb-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#F5F1ED]">
            Your strategic partner for{' '}
            <span className="text-[#A67C37]">business success</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-[#D1CDC7] text-base md:text-lg leading-relaxed">
            We help organizations navigate complexity, scale intelligently,
            and execute with confidence.
          </p>
        </div>

        {/* Overlapping Image Grid */}
        <div className="relative z-10 mx-auto mt-20 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {["/img1.jpg", "/img2.jpg", "/img3.jpg"].map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#241F1B] shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Portrait ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Light Content Section */}
      <div className="-mt-32 bg-[#241F1B] px-6 pt-40 pb-24">
        <div className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:gap-20 items-start">
          {/* Left Label */}
          <div className="flex items-center gap-3 text-sm font-medium text-[#F5F1ED]">
            <Circle className="h-2 w-2 fill-[#A67C37]" />
            <span>About Acelia</span>
          </div>

          {/* Right Body */}
          <div className="mt-8 md:mt-0">
            <p className="text-2xl md:text-3xl leading-tight text-[#D1CDC7]">
              With over 15 years of experience, we specialize in delivering
              tailored solutions that align strategy, technology, and execution
              to help businesses grow sustainably and decisively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
