import { Code } from "lucide-react";
import React, { useState } from "react";

const education = [
  {
    title: "Graduation",
    institution: "XYZ University",
    duration: "2018 - 2022",
    description:
      "Bachelor's degree in Computer Science. Developed a comprehensive ERP solution integrating finance, human resources, supply chain, and customer relationship management modules. Implemented microservices architecture with real-time analytics and machine learning-powered predictive insights.",
    achievements: [
      "Graduated with honors (GPA: 3.8)",
      "Led a team for final year project on ERP systems",
      "Successfully implemented real-time analytics in a microservices environment",
    ],
    image: "https://via.placeholder.com/800x400?text=University+Image", // Placeholder image
  },
  {
    title: "12th Grade",
    institution: "ABC School",
    duration: "2016 - 2018",
    description:
      "Science stream with specialization in Mathematics and Computer Science. Participated in several national level competitions and successfully applied theoretical knowledge into practical projects.",
    achievements: [
      "Top 5% of the class",
      "Winner of the State-Level Mathematics Competition",
      "Developed a personal website as a project in Computer Science",
    ],
    image: "https://via.placeholder.com/800x400?text=School+Image", // Placeholder image
  },
  {
    title: "10th Grade",
    institution: "ABC School",
    duration: "2014 - 2016",
    description:
      "Completed the standard curriculum with a focus on foundational sciences, mathematics, and English. Participated in extracurricular activities like science fairs and sports events.",
    achievements: [
      "Ranked in the top 10% of the class",
      "Won 1st place in school science fair for an innovative project on renewable energy",
    ],
    image: "https://via.placeholder.com/800x400?text=School+Image", // Placeholder image
  },
];

const Education = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center gap-4">
        <Code /> Education
      </h2>
      <div className="flex flex-col bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        {/* Tabs: Education Levels */}
        <div className="bg-gray-800 flex w-full">
          {education.map((edu, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`flex-1 text-center px-6 py-4 border-b-2 transition-colors relative ${
                selectedTab === index
                  ? "text-purple-500 border-purple-500"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {edu.title}
              {selectedTab === index && (
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-1 bg-purple-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700"></div>

        {/* Tab Content: Education Details */}
        <div className="relative">
          {/* Image as Background */}
          <div
            className="group relative w-full h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url(${education[selectedTab].image})`,
            }}
          >
            {/* Hover Effects and Details (Visible only on large screens) */}
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition duration-300 lg:block hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6 space-y-4 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-x-10 group-hover:translate-x-0">
                  <div className="text-left space-y-4">
                    <h3 className="text-3xl font-semibold">{education[selectedTab].title}</h3>
                    <p className="text-lg">
                      <strong>Institution:</strong> {education[selectedTab].institution}
                    </p>
                    <p className="text-lg">
                      <strong>Duration:</strong> {education[selectedTab].duration}
                    </p>
                    <p className="text-lg">{education[selectedTab].description}</p>
                    <div>
                      <h4 className="text-lg font-semibold">Achievements</h4>
                      <ul className="list-disc list-inside">
                        {education[selectedTab].achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content (Visible Always on Mobile and Tablets) */}
          <div className="lg:hidden text-white p-6 space-y-4">
            <h3 className="text-3xl font-semibold">{education[selectedTab].title}</h3>
            <p className="text-lg">
              <strong>Institution:</strong> {education[selectedTab].institution}
            </p>
            <p className="text-lg">
              <strong>Duration:</strong> {education[selectedTab].duration}
            </p>
            <p className="text-lg">{education[selectedTab].description}</p>
            <div>
              <h4 className="text-lg font-semibold">Achievements</h4>
              <ul className="list-disc list-inside">
                {education[selectedTab].achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
