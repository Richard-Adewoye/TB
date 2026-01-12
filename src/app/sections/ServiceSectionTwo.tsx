import { Check, ArrowRight, BookOpen, Users, Video, Heart } from "lucide-react";

export function ServiceSectionTwo() {
  const resources = [
    {
      title: "Guided Ebooks",
      desc: "Learn from our Ebooks on the intricacies of relationship dynamics.",
      linkText: "Take a look",
      bgColor: "bg-white",
    },
    {
      title: "Social Media",
      desc: "Check out our social media for relationship tips and updates.",
      linkText: "Visit Online",
      bgColor: "bg-[#F2EBE1]",
    },
    {
      title: "Webinars",
      desc: "Webinars for relationship insights and expert guidance.",
      linkText: "View Schedule",
      bgColor: "bg-white",
    },
    {
      title: "Blended Family",
      desc: "Our Blended Family resources provide guidance for navigating complex family dynamics.",
      linkText: "Explore",
      bgColor: "bg-[#2D2D2D]",
      textColor: "text-[#F7F3EE]",
      accentColor: "text-[#C49B55]",
    },
  ];

  const coreOfferings = [
    {
      name: "Therapy",
      desc: "One-on-one or couples sessions focused on deep emotional repair and clarity.",
      cta: "Book a Session",
      icon: <Heart className="h-6 w-6" />,
      features: ["Emotional Repair", "Clarity & Healing", "Expert Specialists"],
      dark: true,
    },
    {
      name: "Live Class",
      desc: "Live, instructor-led classes with expert guidance and community support.",
      cta: "Sign Up",
      icon: <Users className="h-6 w-6" />,
      features: ["Real-time Q&A", "Community Peer Support", "Expert Guidance"],
      dark: false,
    },
    {
      name: "Self-Paced Class",
      desc: "Flexible, self-paced programs designed to fit your schedule.",
      cta: "Start Now",
      icon: <Video className="h-6 w-6" />,
      features: ["Lifetime Access", "Flexible Schedule", "Downloadable Tools"],
      dark: false,
    },
    {
      name: "Books",
      desc: "A curated collection of relationship-focused books for deeper understanding.",
      cta: "Explore",
      icon: <BookOpen className="h-6 w-6" />,
      features: ["Curated Selection", "In-depth Research", "Practical Guides"],
      dark: false,
    },
  ];

  return (
    <section className="bg-[#F7F3EE] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C49B55]">
            Our Offerings
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#2D2D2D]">
            Strategic Support for{" "}
            <span className="rounded-md bg-[#F2EBE1] px-3 py-1 text-[#2D2D2D]">
              Healthy
            </span>{" "}
            Dynamics
          </h2>
        </div>

        {/* Resources Grid (Ebooks, Social, etc.) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-32">
          {resources.map((item, i) => (
            <div
              key={i}
              className={`group flex flex-col justify-between rounded-3xl p-8 shadow-sm transition-all hover:shadow-md ${
                item.bgColor
              } ${item.textColor || "text-[#2D2D2D]"}`}
            >
              <div>
                <h3 className={`text-xl font-bold ${item.accentColor || "text-[#2D2D2D]"}`}>
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
              <button className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all">
                {item.linkText} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Core Services Section (Therapy, Live Class, etc.) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coreOfferings.map((offering) => (
            <div
              key={offering.name}
              className={`flex flex-col rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                offering.dark
                  ? "bg-[#2D2D2D] text-[#F7F3EE]"
                  : "bg-white text-[#2D2D2D] shadow-sm border border-[#F2EBE1]"
              }`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2EBE1] text-[#C49B55]">
                {offering.icon}
              </div>
              
              <h3 className="text-2xl font-bold">{offering.name}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80 flex-grow">
                {offering.desc}
              </p>

              <ul className="mt-8 space-y-3 text-sm border-t border-[#C49B55]/20 pt-6">
                {offering.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#C49B55]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`mt-10 w-full rounded-full py-4 text-xs font-bold uppercase tracking-widest transition-all ${
                offering.dark 
                  ? "bg-[#C49B55] text-[#2D2D2D] hover:bg-[#d4ac67]" 
                  : "bg-[#2D2D2D] text-white hover:bg-black"
              }`}>
                {offering.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}