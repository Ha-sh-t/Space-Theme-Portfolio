import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "bamaniyalakshit@gmail.com",
      link: "mailto:bamaniyalakshit@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 86909 37390",
      link: "tel:+918690937390",
    },
  ];

  return (
    <section id="contact" className="py-24 min-h-screen">
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
            <Mail className="inline mr-2" size={18} /> Contact Me
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Get In <span className="text-indigo-400">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-3xl mx-auto text-lg"
          >
            I'm currently available for freelance work or full-time positions.
            If you have a project that you want to get started or have any
            questions, feel free to reach out.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-8"
            >
              Contact Information
            </motion.h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                variants={itemVariants}
                className="flex items-start p-6 rounded-lg bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-colors"
              >
                <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-lg mr-4">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    {info.title}
                  </h4>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-3 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold text-white mb-6"
            >
              Send Me a Message
            </motion.h3>

            <form className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-slate-700/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-slate-700/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-slate-700/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                  placeholder="How can I help you?"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="bg-slate-700/50 border border-slate-600 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
                  placeholder="Let me know how I can help..."
                  required
                ></textarea>
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 text-white font-medium rounded-lg text-sm px-5 py-4 transition-colors flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
