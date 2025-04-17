// components/InterestsSection.tsx
import { FaMusic, FaBook, FaCamera, FaCode, FaFilm, FaPodcast, FaUtensils, FaGlobe, FaLaptopCode } from "react-icons/fa";

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

export default function InterestsSection() {
  return (
    <section className="mt-20 px-4">
      <h2 className="text-xl font-bold tracking-widest mb-6">
        INTERESTS <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
      </h2>
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
    </section>
  );
}
