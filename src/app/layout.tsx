import type { Metadata } from "next";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tunji Babajide",
  description: "Marriage counselling and relationship therapy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1A1612] text-white antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
