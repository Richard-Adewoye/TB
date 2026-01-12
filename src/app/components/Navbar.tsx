"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // The unified navigation items
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="relative flex items-center justify-between rounded-full border border-[#d4a047]/20 bg-[#1a1208]/70 px-6 py-3.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
          
          {/* Logo */}
          <Link href="/" className="group relative font-serif text-lg md:text-xl tracking-[0.12em] text-[#f5e6c8]">
            <span className="relative z-10">Dr. Tunji Babajide</span>
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-[#d4a047] to-transparent transition-all duration-500 group-hover:w-full" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`relative transition-colors hover:text-white ${
                  pathname === href ? "text-white" : "text-[#e7d7b5]"
                }`}
              >
                {label}
                {/* Underline effect */}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#d4a047] transition-all duration-300 ${
                  pathname === href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA / User Profile */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              aria-label="Sign in"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a047]/30 bg-[#1a1208]/60 text-[#f5e6c8] backdrop-blur-md transition-all hover:border-[#d4a047]/60 hover:bg-[#1a1208]/80"
            >
              <User size={18} className="transition-transform group-hover:scale-105" />
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[#d4a047]/10 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden rounded-full p-1 text-[#f5e6c8] transition hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu - Synchronized with Desktop */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 overflow-hidden rounded-2xl border border-[#d4a047]/20 bg-[#1a1208]/95 p-2 backdrop-blur-xl shadow-2xl md:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`rounded-xl px-5 py-4 text-base font-medium transition-all ${
                    pathname === href 
                      ? "bg-[#d4a047]/10 text-white" 
                      : "text-[#e7d7b5] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}