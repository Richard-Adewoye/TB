"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  BarChart3,
  ShoppingBag,
  Archive,
  Gift,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Search,
} from "lucide-react";

type OrderStatus = "Pending" | "Dispatch" | "Completed";

type Order = {
  id: string;
  name: string;
  address: string;
  date: string;
  price: string;
  status: OrderStatus;
};

const orders: Order[] = [
  { id: "#2633", name: "John Doe", address: "New York, USA", date: "03 Aug 2020", price: "$120.00", status: "Pending" },
  { id: "#2634", name: "Jane Smith", address: "London, UK", date: "02 Aug 2020", price: "$98.00", status: "Dispatch" },
  { id: "#2635", name: "Alex Brown", address: "Berlin, DE", date: "01 Aug 2020", price: "$210.00", status: "Completed" },
  { id: "#2636", name: "Emily White", address: "Paris, FR", date: "31 Jul 2020", price: "$150.00", status: "Completed" },
];

const tabs = ["All orders", "Dispatch", "Pending", "Completed"];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("All orders");
  const [selectedRow, setSelectedRow] = useState("#2633");

  return (
    <div className="flex min-h-screen bg-[#F7F3EE] font-sans">
      {/* Sidebar */}
      <aside className="hidden md:flex w-72 bg-[#2D2D2D] text-[#F7F3EE] flex-col justify-between py-8">
        <div>
          <div className="px-8 mb-10">
            <h2 className="text-xl font-bold tracking-tight text-[#C49B55]">Acelia Admin</h2>
          </div>
          
          <nav className="space-y-1 pr-0">
            <SidebarItem icon={LayoutDashboard} label="Dashboard" />
            <SidebarItem icon={Package} label="Order" active />
            <SidebarItem icon={BarChart3} label="Statistic" />
            <SidebarItem icon={ShoppingBag} label="Product" />
            <SidebarItem icon={Archive} label="Stock" />
            <SidebarItem icon={Gift} label="Offer" />
          </nav>
        </div>

        <div className="px-8 flex gap-4 text-[#C49B55] text-xs font-bold">
          <span className="cursor-pointer hover:text-white">FB</span>
          <span className="cursor-pointer hover:text-white">TW</span>
          <span className="cursor-pointer hover:text-white">LI</span>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-x-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-3xl font-bold text-[#2D2D2D]">Orders</h1>
              <p className="text-sm font-medium text-[#C49B55]">28 records found</p>
            </div>
            <div className="hidden lg:flex items-center bg-white rounded-full px-4 py-2 border border-[#F2EBE1] shadow-sm">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input type="text" placeholder="Search orders..." className="bg-transparent outline-none text-sm text-[#2D2D2D]" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell className="w-6 h-6 text-[#2D2D2D]" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C49B55] rounded-full border-2 border-[#F7F3EE]" />
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-[#F2EBE1]">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-[#2D2D2D]">Richard T.</p>
                <p className="text-xs text-[#C49B55]">Administrator</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#2D2D2D] border-2 border-[#C49B55] flex items-center justify-center text-[#F7F3EE] font-bold">
                RT
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Actions */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex gap-8 border-b border-[#F2EBE1] w-full lg:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold transition-all ${
                  activeTab === tab
                    ? "text-[#C49B55] border-b-2 border-[#C49B55]"
                    : "text-slate-400 hover:text-[#2D2D2D]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-[#F2EBE1] shadow-sm text-sm font-bold text-[#2D2D2D]">
            <Calendar className="w-4 h-4 text-[#C49B55]" />
            <span>31 Jul 2020 — 03 Aug 2020</span>
          </div>
        </div>

        {/* Custom Table Container */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-[#F2EBE1] overflow-hidden">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-[#C49B55] uppercase text-[10px] tracking-[0.15em] font-black border-b border-[#F7F3EE]">
                <th className="p-6">ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
                <th className="pr-6 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#F7F3EE]">
              {orders.map((order) => {
                const selected = selectedRow === order.id;

                return (
                  <tr
                    key={order.id}
                    onClick={() => setSelectedRow(order.id)}
                    className={`group cursor-pointer transition-all ${
                      selected
                        ? "bg-[#2D2D2D] text-[#F7F3EE] scale-[1.01] shadow-2xl z-20"
                        : "hover:bg-[#F2EBE1]/30"
                    }`}
                  >
                    <td className="p-6 font-bold">{order.id}</td>
                    <td className="font-bold">{order.name}</td>
                    <td className="opacity-70">{order.address}</td>
                    <td className="opacity-70">{order.date}</td>
                    <td className="font-bold text-[#C49B55]">{order.price}</td>
                    <td>
                      <StatusBadge status={order.status} selected={selected} />
                    </td>
                    <td className="pr-6 text-right">
                      <button className={`p-2 rounded-lg ${selected ? 'bg-[#C49B55] text-[#2D2D2D]' : 'bg-[#F2EBE1] text-[#2D2D2D]'}`}>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between p-8 bg-[#F2EBE1]/10">
            <p className="text-sm font-bold text-slate-400">
              Showing <span className="text-[#2D2D2D]">06–12</span> of 28
            </p>

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl border border-[#F2EBE1] hover:bg-white transition-colors">
                <ChevronLeft className="w-4 h-4 text-[#2D2D2D]" />
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                    n === 1 ? "bg-[#C49B55] text-[#2D2D2D]" : "hover:bg-white text-slate-400"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button className="p-2 rounded-xl border border-[#F2EBE1] hover:bg-white transition-colors">
                <ChevronRight className="w-4 h-4 text-[#2D2D2D]" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Updated UI Helpers */

function SidebarItem({ icon: Icon, label, active }: { icon: any; label: string; active?: boolean }) {
  return (
    <div className="relative pl-8 pr-4">
      <div
        className={`flex items-center gap-4 py-4 px-6 transition-all duration-300 ${
          active
            ? "bg-[#F7F3EE] text-[#2D2D2D] rounded-l-[2rem] font-bold shadow-[-10px_0_0_0_#C49B55]"
            : "text-[#F7F3EE]/60 hover:text-white"
        } cursor-pointer`}
      >
        <Icon className={`w-5 h-5 ${active ? "text-[#C49B55]" : ""}`} />
        <span className="text-sm tracking-wide">{label}</span>
      </div>
      
      {/* Concave Corner Effects for Active State */}
      {active && (
        <>
          <div className="absolute -top-6 right-0 w-6 h-6 bg-[#F7F3EE] before:content-[''] before:absolute before:inset-0 before:bg-[#2D2D2D] before:rounded-br-[2rem]" />
          <div className="absolute -bottom-6 right-0 w-6 h-6 bg-[#F7F3EE] before:content-[''] before:absolute before:inset-0 before:bg-[#2D2D2D] before:rounded-tr-[2rem]" />
        </>
      )}
    </div>
  );
}

function StatusBadge({ status, selected }: { status: OrderStatus; selected: boolean }) {
  const isPending = status === "Pending";
  const isDispatch = status === "Dispatch";

  return (
    <span 
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
        selected 
          ? "bg-[#C49B55] text-[#2D2D2D]" 
          : isPending 
            ? "bg-red-50 text-red-600" 
            : isDispatch 
              ? "bg-green-50 text-green-600" 
              : "bg-slate-100 text-slate-600"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${selected ? "bg-[#2D2D2D]" : "bg-current"}`} />
      {status}
    </span>
  );
}