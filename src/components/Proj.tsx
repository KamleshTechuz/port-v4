import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

const Card = ({ project }: any) => {
  return (
    <div className="flex-shrink-0 w-full">
      <div className="p-6 space-y-4 flex flex-col justify-center relative rounded-lg">
        <div className="flex flex-col lg:flex-row gap-12 w-full h-full">
          {/* Adjust height as needed */}
          <div className="flex flex-col gap-10 w-full lg:w-1/2">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-semibold text-green-400">
                <code>{project?.title}</code>
              </h3>
              <a
                href={`/projects/${project?.id}`} // Replace with dynamic routing logic if needed
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                Visit
                <SquareArrowOutUpRight className="ml-2" size={20} />
              </a>
            </div>
            <div>
              <code>{project?.description}</code>
            </div>
            <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2">
            <code className="text-2xl">Technologies</code>
            <div className="flex flex-wrap gap-4">
              {project?.technologies.map((tch: string, i: number) => (
                <code
                  className="rounded-full py-2 px-4 bg-gradient-to-r from-green-500 to-green-700"
                  key={i}
                >
                  {tch}
                </code>
              ))}
            </div>
          </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={project.images[0]}
              alt={project?.title}
              className="inset-0 w-full rounded-lg shadow-lg"
              style={{ zIndex: 3, transform: "translateY(0px)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
