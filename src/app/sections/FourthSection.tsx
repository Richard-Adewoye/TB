"use client";

import React from "react";
import ResourceCard from "../components/ResourceCard";

interface Resource {
  title: string;
  description: string;
  cta: string;
  image: string;
}

const resources: Resource[] = [
  {
    title: "Guided Ebooks",
    description:
      "Learn from our Ebooks on the intricacies of relationship dynamics.",
    cta: "View Schedule",
    image: "/ebooks.jpg",
  },
  {
    title: "Social Media",
    description:
      "Check out our social media for relationship tips and updates.",
    cta: "Read Now",
    image: "/social_media.jpg",
  },
  {
    title: "Webinars",
    description: "Webinars for relationship insights and expert guidance.",
    cta: "Download",
    image: "/webinar.avif",
  },
  {
    title: "Blended Family",
    description:
      "Our Blended Family resources provide guidance for navigating complex family dynamics.",
    cta: "Explore",
    image: "/blended-family.jpg",
  },
];

export default function ResourceLibrary() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0D0D0D] via-[#111111] to-[#0D0D0D] py-24 px-4">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-amber-900/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-amber-800/5 blur-3xl" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Header */}
      <div className="relative mx-auto mb-16 max-w-7xl text-center">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-[#C28E3A] to-transparent" />

        <h2 className="mb-6 font-serif text-4xl tracking-tight text-white md:text-5xl">
          <span className="bg-gradient-to-r from-white via-amber-50 to-white bg-clip-text text-transparent">
            Free Resources Library
          </span>
        </h2>

        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-[#A0A0A0] md:text-xl">
          Practical tools, insights, and guided materials to support your
          relationship.
        </p>
      </div>

      {/* Grid */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="animate-fade-up"
          >
            <ResourceCard {...resource} />
          </div>
        ))}
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
    </section>
  );
}
