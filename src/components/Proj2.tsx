import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "lucide-react";
import { useRef } from "react";
import profileData from "../data";

const { projects } = profileData;

const Card = ({ project }: any) => {
  return (
    <div className="flex-shrink-0 w-full max-w-lg rounded-xl">
      <div className="bg-gray-800 p-6 space-y-4 flex flex-col justify-center relative">
        <h3 className="text-3xl font-semibold text-purple-400 border-b border-gray-700 pb-2">
          {project?.title}
        </h3>
        <p className="text-gray-300 leading-relaxed">{project?.description}</p>
        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-2">
            Project Impact
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {project?.impact.map((impact: any, index: number) => (
              <li key={index}>{impact}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {project?.technologies.map((tech: any, index: number) => (
            <span
              key={index}
              className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project?.githubLink}
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors mt-4"
        >
          <Link className="mr-2" /> Check out
        </a>
      </div>
    </div>
  );
};

export default Card;
