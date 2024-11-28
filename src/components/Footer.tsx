import { FileText, Github, Linkedin, Lock, Mail, ShieldCheck } from "lucide-react";

const Footer = () => {
    const socialLinks = [
      {
        name: "GitHub",
        icon: <Github size={24} />,
        link: "#",
        color: "hover:text-gray-200",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin size={24} />,
        link: "#",
        color: "hover:text-blue-400",
      },
      {
        name: "Email",
        icon: <Mail size={24} />,
        link: "#",
        color: "hover:text-red-400",
      },
    ];
  
    const footerLinks = [
      { name: "Resume", icon: <FileText size={20} />, link: "#" },
      { name: "Privacy Policy", icon: <Lock size={20} />, link: "#" },
      { name: "Terms of Service", icon: <ShieldCheck size={20} />, link: "#" },
    ];
  
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Social Links Column */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">
                Connect
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`text-gray-400 ${social.color} transition-colors`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
  
            {/* Quick Links Column */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">
                Quick Links
              </h4>
              <div className="space-y-2">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="flex items-center text-gray-300 hover:text-purple-300 transition-colors gap-2"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
  
            {/* Contact Information Column */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">
                Contact
              </h4>
              <p className="text-gray-300 mb-2">Ahmedabad, Gujarat, India</p>
              <p className="text-gray-300">kamlesh@techuz.com</p>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
            © 2024 Full Stack Developer Portfolio. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;