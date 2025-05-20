import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, User, Briefcase, Code, Mail } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Skills", href: "#skills", icon: <Code size={18} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/_luckyyy_03/",
      icon: (
        <img
          src="/src/images/instagram.svg"
          alt="Instagram"
          className="w-5 h-5"
        />
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <img
          src="/src/images/facebook.svg"
          alt="Facebook"
          className="w-5 h-5"
        />
      ),
    },
    {
      name: "Discord",
      href: "https://discord.com",
      icon: (
        <img src="/src/images/discord.svg" alt="Discord" className="w-5 h-5" />
      ),
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-white font-bold text-xl flex items-center"
        >
          <span className="ml-1">Portfolio</span>
        </a>

        {/* Center Navigation Box */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-slate-800/50 backdrop-blur-md px-8 py-3 rounded-full border border-slate-700/50 shadow-lg">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center transition-colors"
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <ul className="hidden md:flex space-x-6">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white flex items-center py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-700">
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
