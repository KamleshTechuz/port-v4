import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

const Card = ({ project }: any) => {
  return (
    <div className="flex-shrink-0 w-full max-w-xl rounded-lg">
      <div className="bg-gray-800 p-6 space-y-4 flex flex-col justify-center relative rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-green-400">
            <code>{project?.title}</code>
            
          </h3>
          <a
            href={`/projects/${project?.id}`} // Replace with dynamic routing logic if needed
            className="flex items-center text-green-400 hover:text-green-300 transition-colors"
          >
            Know More
            <SquareArrowOutUpRight className="ml-2" size={20} />
          </a>
        </div>
        <div className="relative w-full h-80"> {/* Adjust height as needed */}
          <Image
            src={project.images[0]}
            alt={project?.title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            style={{ zIndex: 3, transform: "translateY(0px)" }}
          />
          <Image
            src={project.images[1]}
            alt={project?.title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
            style={{ zIndex: 2, transform: "translateY(20px)" }}
          />
          <Image
            src={project.images[2]}
            alt={project?.title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-sm"
            style={{ zIndex: 1, transform: "translateY(40px)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
