import { Code, Link } from "lucide-react";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import profileData from "../data";

const { projects } = profileData;

const Proj = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="space-y-8 overflow-x-hidden">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center gap-4">
        <Code /> Highlighted Projects
      </h2>
      
      <div className="relative w-full overflow-hidden">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-full max-w-lg rounded-lg"
            >
              <div className="bg-gray-800 p-6 space-y-4 flex flex-col justify-center relative">
                <h3 className="text-3xl font-semibold text-purple-400 border-b border-gray-700 pb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">
                    Project Impact
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {project.impact.map((impact, index) => (
                      <li key={index}>{impact}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors mt-4"
                >
                  <Link className="mr-2" /> Check out
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Proj;