"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";

const birthDate = new Date("2003-08-06T00:00:00");

const calculateAge = () => {
  const now = new Date();
  const diff = now.getTime() - birthDate.getTime();
  const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25);
  return ageInYears;
};

const AboutSection = () => {
  const [age, setAge] = useState<number | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const updateAge = () => setAge(calculateAge());
    updateAge();
    const interval = setInterval(updateAge, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="About" className="w-full px-4 sm:px-8 py-8">
      <Container>
        <h2 className="text-xl font-bold tracking-widest mb-6">
          ABOUT ME <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <Image
              src="/developer.jpg"
              alt="Profile"
              width={950}
              height={450}
              className="rounded-lg max-w-xs md:max-w-sm"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
              Fullstack Developer
            </h1>
            <p className="text-lg text-indent-8">I develop features... and unexpected bugs😅</p>
            <p className="text-indent-8">
              Hello! I&apos;m currently pursuing a degree in{" "}
              <span className="text-yellow-300 font-semibold">
                Bachelor of Engineering in Information Science
              </span>{" "}
              from Siddaganga Institute Of Technology. I&apos;m a curious and keen
              learner, always eager to explore new technologies and concepts.
            </p>
            <p className="text-indent-8">
              Right now, I&apos;m gaining hands-on experience through an internship at
              <span className="text-yellow-300 font-semibold"> Stack Lane</span>{" "}
              <span className="text-yellow-300 font-semibold">by Purple Shorts</span>, where I&apos;m learning how real-world software development works and sharpening my technical skills.
            </p>
            <p className="text-indent-8">
              My future goal is to become a skilled Software Engineer, building
              solutions that make a real impact. This field continuously inspires
              me to dive deeper, grow my knowledge, and work towards a successful
              and fulfilling career.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                📅 Age:{" "}
                <span className="text-yellow-300">
                  {age !== null ? `${age.toFixed(9)} years` : "Calculating..."}
                </span>
              </div>
              <div>
                🎓 Degree: <span className="text-yellow-300">CSE Undergrad</span>
              </div>
              <div>🌐 Website: You&apos;re already here!</div>
              <div>
                📧 Email:{" "}
                <span className="text-yellow-300">thanmayithanmayi81@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
