"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bookmark } from "lucide-react";
import { User } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="relative flex items-center justify-between rounded-full border border-[#d4a047]/20 bg-[#1a1208]/70 px-6 py-3.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]">

          {/* Logo */}
          <Link href="/"
                className="group relative font-serif text-lg md:text-xl tracking-[0.12em] text-[#f5e6c8]"
                >
          <span className="relative z-10">
            Dr. Tunji Babajide
          </span>

  <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-[#d4a047] to-transparent transition-all duration-500 group-hover:w-full" />
</Link>


          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
  {[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ].map(({ label, href }) => (
    <Link
      key={label}
      href={href}
      className="relative text-[#e7d7b5] transition hover:text-white"
    >
      <span className="after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#d4a047] after:transition-all hover:after:w-full" />
      {label}
    </Link>
  ))}
</nav>


          {/* CTA */}
          
        <div className="hidden md:flex items-center">
         <Link
          href="/login"
          aria-label="Sign in or create account"
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a047]/30 bg-[#1a1208]/60 text-[#f5e6c8] backdrop-blur-md transition-all hover:border-[#d4a047]/60 hover:bg-[#1a1208]/80"
          >
        <User
          size={18}
          className="transition-transform group-hover:scale-105"
        />

    {/* subtle glow on hover */}
    <span className="pointer-events-none absolute inset-0 rounded-full bg-[#d4a047]/10 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
  </Link>
</div>


          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden rounded-full p-2 text-[#f5e6c8] transition hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-3 rounded-2xl border border-[#d4a047]/20 bg-[#1a1208]/90 p-4 backdrop-blur-xl shadow-2xl md:hidden">
            <nav className="flex flex-col gap-2">
              {["Resources", "Online Courses", "Topics", "Shop Products", "About", "Sessions Live"].map(
                (item) => (
                  <Link
                    key={item}
                    href="/#"
                    className="rounded-lg px-4 py-2 text-[#e7d7b5] transition hover:bg-white/5 hover:text-white"
                  >
                    {item}
                  </Link>
                )
              )}

              <Link
                href="/#"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c28e3a] via-[#d4a047] to-[#c28e3a] px-4 py-2 text-sm font-medium text-[#1a1208]"
              >
                <Bookmark size={16} />
                Subscribe
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
