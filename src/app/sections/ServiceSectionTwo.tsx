import { Check, ArrowRight, Heart, Users, BookOpen } from "lucide-react";

export function ServiceSectionTwo() {
  const resources = [
    {
      title: "Guided Ebooks",
      desc: "Learn from my ebooks on the intricacies of relationship dynamics.",
      linkText: "Take a look",
      bgColor: "bg-white",
    },
    {
      title: "Social Media",
      desc: "I share practical relationship insights and real-world guidance online.",
      linkText: "Visit Online",
      bgColor: "bg-[#F2EBE1]",
    },
    {
      title: "Webinars",
      desc: "I host webinars offering focused relationship insight and expert guidance.",
      linkText: "View Schedule",
      bgColor: "bg-white",
    },
    {
      title: "Blended Family",
      desc: "I provide resources to help families navigate complex blended dynamics.",
      linkText: "Explore",
      bgColor: "bg-[#2D2D2D]",
      textColor: "text-[#F7F3EE]",
      accentColor: "text-[#C49B55]",
    },
  ];

  const coreOfferings = [
    {
      name: "Marital Distress Therapy",
      desc: "I help couples address deep-rooted conflict, rebuild trust, and move toward clarity and repair.",
      cta: "Book a Session",
      icon: <Heart className="h-6 w-6" />,
      features: [
        "Conflict De-escalation",
        "Emotional Repair",
        "Relationship Clarity",
      ],
      dark: true,
    },
    {
      name: "Last Year Single Coaching",
      desc: "I work with individuals who are ready to break patterns and prepare for a healthy, lasting relationship.",
      cta: "Start Coaching",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Pattern Awareness",
        "Intentional Dating",
        "Personal Growth",
      ],
      dark: false,
    },
    {
      name: "Blended Family Therapy",
      desc: "I support blended families in navigating boundaries, roles, and emotional complexity with confidence.",
      cta: "Get Support",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Family Integration",
        "Boundary Setting",
        "Healthy Communication",
      ],
      dark: false,
    },
    {
      name: "NERL™",
      desc: "I teach Navigating Emotions, Relationships, and Leadership to help you lead with emotional intelligence.",
      cta: "Learn More",
      icon: <BookOpen className="h-6 w-6" />,
      features: [
        "Emotional Awareness",
        "Relational Leadership",
        "Practical Application",
      ],
      dark: false,
    },
    {
      name: "Pre-Marital Counselling",
      desc: "I help couples prepare for marriage by addressing expectations, communication, and long-term alignment.",
      cta: "Prepare Together",
      icon: <Heart className="h-6 w-6" />,
      features: [
        "Expectation Alignment",
        "Conflict Skills",
        "Future Planning",
      ],
      dark: false,
    },
    {
      name: "Parenting Coaching",
      desc: "I coach parents to lead with consistency, empathy, and confidence through every stage of development.",
      cta: "Work With Me",
      icon: <Users className="h-6 w-6" />,
      features: [
        "Parenting Strategies",
        "Emotional Regulation",
        "Family Stability",
      ],
      dark: false,
    },
    {
      name: "Divorce Transition Therapy",
      desc: "I support individuals navigating divorce with structure, emotional grounding, and forward momentum.",
      cta: "Begin Transition",
      icon: <Heart className="h-6 w-6" />,
      features: [
        "Emotional Stabilization",
        "Life Rebuilding",
        "Healthy Transitions",
      ],
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
            <span className="rounded-md bg-[#F2EBE1] px-3 py-1">
              Healthy
            </span>{" "}
            Dynamics
          </h2>
        </div>

        {/* Resources */}
        <div className="mb-32 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((item, i) => (
            <div
              key={i}
              className={`group flex flex-col justify-between rounded-3xl p-8 shadow-sm transition-all hover:shadow-md ${item.bgColor} ${
                item.textColor || "text-[#2D2D2D]"
              }`}
            >
              <div>
                <h3
                  className={`text-xl font-bold ${
                    item.accentColor || "text-[#2D2D2D]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
              <button className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3">
                {item.linkText}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Core Services */}
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
              <p className="mt-3 flex-grow text-sm leading-relaxed opacity-80">
                {offering.desc}
              </p>
              <ul className="mt-8 space-y-3 border-t border-[#C49B55]/20 pt-6 text-sm">
                {offering.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#C49B55]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-10 w-full rounded-full py-4 text-xs font-bold uppercase tracking-widest transition-all ${
                  offering.dark
                    ? "bg-[#C49B55] text-[#2D2D2D] hover:bg-[#d4ac67]"
                    : "bg-[#2D2D2D] text-white hover:bg-black"
                }`}
              >
                {offering.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
