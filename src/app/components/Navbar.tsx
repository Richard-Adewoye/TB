"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between rounded-full border border-white/5 bg-gradient-to-r from-[#1A1612]/95 via-[#1F1A16]/95 to-[#1A1612]/95 px-6 py-3.5 backdrop-blur-xl shadow-2xl">
          {/* Brand */}
          <Link href="/" className="font-serif text-xl tracking-wide text-white md:text-2xl">
            Dr. Tunji Babajide
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center space-x-8 text-sm font-light tracking-wide md:flex">
            <Link href="/services" className="text-slate-300 hover:text-white">
              Services
            </Link>
            <Link href="/resources" className="text-slate-300 hover:text-white">
              Resources
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-white transition-all hover:border-white/20">
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="rounded-full p-2 text-white md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-2xl bg-[#1A1612]/90 p-4 backdrop-blur-md shadow-lg md:hidden">
            <nav className="flex flex-col space-y-2">
              <Link href="/services" className="text-slate-300 hover:text-white">
                Services
              </Link>
              <Link href="/resources" className="text-slate-300 hover:text-white">
                Resources
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:border-white/20">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}