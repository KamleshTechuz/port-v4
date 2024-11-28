import { Code, Link } from "lucide-react";
import { useState } from "react";
import profileData from "../data";

const { projects } = profileData;

const Proj = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center gap-4">
        <Code /> Highlighted Projects
      </h2>
      <div className="flex md:flex-row flex-col bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        {/* Left Side: Project List */}
        <div className="bg-gray-800 md:w-1/3 flex-shrink-0">
          <h3 className="text-lg font-bold text-purple-400 p-4 border-b border-gray-700">
            Explore to know more
          </h3>
          <div className="relative">
            <div className="absolute h-full w-2 bg-purple-500 left-0 top-0"></div>
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left px-6 py-4 border-b border-gray-700 pl-8 transition-colors relative ${
                  selectedProject === project
                    ? "bg-purple-600 text-white shadow-inner"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                {project.title}
                {selectedProject === project && (
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Project Details */}
        <div className="bg-gray-800 md:w-2/3 p-6 space-y-4 flex flex-col justify-center relative">
          <div className="absolute top-0 left-0 w-2 bg-purple-500 h-full"></div>
          <h3 className="text-3xl font-semibold text-purple-400 border-b border-gray-700 pb-2">
            {selectedProject.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {selectedProject.description}
          </p>
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-2">
              Project Impact
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {selectedProject.impact.map((impact, index) => (
                <li key={index}>{impact}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedProject.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={selectedProject.githubLink}
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors mt-4"
          >
            <Link className="mr-2" /> Check out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proj;
