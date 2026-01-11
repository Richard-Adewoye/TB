import { ArrowRight } from "lucide-react";

export function ServiceSectionTwo() {
  return (
    <section className="bg-[#0a1517] px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="rounded-3xl bg-[#111c1f] px-8 py-16 shadow-xl">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Begin with understanding. Continue with support.
          </h2>

          <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#b8860b] px-8 py-4 text-sm font-medium text-black transition hover:opacity-90">
            Take the Marriage Survival Test
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
