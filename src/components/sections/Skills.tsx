import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code } from "lucide-react";

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillImages = [
    { name: "TypeScript", image: "/src/images/ts.webp" },
    { name: "Tailwind CSS", image: "/src/images/tailwind.webp" },
    { name: "React", image: "/src/images/react.webp" },
    { name: "Python", image: "/src/images/python.webp" },
    { name: "Node.js", image: "/src/images/node-js.webp" },
    { name: "Next.js", image: "/src/images/next.webp" },
    { name: "MongoDB", image: "/src/images/mongodb.webp" },
    { name: "MySQL", image: "/src/images/mysql.webp" },
    { name: "JavaScript", image: "/src/images/js.webp" },
    { name: "HTML", image: "/src/images/html.webp" },
    { name: "GitHub", image: "/src/images/github1.webp" },
    { name: "Git", image: "/src/images/git.webp" },
    { name: "CSS", image: "/src/images/CSS.webp" },
    { name: "MS Office", image: "/src/images/ms office.webp" },
    { name: "Three.js", image: "/src/images/threejs.png" },
  ];

  // Arrange skills in pyramid rows
  const pyramidRows = [
    skillImages.slice(0, 1), // 1 item
    skillImages.slice(1, 3), // 2 items
    skillImages.slice(3, 6), // 3 items
    skillImages.slice(6, 10), // 4 items
    skillImages.slice(10, 16), // 6 items
  ];

  return (
    <section id="skills" className="py-24 min-h-screen">
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
            <Code className="inline mr-2" size={18} /> My Skills
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Technical <span className="text-indigo-400">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-3xl mx-auto text-lg"
          >
            Here are the technologies and tools I work with to bring ideas to
            life.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center gap-12"
        >
          {pyramidRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={itemVariants}
              className="flex justify-center gap-8 md:gap-12"
            >
              {row.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.5, y: 50 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, -5, 0],
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  className="group relative cursor-pointer"
                >
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 relative"
                    whileHover={{
                      filter: "drop-shadow(0 0 12px rgba(79,70,229,0.5))",
                    }}
                  >
                    <motion.img
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      initial={{
                        filter: "drop-shadow(0 0 8px rgba(79,70,229,0.3))",
                      }}
                      whileHover={{
                        filter: "drop-shadow(0 0 12px rgba(79,70,229,0.5))",
                      }}
                    />
                  </motion.div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <span className="text-indigo-300 px-4 py-2 text-sm font-medium whitespace-nowrap drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
