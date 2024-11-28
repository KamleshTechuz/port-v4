import { Code } from "lucide-react";
import React from "react";
import profileData from "../data";

const { educations } = profileData;

const Education = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center gap-4">
        <Code /> Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-400">
              {edu.institution}
            </h3>
            <div className="text-sm text-gray-400 mb-2">
              {edu.grade} • {edu.duration}
            </div>
            <p className="text-gray-300 text-sm italic mb-4">
              {edu.fieldOfStudy}
            </p>
            <p className="text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
