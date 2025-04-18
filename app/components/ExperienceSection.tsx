
  import Container from "./Container";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Fullstack Developer Intern",
      company: "StackLane",
      duration: "2025",
      description: "Currently learning Fullstack Development.",
    },
    // Add more roles here if needed
  ];

  return (
    <section id="Experience" className="py-20">
      <Container>
        <h2 className="text-xl font-bold tracking-widest mb-6">
          EXPERIENCE{" "}
          <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-2xl p-6 shadow-md min-h-[120px]"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-lg text-white font-semibold">{exp.role}</h3>

                {/* Updated pill with yellowish-orange color */}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-medium px-2 py-1 rounded-full">
                  {exp.company}
                </span>

                <span className="bg-gray-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  {exp.duration}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
