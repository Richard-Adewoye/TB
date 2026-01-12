"use client";

import Link from "next/link";
import { services } from "../constants/services";
import IconBox from "../components/IconBox";

export default function ServiceGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-50 via-neutral-100/30 to-neutral-50 px-6 py-24">
      {/* Ambient background */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-amber-50/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-amber-600 to-transparent" />

          <h2 className="mb-4 font-serif text-4xl tracking-tight text-neutral-950 md:text-5xl">
            Services & Programs
          </h2>

          <p className="mx-auto max-w-2xl text-lg font-light text-neutral-600">
            Professional guidance tailored to your relationship needs
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col items-center rounded-2xl border border-neutral-200/50 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-amber-200 hover:shadow-2xl"
            >
              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/0 via-amber-50/40 to-amber-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative mb-6 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110">
                <IconBox icon={service.icon} />
                <div className="absolute -inset-2 rounded-3xl border-2 border-amber-300/0 transition-all duration-500 group-hover:border-amber-300/30" />
              </div>

              <h3 className="mb-3 font-serif text-xl tracking-tight text-neutral-950 transition-colors duration-300 group-hover:text-amber-900">
                {service.title}
              </h3>

              <p className="mb-6 text-sm font-light leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-700">
                {service.description}
              </p>

              {/* CTA */}
              <Link
                href={service.href}
                aria-label={service.ctaText ? `${service.ctaText} ${service.title}` : `Visit ${service.title}`}
                className="group/btn relative mt-auto rounded-full border-2 border-neutral-200 bg-white px-6 py-2.5 font-medium text-neutral-950 shadow-sm transition-all duration-300 hover:border-amber-400 hover:bg-amber-50 hover:shadow-md"
              >
                <span className="relative z-10">
                  {service.ctaText || "Learn More"}
                </span>
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-amber-100/50 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
              </Link>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-transparent via-amber-400/0 to-transparent transition-all duration-500 group-hover:via-amber-400/40" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
