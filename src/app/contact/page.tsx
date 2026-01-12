"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Book,
  Users,
  Play,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const sans = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={sans.className}>
      {/* ===================== */}
      {/* SECTION A: CONTACT */}
      {/* ===================== */}
      <section className="bg-[#2A241F] py-24 px-6 text-[#EDE6DA]">
        <div className="mx-auto max-w-7xl flex flex-col gap-16 md:flex-row">

          {/* FORM – FIRST */}
          <div className="flex-1">
            <div className="rounded-3xl bg-[#3A322B] p-10 shadow-lg">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {["Full Name", "Email", "Subject"].map((label) => (
                    <input
                      key={label}
                      required
                      placeholder={label}
                      className="w-full border-b border-gray-600 bg-transparent pb-2 outline-none focus:border-[#A68249] text-[#EDE6DA]"
                    />
                  ))}

                  <textarea
                    required
                    placeholder="Message"
                    rows={4}
                    className="w-full border-b border-gray-600 bg-transparent pb-2 outline-none focus:border-[#A68249] text-[#EDE6DA]"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-[#A68249] px-8 py-4 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Send Message
                    <ArrowRight size={18} />
                  </button>
                </form>
              ) : (
                <p className="text-green-400 font-medium">
                  Message sent successfully. We’ll respond shortly.
                </p>
              )}
            </div>
          </div>

          {/* INFO – SECOND */}
          <div className="flex-1">
            <p className="mb-4 text-sm font-semibold uppercase text-[#A68249]">
              Get in touch!
            </p>
            <h2 className="mb-10 text-3xl md:text-4xl font-bold text-[#EDE6DA]">
              We are always ready to help you and answer your questions.
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <InfoItem icon={Phone} title="Call Center" text="+1 234 567 890" />
              <InfoItem
                icon={MapPin}
                title="Our Location"
                text="123 Modern Street, United Kingdom"
              />
              <InfoItem
                icon={Mail}
                title="Email"
                text="support@example.com"
              />

              <div>
                <p className="mb-2 font-semibold">Social Network</p>
                <div className="flex gap-4 text-xl text-[#EDE6DA]">
                  <FaFacebookF />
                  <FaXTwitter />
                  <FaLinkedinIn />
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================== */}
      {/* SECTION B: RESOURCES */}
      {/* ===================== */}
      <section className="bg-[#1A1612] px-6 py-32">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#231F1B] px-10 py-20">
          <h2
            className={`${serif.className} mb-16 text-center text-4xl md:text-5xl text-[#F9F7F2]`}
          >
            Free Resources to Support You Right Now
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[{
              title: "Educational Materials",
              desc: "In-depth case studies, guides, and ebooks.",
              icon: Book,
            }, {
              title: "Interactive Learning",
              desc: "Live webinars and supportive communities.",
              icon: Users,
            }, {
              title: "On-Demand Content",
              desc: "Videos, short lessons, and recorded talks.",
              icon: Play,
            }].map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-2xl bg-[#1A1612] p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#B68D40] transition group-hover:scale-110">
                  <Icon className="h-6 w-6 text-[#231F1B]" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[#F9F7F2]">
                  {title}
                </h3>
                <p className="text-sm text-[#CFCBC4]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showScroll && (
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#A68249] text-white shadow-md transition hover:opacity-80"
        >
          ↑
        </button>
      )}
    </main>
  );
}

function InfoItem({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="mb-1 flex items-center gap-2 font-semibold text-[#EDE6DA]">
        <Icon size={16} /> {title}
      </p>
      <p className="text-sm text-[#CFCBC4]">{text}</p>
    </div>
  );
}
