import { ArrowRight } from "lucide-react";

export function ServiceSectionThree() {
  return (
    <section className="bg-[#1A1612] px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="rounded-3xl bg-[#231F1B] px-8 py-16 shadow-xl">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F9F7F2]">
            Begin with understanding. Continue with support.
          </h2>

          <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#B68D40] px-8 py-4 text-sm font-medium text-[#1A1612] transition hover:opacity-90">
            Take the Marriage Survival Test
            <ArrowRight size={18} className="text-[#1A1612]" />
          </button>
        </div>
      </div>
    </section>
  );
}
