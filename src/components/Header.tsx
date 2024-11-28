import { Briefcase, Code, Home, Send, User, Menu, X, Book, Linkedin, Github, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://linkedin.com" },
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com" },
    { name: "Email", icon: <Mail size={20} />, url: "mailto:example@example.com" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-40 shadow-md transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
          Kamlesh
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => window.open(item.url, "_blank")}
              className="flex items-center text-gray-300 hover:text-green-400 transition-all gap-2"
            >
              {item.icon}
              {item.name}
            </button>
          ))}
          {/* Contact Button */}
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                window.open(item.url, "_blank");
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-green-400 transition-all text-lg"
            >
              {item.icon}
              {item.name}
            </button>
          ))}
          {/* Contact Button */}
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-transform"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
