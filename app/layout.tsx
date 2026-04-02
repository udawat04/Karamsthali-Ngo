import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/common/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Aasha — Empowering Communities, Inspiring Change",
  description:
    "We bring people together to challenge injustice, amplify unheard voices, and drive collective action that addresses inequality, defends human rights, and builds a more inclusive world.",
};

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
