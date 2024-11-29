import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6 h-[100vh]">
      <h1 className="text-5xl font-bold mt-[-100px]">
        Hi, I'm{" "}
        <code className="text-transparent bg-clip-text bg-[#00ad42]">
          Kamlesh Mundel
        </code>
        , <br />
        Full Stack Developer
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Innovative software engineer with a passion for building scalable,
        high-performance distributed systems. Specializing in creating robust
        web applications that solve complex business challenges through
        cutting-edge technology.
      </p>
      <div className="flex justify-center pt-4">
        <button
          onClick={handleScroll}
          className="relative w-14 h-24 pt-4 flex items-center justify-center rounded-full border-2 border-green-500 bg-transparent text-green-500 hover:text-green-700 hover:border-green-700 transition-all transform hover:scale-110 group"
        >
          <ArrowDown size={28} className="animate-bounce" />
          <span className="absolute inset-0 rounded-full border-2 border-green-500 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
