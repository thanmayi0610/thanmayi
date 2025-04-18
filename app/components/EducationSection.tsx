

"use client";
import Container from "./Container";
const EducationSection = () => {
  return (
    <section id="Education" className="py-12 px-6 md:px-16">
        <Container>
      <h2 className="text-xl font-bold tracking-widest mb-6">
        EDUCATION{" "}
        <span className="border-b-2 border-yellow-400 ml-2 inline-block w-12" />
      </h2>
      <div className="relative border-l-4 border-yellow-500 pl-6 space-y-12">
        {/* B.Tech */}
        <div className="relative">
          <div className="absolute -left-4 top-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
          <h3 className="text-xl font-bold text-yellow-400">
            BACHELOR OF ENGINEERING – INFORMATION SCIENCE
          </h3>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-yellow-500 mt-1 mb-2 inline-block">
            2021 – 2025
          </span>
          <p>Siddaganga Institute Of Technology</p>
          <p className="mt-1">CGPA: 8.58</p>
        </div>

        {/* HSC */}
        <div className="relative">
          <div className="absolute -left-4 top-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
          <h3 className="text-xl font-bold text-yellow-400">
            2nd PUC
          </h3>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-yellow-500 mt-1 mb-2 inline-block">
            2019 – 2021
          </span>
          <p>Vikas PU College </p>
          <p className="mt-1">
            <span className="font-semibold">Specialization:</span> PCMB
          </p>
          <p>Score: 93.83%</p>
        </div>

        {/* SSLC */}
        <div className="relative">
          <div className="absolute -left-4 top-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
          <h3 className="text-xl font-bold text-yellow-400">
            SECONDARY SCHOOL (SSLC)
          </h3>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-yellow-500 mt-1 mb-2 inline-block">
            2018 – 2019
          </span>
          <p>Sri Siddaganga Silver Jubilee High School</p>
          <p>Score: 93.12%</p>
        </div>
      </div>
      </Container>
    </section>
  );
};

export default EducationSection;
