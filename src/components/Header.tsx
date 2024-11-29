import { Briefcase, Code, Home, Send, User, Menu, X, Book, Linkedin, Github, Mail, Download } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com" },
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com" },
    { name: "Email", icon: <Mail size={20} />, url: "mailto:example@example.com" },
  ];

  return (
    <header className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-md z-40 shadow-md transition-all duration-300 rounded-full px-6 py-4 flex justify-between items-center space-x-4 w-fit">
      {/* Logo */}
      <div className="text-xl font-bold text-transparent bg-clip-text bg-[#00ad42]">
        Kamlesh
      </div>

      {/* Navigation */}
      <nav className="flex space-x-4 items-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => window.open(item.url, "_blank")}
            className="flex items-center text-gray-300 hover:text-green-400 transition-all gap-2"
          >
            {item.icon}
          </button>
        ))}
        {/* Contact Button */}
        <button
          onClick={() => {}}
          className="flex gap-2 px-4 py-2 bg-[#00ad42] text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform"
        >
          Resume <Download />
        </button>
      </nav>
    </header>
  );
};

export default Header;
