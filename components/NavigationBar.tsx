"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NavigationBar = () => {
  return (
    // <div className="py-6 shadow-sm">
    <div className="py-6 shadow-sm sticky top-0 z-50 bg-base-100">

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
<a href="#Education" className="hover:text-blue-600 transition">
  Education
</a>
          
<a href="#skills" className="hover:text-blue-600 transition">
  Skills
</a>
<a href="#Experience" className="hover:text-blue-600 transition">
Experience
</a>
<a href="#Projects" className="hover:text-blue-600 transition">
Projects
</a>    
<a href="#Contact" className="hover:text-blue-600 transition">
Contact Me
</a>      
         
         
          <ThemeToggle />
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
