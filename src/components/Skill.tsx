import { CloudCog, Code, Container, Database, DatabaseIcon, GitBranch, Lock, Network, Server } from "lucide-react";
import React from "react";

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
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Technical Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-full hover:scale-110 transition-transform gap-2"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
