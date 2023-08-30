"use client";

import { Nav } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Nike",
  description: "Nike store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      </body>
    </html>
  );
}
