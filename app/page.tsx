


import NavigationBar from "@/components/NavigationBar";
import React from "react";
import HeroSection from "./components/HeroSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";


const RootPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
     
    </div>
  );
};

export default RootPage;