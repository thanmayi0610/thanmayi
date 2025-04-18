


import NavigationBar from "@/components/NavigationBar";
import React from "react";
import HeroSection from "./components/HeroSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";


const RootPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default RootPage;