// app/(admin)/layout.tsx
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F7FF] text-slate-900">
      {children}
    </div>
  );
}
