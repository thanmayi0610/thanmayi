
  "use client";
import Image from "next/image";
import {
  FaMusic,
  FaBook,
  FaCamera,
  FaCode,
  FaFilm,
  FaPodcast,
  FaUtensils,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";
import Container from "./Container";
const interests = [
  { icon: <FaGlobe className="text-pink-500 text-2xl" />, label: "Surfing Internet" },
  { icon: <FaMusic className="text-blue-400 text-2xl" />, label: "Listening to Music" },
  { icon: <FaPodcast className="text-yellow-400 text-2xl" />, label: "Listening to Podcast" },
  { icon: <FaBook className="text-purple-500 text-2xl" />, label: "Reading Books" },
  { icon: <FaCamera className="text-pink-500 text-2xl" />, label: "Photography" },
  { icon: <FaUtensils className="text-red-400 text-2xl" />, label: "Cooking" },
  { icon: <FaFilm className="text-cyan-500 text-2xl" />, label: "Watching Movies" },
  { icon: <FaCode className="text-yellow-400 text-2xl" />, label: "Coding" },
  { icon: <FaLaptopCode className="text-orange-500 text-2xl" />, label: "New Technology" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
    //   className="w-full min-h-screen dark:bg-black flex flex-col px-8 py-8"
    // className="w-full min-h-screen dark:bg-black px-4 sm:px-8 py-8"
    className="w-full min-h-screen dark:bg-black px-4 sm:px-8 py-8"
    
    >
        <Container>
            <h2 className="text-xl font-bold tracking-widest mb-6">
    ABOUT ME{" "}
    <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
  </h2>

        
      {/* Top - About Me Section */}
      {/* <div className="flex flex-col lg:flex-row items-center justify-between"> */}
      {/* <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between"> */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
      

        {/* Left - Image */}
        {/* <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"> */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          {/* <img
            src="/developer.jpg"
            alt="Profile"
            style={{ height: "450px",width: "950px" }}
            className="rounded-lg max-w-xs md:max-w-sm"
          /> */}
          <img
  src="/developer.jpg"
  alt="Profile"
  style={{ height: "450px", width: "950px" }}
  className="rounded-lg max-w-xs md:max-w-sm"
/>
        </div>

        {/* Right - Text Content */}
        {/* <div className="w-full lg:w-1/2 space-y-4"> */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Fullstack Developer
          </h1>
          <p className="text-lg">I develop features... and unexpected bugs😅</p>
          <p>
            Hello! I'm currently pursuing a degree in{" "}
            <span className="text-yellow-300 font-semibold">
              Bachelor of Engineering in Information Science
            </span>{" "}
            from Siddaganga Institute Of Technology. I'm a curious and keen
            learner, always eager to explore new technologies and concepts.
          </p>
          <p>
            Right now, I'm gaining hands-on experience through an internship at
            <span className="text-yellow-300 font-semibold"> Stack Lane</span>{" "}
            <span className="text-yellow-300 font-semibold">by Purple Shorts</span>, where I'm learning how real-world software development works and sharpening my technical skills.
          </p>
          <p>
            My future goal is to become a skilled Software Engineer, building
            solutions that make a real impact. This field continuously inspires
            me to dive deeper, grow my knowledge, and work towards a successful
            and fulfilling career.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              📅 Age: <span className="text-yellow-300">23.137749130 years</span>
            </div>
            <div>
              🎓 Degree: <span className="text-yellow-300">CSE Undergrad</span>
            </div>
            <div>🌐 Website: You're already here!</div>
            <div>
              📧 Email:{" "}
              <span className="text-yellow-300">thanmayithanmayi81@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold tracking-widest mb-6">
          INTERESTS{" "}
          <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
        </h2>
      {/* Bottom - Interests Section */}
      <div className="mt-20 px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-neutral rounded-xl p-4 shadow-md hover:scale-105 transition-all duration-300"
            >
              {item.icon}
              <span className="text-white font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
};

export default HeroSection;
