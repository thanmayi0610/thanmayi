// import { FaGithub } from "react-icons/fa";
// import { PiGlobeHemisphereWest } from "react-icons/pi";
// import Container from "./Container";
// type Project = {
//   title: string;
//   description: string;
//   githubUrl?: string;
//   liveUrl?: string;
//   pypiUrl?: string;
//   private?: boolean;
// };

// const projects: Project[] = [
//   {
//     title: "Batcat",
//     description:
//       "Batcat is a Discord bot that handles server moderation and manages spam control.",
//     githubUrl: "https://github.com/yourusername/batcat",
//   },
//   {
//     title: "GradesCalculator",
//     description:
//       "A package to calculate an average with different weights for each grade.",
//     githubUrl: "https://github.com/yourusername/gradescalculator",
//     pypiUrl: "https://pypi.org/project/gradescalculator",
//   },
//   {
//     title: "FamilyGroupDraw",
//     description:
//       "Simple web app to draw names among multiple groups, preventing members of the same group drawing each other.",
//     githubUrl: "https://github.com/yourusername/familygroupdraw",
//     liveUrl: "https://familygroupdraw.vercel.app",
//   },
//   {
//     title: "node-ChatApp",
//     description:
//       "A chat application built with Node.js and WebSocket.",
//     githubUrl: "https://github.com/yourusername/node-chatapp",
//   },
//   {
//     title: "Portfolio",
//     description:
//       "My personal portfolio website built with React.",
//     private: true,
//   },
//   {
//     title: "347 projet",
//     description:
//       "Web app built with Docker Compose, Flask backend, MongoDB and React frontend.",
//     githubUrl: "https://github.com/yourusername/347-projet",
//   },
// ];

// export default function ProjectsSection() {
//   return (
//     <section id="Projects" className="py-16 px-4 bg-gradient-to-r ">
//         <Container>
//         <h2 className="text-xl font-bold tracking-widest mb-6">
//             PROJECTS{" "}
//             <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
//           </h2>
//       <div className="max-w-7xl mx-auto text-center">
        
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg p-6 text-center transition-transform hover:scale-105"
//             >
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-600 mb-4">{project.description}</p>
//               <div className="flex justify-center gap-4 items-center flex-wrap">
//                 {project.liveUrl && (
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-teal-600 hover:underline flex items-center gap-1"
//                   >
//                     <PiGlobeHemisphereWest size={20} />
//                     View website
//                   </a>
//                 )}
//                 {project.githubUrl && (
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-teal-600 hover:underline flex items-center gap-1"
//                   >
//                     <FaGithub size={20} />
//                     View on GitHub
//                   </a>
//                 )}
//                 {project.pypiUrl && (
//                   <a
//                     href={project.pypiUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-teal-600 hover:underline flex items-center gap-1"
//                   >
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Pypi_logo.svg" alt="PyPI" className="h-5" />
//                     View on PyPI
//                   </a>
//                 )}
//                 {project.private && (
//                   <span className="text-gray-400 flex items-center gap-1">
//                     <FaGithub size={20} />
//                     Private Repository
//                   </span>
//                 )}
//               </div>
//               {project.private && (
//                 <span className="inline-block mt-4 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full">
//                   Private
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       </Container>
//     </section>
//   );
// }
import { FaGithub } from "react-icons/fa";
import { PiGlobeHemisphereWest } from "react-icons/pi";
import Container from "./Container";

type Project = {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  pypiUrl?: string;
  private?: boolean;
};

const projects: Project[] = [
  {
    title: "HackerNews Server Backend",
    description:
      "A scalable TypeScript based backend for a social news platform which includes user authentication, posts, comments, and likes. Deployed it by implementing the CI/CD pipelines in Azure.",
    githubUrl: "https://github.com/thanmayi0610/hackernews-server",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and experiences built with Next.js and tailwindCSS.",
    githubUrl: "https://github.com/thanmayi0610/thanmayi",
    
  },
  {
    title: "Hono-Website-Clone",
    description:
      "A responsive clone of the Hono website, replicating its design and layout for learning and development purposes.",
    githubUrl: "https://github.com/thanmayi0610/copper",
   
  },
  {
    title: "An Application to Detect Plant Disease and Remedies",
    description: "A machine learning-based system using image recognition for early crop disease detection, offering real-time monitoring and actionable solutions for sustainable farming.",
    
  },
  {
    title: "Sorting Visualizer",
    description: "A web-based sorting visualizer that interactively demonstrates Merge, Bubble, Selection, Insertion, and Quick Sort algorithms to enhance understanding of their operations and efficiency.",
    
  },
  {
    title: "IPL Score Prediction",
    description:
      "Developed a machine learning model to predict IPL scores in live matches using Python, leveraging historical data, player stats, and real-time match conditions.",
    
  },
];

export default function ProjectsSection() {
  return (
    <section id="Projects" className="py-16 px-4">
      <Container>
        <h2 className="text-xl font-bold tracking-widest mb-6 ">
          PROJECTS{" "}
          <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral rounded-xl p-4 shadow-md hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-3 text-sm">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <PiGlobeHemisphereWest size={18} />
                    View website
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <FaGithub size={18} />
                    View on GitHub
                  </a>
                )}
                {project.pypiUrl && (
                  <a
                    href={project.pypiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:underline flex items-center gap-1"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Pypi_logo.svg"
                      alt="PyPI"
                      className="h-4"
                    />
                    View on PyPI
                  </a>
                )}
                {project.private && (
                  <span className="text-gray-400 flex items-center gap-1">
                    <FaGithub size={18} />
                    Private Repository
                  </span>
                )}
              </div>
              {project.private && (
                <span className="inline-block mt-4 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Private
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
