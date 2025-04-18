
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
  import { FaJava } from 'react-icons/fa';
  import { VscVscode, VscAzure } from 'react-icons/vsc';
  import Container from "./Container";
  
  const techSkills = [
    { name: 'C', icon: <SiC size={20} /> },
    { name: 'C++', icon: <SiCplusplus size={20} /> },
    { name: 'Docker', icon: <SiDocker size={20} /> },
    { name: 'Azure', icon: <VscAzure size={20} /> },
    { name: 'npm', icon: <SiNpm size={20} /> },
    { name: 'HTML', icon: <SiHtml5 size={20} /> },
    { name: 'CSS', icon: <SiCss3 size={20} /> },
    { name: 'Python', icon: <SiPython size={20} /> },
    { name: 'Java', icon: <FaJava size={20} /> },
    { name: 'JavaScript', icon: <SiJavascript size={20} /> },
    { name: 'Git', icon: <SiGit size={20} /> },
    { name: 'ReactJS', icon: <SiReact size={20} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={20} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={20} /> },
    { name: 'TypeScript', icon: <SiTypescript size={20} /> },
    { name: 'Postman', icon: <SiPostman size={20} /> },
    { name: 'Jupyter Notebook', icon: <SiJupyter size={20} /> },
    { name: 'VS Code', icon: <VscVscode size={20} /> },
    { name: 'MySQL', icon: <SiMysql size={20} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={20} /> },
  ];
  
  export default function SkillsSection() {
    return (
      <section id="skills" className="py-20 ">
        <Container>
          <h2 className="text-xl font-bold tracking-widest mb-6">
            SKILLS{" "}
            <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techSkills.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2  px-4 py-2 rounded-lg border border-yellow-800 hover:scale-105 transition shadow-md"
              >
                {tech.icon}
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }
  