import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, ExternalLink, Github, Code } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  github,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group rounded-xl overflow-hidden bg-slate-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 1,
        },
      }}
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70" />

        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900/80 rounded-full hover:bg-indigo-600 transition-colors"
            aria-label="View GitHub Repository"
          >
            <Github size={20} className="text-white" />
          </a>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      title: "Music Player",
      description:
        "A feature-rich music player inspired by Spotify, built entirely in JavaScript. Features include playlist management, volume control, track navigation, and smooth playback experience. Handles 100+ songs with optimal performance.",
      image: "/src/images/music-player.jpg",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Lakshit-003/Music_player",
    },
    {
      title: "Online Code Compiler",
      description:
        "A real-time online code editor similar to CodePen, supporting HTML, CSS, and JavaScript. Features include instant live preview, multiple code themes, dark/light mode toggle, and responsive design for both desktop and mobile devices.",
      image: "/src/images/onlineCode.png",
      technologies: ["React.js", "JavaScript", "HTML", "Tailwind CSS"],
      github: "https://github.com/Lakshit-003/Online_Code_Compiler",
    },
    {
      title: "Space Theme Portfolio",
      description:
        "A modern, space-themed portfolio website featuring interactive 3D elements and smooth animations. Built with Three.js for immersive space backgrounds, includes particle effects, responsive design, and smooth scrolling. Features a dynamic skill pyramid and project showcase with hover effects.",
      image:
        "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: [
        "React.js",
        "TypeScript",
        "Three.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
      github: "https://github.com/Lakshit-003/portfolio",
    },
  ];

  return (
    <section id="projects" className="py-24 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-lg mb-4"
          >
            <Briefcase className="inline mr-2" size={18} /> My Projects
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Featured <span className="text-indigo-400">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-3xl mx-auto text-lg"
          >
            Here are some of my recent projects. Each one has presented unique
            challenges and opportunities for growth and learning.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Project {...project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <a
            href="https://github.com/Lakshit-003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-indigo-400 text-indigo-300 hover:bg-indigo-600/10 rounded-lg transition-colors"
          >
            <Code size={20} className="mr-2" />
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
