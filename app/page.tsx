


import NavigationBar from "@/components/NavigationBar";
import React from "react";
import HeroSection from "./components/HeroSection";

const RootPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar />
      <HeroSection />
    </div>
  );
};

export default RootPage;