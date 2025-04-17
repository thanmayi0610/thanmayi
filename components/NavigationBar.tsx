"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NavigationBar = () => {
  return (
    <div className="py-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left side: Styled Name */}
        <div className="text-2xl font-bold font-[cursive]">
          &lt; <span className="italic">Thanmayi J R</span> /&gt;
        </div>

        {/* Right side: Nav + Toggle */}
        <nav className="flex items-center gap-8 text-sm md:text-base font-medium">
          {/* <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link> */}
          <a href="#home" className="hover:text-blue-600 transition">
  Home
</a>

          <Link href="/education" className="hover:text-blue-600 transition">
            Education
          </Link>
          <Link href="/experience" className="hover:text-blue-600 transition">
            Experience
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          {/* <Link href="/open-source" className="hover:text-blue-600 transition">
            Open Source
          </Link> */}
          <Link
            href="/contact"
            className="font-bold text-blue-800 dark:text-white"
          >
            Contact Me
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
