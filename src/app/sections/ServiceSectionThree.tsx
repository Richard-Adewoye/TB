import { Check } from "lucide-react";

export function ServiceSectionThree() {
  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-medium text-[#A3FF47]">Our Services</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-black">
            Strategic{" "}
            <span className="rounded-md bg-[#A3FF47] px-2 text-black">
              Business
            </span>{" "}
            Solutions
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-28">
          <div className="rounded-2xl bg-[#0a1517] p-8 text-white">
            Advisory & Strategy
          </div>

          <div className="rounded-2xl bg-[#A3FF47] p-8 text-black">
            Digital Transformation
          </div>

          <div className="rounded-2xl bg-gray-100 p-8 text-black">
            Operational Excellence
          </div>

          <div className="rounded-2xl bg-gray-100 p-8 text-black">
            Leadership Coaching
          </div>

          <div className="rounded-2xl bg-[#0a1517] p-8 text-white">
            Market Expansion
          </div>

          <div className="rounded-2xl bg-[#A3FF47] p-8 text-black">
            Data-Driven Growth
          </div>
        </div>

        {/* Pricing */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Basic",
              dark: true,
            },
            {
              name: "Premium",
            },
            {
              name: "Corporate",
            },
          ].map(({ name, dark }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 ${
                dark
                  ? "bg-[#0a1517] text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              <h3 className="text-xl font-semibold">{name}</h3>

              <ul className="mt-6 space-y-3 text-sm">
                {["Core support", "Expert guidance", "Scalable solutions"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#A3FF47]" />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <button className="mt-8 w-full rounded-full bg-[#A3FF47] py-3 text-sm font-medium text-black">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
