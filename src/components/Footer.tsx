import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              Portfolio
            </h3>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Lakshit-003"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshitbamaniya/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/BamaniyaLakshit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:bamaniyalakshit@gmail.com"
              className="bg-slate-800 p-3 rounded-full hover:bg-indigo-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
