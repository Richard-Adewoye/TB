"use client";

import { Youtube, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative bg-gradient-to-b from-[#0D0D0D] to-[#0A0A0A] text-white py-16 px-6 overflow-hidden">
      {/* Subtle ambient effect */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1: Bio */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-2xl text-white mb-2">
            <span className="bg-gradient-to-r from-white via-amber-50 to-white bg-clip-text text-transparent">
              Tunji Babajide
            </span>
          </h3>
          <p className="text-gray-400 leading-relaxed font-light">
            Providing expert relationship guidance and coaching for couples seeking transformation.
          </p>
          <div className="flex gap-3 mt-2">
            <a aria-label="YouTube" className="group p-3 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-600/20 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
              <Youtube size={20} className="text-gray-400 group-hover:text-amber-400 transition-colors duration-300" />
            </a>
            <a aria-label="Instagram" className="group p-3 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-600/20 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
              <Instagram size={20} className="text-gray-400 group-hover:text-amber-400 transition-colors duration-300" />
            </a>
            <a aria-label="Facebook" className="group p-3 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-600/20 border border-white/5 hover:border-amber-500/30 transition-all duration-300">
              <Facebook size={20} className="text-gray-400 group-hover:text-amber-400 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-2xl text-white mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            {["Home", "Services", "Resources", "Contact"].map((link) => (
              <li key={link} className="group relative inline-block w-fit hover:text-amber-400 cursor-pointer transition-colors duration-300">
                <span>{link}</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-2xl text-white mb-2">Newsletter</h3>
          <p className="text-gray-400 text-sm font-light mb-2">
            Stay updated with insights and resources
          </p>
          <div className="flex max-w-sm group">
            <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-l-full px-5 py-3 w-full focus:outline-none focus:border-amber-500/50 focus:bg-white/10 text-white placeholder-gray-500 transition-all duration-300" />
            <button className="bg-gradient-to-r from-[#A68249] to-[#B8904F] hover:from-[#95723F] hover:to-[#A68249] rounded-r-full px-5 py-3 flex items-center justify-center border border-l-0 border-amber-600/30 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300 relative overflow-hidden">
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-2">
        <span className="font-light">© 2025 Tunji Babajide. All rights reserved.</span>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms"].map((item) => (
            <span key={item} className="relative group hover:text-amber-400 cursor-pointer transition-colors duration-300">
              <span>{item}</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-300"></span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}