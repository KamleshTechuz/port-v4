import { Briefcase } from "lucide-react";
import React from "react";
import { images } from "@/app/assets";
import Image from "next/image";

const experiences = [
  {
    company: "Techuz Infoweb PVT LTD",
    logo: images.techuz,
    role: "Full Stack Developer",
    duration: "Jan 2022 - Present",
    location: "Ahmedabad, Gujarat, India",
    responsibilities: [
      "Architected scalable microservices infrastructure for enterprise-level applications",
      "Led cross-functional agile development teams of 12+ engineers",
      "Implemented advanced CI/CD pipelines with 99.99% deployment reliability",
      "Developed comprehensive technical documentation and architectural blueprints",
    ],
    technologies: ["AWS", "React", "Angular", "NodeJs", "MySQL"],
  },
];

const Exp = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center gap-4">
        <Briefcase /> Professional Experience
      </h2>
      <div className="space-y-8">
        {experiences.length === 1 ? (
          // Single experience centered
          <div
            className="bg-gray-800 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform mx-auto max-w-4xl"
          >
            <div className="flex flex-col items-center mb-6 md:flex-row md:justify-between md:items-center">
              <div className="mr-6 mb-4 md:mb-0">
                <Image
                  src={experiences[0].logo}
                  alt={`${experiences[0].company} logo`}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-purple-400">
                  {experiences[0].role} | {experiences[0].company}
                </h3>
                <p className="text-gray-400">
                  {experiences[0].duration} | {experiences[0].location}
                </p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              {experiences[0].responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {experiences[0].technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : (
          // Layout for multiple experiences
          experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-2xl transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center mb-6">
                <div className="mr-6">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400">
                    {exp.role} | {exp.company}
                  </h3>
                  <p className="text-gray-400">
                    {exp.duration} | {exp.location}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Exp;
