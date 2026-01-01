import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subtext: string;
  imageSrc: string;
}

export default function HeroSection({
  headline,
  subtext,
  imageSrc,
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden -mt-20 pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1A1612] via-[#1F1A16] to-[#1A1612]" />
      <div className="absolute top-0 right-0 -z-10 h-1/2 w-1/2 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-1/3 rounded-full bg-amber-600/5 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-16 md:py-32">
        {/* Text */}
        <div className="flex flex-col gap-8 md:pr-8">
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-amber-500/50 to-transparent" />

          <h1 className="font-serif text-5xl leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-br from-white via-amber-50 to-white bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>

          <p className="max-w-xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
            {subtext}
          </p>

          <Link href="/#" className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#C28E3A] to-[#D4A047] px-8 py-4 font-medium text-white shadow-xl shadow-amber-900/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-900/30 active:scale-[0.98]">
            <span className="relative z-10">
              Take the $1 Marriage Survival Test
            </span>
            <ChevronRight size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Image */}
        <div className="group relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/10 to-transparent blur-2xl transition-all duration-500 group-hover:from-amber-500/15" />

          <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-2xl shadow-black/40 transition-all duration-500 group-hover:border-white/10">
            <Image src={imageSrc} alt="Couple in counselling session" width={600} height={600} priority className="h-auto w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-tr-3xl border-r-2 border-t-2 border-amber-500/20" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-bl-3xl border-b-2 border-l-2 border-amber-500/20" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1612] to-transparent" />
    </section>
  );
}