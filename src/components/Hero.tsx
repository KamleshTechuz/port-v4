import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold">
        Hi, I'm <code className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Kamlesh Mundel</code>, <br />Full Stack Developer
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Innovative software engineer with a passion for building scalable,
        high-performance distributed systems. Specializing in creating robust
        web applications that solve complex business challenges through
        cutting-edge technology.
      </p>
      <div className="flex justify-center space-x-6 pt-4">
        <a
          href="#"
          className="text-white hover:text-green-400 transition-colors"
        >
          <Github size={32} />
        </a>
        <a
          href="#"
          className="text-white hover:text-green-400 transition-colors"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="#"
          className="text-white hover:text-green-400 transition-colors"
        >
          <Mail size={32} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
