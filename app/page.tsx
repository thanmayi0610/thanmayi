


import NavigationBar from "@/components/NavigationBar";
import React from "react";

import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/Footer";
import InterestsSection from "./components/InterestsSection";
import AboutSection from "./components/AboutSection";


const RootPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <InterestsSection />
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default RootPage;