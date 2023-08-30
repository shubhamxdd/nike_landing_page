"use client";

import { Nav } from "@/components";
import "./globals.css";
import { useState } from "react";



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
