"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  href?: string;
}

export default function ResourceCard({
  title,
  description,
  cta,
  image,
  href = "#",
}: ResourceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl bg-[#141414] p-5 transition-transform duration-300 hover:-translate-y-2">
      {/* Icon / Image */}
      <div className="mb-4 w-fit rounded-lg bg-[#A68249] p-3">
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
          priority={false}
        />
      </div>

      {/* Content */}
      <h3 className="mb-2 font-serif text-xl text-white">{title}</h3>
      <p className="flex-grow text-sm leading-relaxed text-[#A0A0A0]">
        {description}
      </p>

      {/* CTA */}
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#A68249] transition-all group-hover:gap-3"
      >
        {cta}
        <ArrowRight size={14} />
      </Link>
    </article>
  );
}
