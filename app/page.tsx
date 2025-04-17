


import NavigationBar from "@/components/NavigationBar";
import React from "react";
import HeroSection from "./components/HeroSection";
import InterestsSection from "./components/InterestsSection";

const RootPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar />
      <HeroSection />
      <InterestsSection />
    </div>
  );
};

export default RootPage;