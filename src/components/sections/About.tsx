import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Rocket, MapPin } from "lucide-react";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  return (
    <section id="about" className="py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[300px] mx-auto"
          >
            <div className="aspect-square rounded-full overflow-hidden relative border-4 border-indigo-500/30 shadow-xl shadow-indigo-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 z-10" />
              <img
                src="/src/images/profile_2.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              variants={itemVariants}
              className="inline-block bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-lg mb-4"
            >
              <User className="inline mr-2" size={18} /> About Me
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              <span className="text-indigo-400">Hello!, I'm Lakshit</span>
              <br />
              <span className="text-white-400">Full Stack Developer</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-6 text-lg leading-relaxed"
            >
              Full-Stack Developer with a passion for building clean, responsive
              web applications. Skilled in both frontend and backend
              development, with a focus on creating efficient, user-friendly
              solutions and writing maintainable code.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-8 text-lg leading-relaxed"
            >
              My career goal is to continue pushing the boundaries of what's
              possible on the web, creating innovative solutions that make a
              positive impact. I'm constantly learning new technologies and
              techniques to expand my skillset.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            ></motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                Get In Touch
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
