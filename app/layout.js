"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <ParallaxProvider>

          <Navbar />

          {children}

        </ParallaxProvider>

      </body>
    </html>
  );
}