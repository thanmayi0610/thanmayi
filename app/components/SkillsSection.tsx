// import { SiMicrosoftazure, SiJava, SiVisualstudiocode } from "react-icons/si";
// import { SiAzure, SiJava, SiVscode } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { VscAzure } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import {
    SiC,
    SiCplusplus,
    SiDocker,
    
    SiNpm,
    SiHtml5,
    SiCss3,
    SiPython,
    
    SiJavascript,
    SiGit,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiTypescript,
    SiPostman,
    SiJupyter,
    
    SiMysql,
    SiPostgresql,
  } from 'react-icons/si';
import Container from "./Container";
  
  const techSkills = [
    { name: 'C', icon: <SiC size={24} /> },
    { name: 'C++', icon: <SiCplusplus size={24} /> },
    { name: 'Docker', icon: <SiDocker size={24} /> },
    { name: 'Azure', icon: <VscAzure size={24} /> },
    { name: 'npm', icon: <SiNpm size={24} /> },
    { name: 'HTML', icon: <SiHtml5 size={24} /> },
    { name: 'CSS', icon: <SiCss3 size={24} /> },
    { name: 'Python', icon: <SiPython size={24} /> },
    { name: 'Java', icon: <FaJava  size={24} /> },
    { name: 'JavaScript', icon: <SiJavascript size={24} /> },
    { name: 'Git', icon: <SiGit size={24} /> },
    { name: 'ReactJS', icon: <SiReact size={24} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={24} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={24} /> },
    { name: 'TypeScript', icon: <SiTypescript size={24} /> },
    { name: 'Postman', icon: <SiPostman size={24} /> },
    { name: 'Jupyter Notebook', icon: <SiJupyter size={24} /> },
    { name: 'VS Code', icon: <VscVscode size={24} /> },
    { name: 'MySQL', icon: <SiMysql size={24} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={24} /> },
  ];
  
  export default function SkillsSection() {
    return (
      <section id="skills" className="py-20 ">
        <Container>
        <h2 className="text-xl font-bold tracking-widest mb-6">
        SKILLS{" "}
        <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
      </h2>
        <div className="max-w-6xl mx-auto px-4">
          {/* <h2 className="text-3xl font-semibold tracking-wide mb-8 flex items-center">
            TECH-INTERESTS
            <span className="ml-4 w-24 h-[2px] bg-yellow-500 inline-block"></span>
          </h2> */}
          <div className="flex flex-wrap gap-4">
            {techSkills.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2  px-4 py-2 rounded-lg border border-yellow-900 hover:scale-105 transition"
              >
                {tech.icon}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        </Container>
      </section>
    );
  }
  