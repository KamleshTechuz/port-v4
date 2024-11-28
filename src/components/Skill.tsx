"use client";
import { CloudCog, Code, Container, Database, DatabaseIcon, GitBranch, Lock, Network, Server } from "lucide-react";
import React from "react";
import { useParallax } from "react-scroll-parallax";

const skillsData = [
  { name: "React", icon: <Code className="text-blue-400" /> },
  { name: "Node.js", icon: <Server className="text-green-400" /> },
  { name: "TypeScript", icon: <Code className="text-blue-600" /> },
  { name: "GraphQL", icon: <Network className="text-pink-500" /> },
  { name: "Docker", icon: <Container className="text-blue-500" /> },
  { name: "Kubernetes", icon: <CloudCog className="text-blue-700" /> },
  { name: "AWS", icon: <CloudCog className="text-orange-500" /> },
  { name: "MongoDB", icon: <DatabaseIcon className="text-green-600" /> },
  { name: "Redis", icon: <Database className="text-red-500" /> },
  { name: "Terraform", icon: <Lock className="text-purple-500" /> },
  { name: "CI/CD", icon: <GitBranch className="text-indigo-400" /> },
  { name: "Microservices", icon: <Network className="text-teal-500" /> },
];

const Skill = () => {
  const parallax = useParallax<HTMLDivElement>({
    rotate: [0, 360],
  });

  const parallax2 = useParallax<HTMLDivElement>({
    rotate: [360, 0],
  });

  const firstCircleSkills = skillsData.slice(0, 5);
  const secondCircleSkills = skillsData.slice(5);

  const renderCircle = (skills: typeof skillsData, radious = 100) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className="absolute flex items-center bg-purple-600 text-white px-4 py-2 rounded-full hover:scale-110 transition-transform gap-2"
        style={{
          transform: `rotate(${(360 / skills.length) * index}deg) translateX(${radious}px)`,
        }}
      >
        {skill.icon}
        {/* <span>{skill.name}</span> */}
      </div>
    ));
  };

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Technical Skills
      </h2>
      <div className="relative w-72 h-72 mx-auto">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          {/* First Circle */}
          <div
            className="relative w-full h-full flex justify-center items-center"
            ref={parallax.ref}
          >
            {renderCircle(firstCircleSkills)}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          {/* Second Circle */}
          <div className="relative w-full h-full flex justify-center items-center" ref={parallax2.ref}>
            {renderCircle(secondCircleSkills, 200)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
