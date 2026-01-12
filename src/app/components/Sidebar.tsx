"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  BarChart,
  Package,
  Archive,
  Gift,
  Home,
} from "lucide-react";

interface NavItem {
  name: string;
  icon: any;
  href?: string;
  active?: boolean;
}

export default function Sidebar({ current = "/orders" }: { current?: string }) {
  const nav: NavItem[] = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Order", icon: ShoppingBag, href: "/orders", active: current === "/orders" },
    { name: "Statistic", icon: BarChart, href: "/statistics" },
    { name: "Product", icon: Package, href: "/products" },
    { name: "Stock", icon: Archive, href: "/stock" },
    { name: "Offer", icon: Gift, href: "/offers" },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-[#1E61FF] rounded-r-3xl p-6 flex-col justify-between h-screen">
      {/* Home / Logo */}
      <div className="mb-10">
        <Link href="/home" className="flex items-center gap-2 text-white font-bold text-lg">
          <Home size={24} /> Home
        </Link>
      </div>

      {/* Navigation */}
      <ul className="space-y-3 flex-1">
        {nav.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href || "#"}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm
                ${
                  item.active
                    ? "bg-white text-[#1E61FF]"
                    : "text-white/80 hover:text-white"
                }`}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer / Socials */}
      <div className="text-white/60 text-xs flex gap-4">
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Google</span>
      </div>
    </aside>
  );
}
