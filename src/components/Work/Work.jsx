import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../utils/constants";

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section
      id="work"
      className="py-24 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans relative overflow-hidden bg-gradient-to-b from-[#000428] to-black border-t border-white/[0.05]"
    >
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#6366F1]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1] bg-transparent mb-6">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse shadow-[0_0_8px_#14B8A6]"></span>
            <span className="text-[#6366F1] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">Portfolio</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#6366F1]">PROJECTS</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-2xl text-center text-base sm:text-lg leading-[1.8]">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              variants={itemVariants}
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="bg-[#0A0A12]/80 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden
                         hover:bg-[#10101C] hover:border-[#6366F1]/30 hover:-translate-y-2 
                         transition-all duration-300 ease-out flex flex-col h-full shadow-lg shadow-black/20 
                         hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent opacity-80" />
                
                {/* View Project Overlay */}
                <div className="absolute inset-0 bg-[#6366F1]/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="bg-white text-[#0A0A12] font-bold px-4 py-2 rounded-full text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     View Project
                   </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-100 tracking-tight mb-3 group-hover:text-[#818CF8] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-md py-1 px-2.5 text-xs text-[#818CF8] font-medium shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0A0A12] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.2)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-[#6366F1] text-white rounded-full transition-colors border border-white/10"
              >
                <span className="text-xl leading-none">&times;</span>
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 bg-[#05050B] flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 relative group">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover md:object-contain max-h-[40vh] md:max-h-none"
                />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                  {selectedProject.title}
                </h3>
                
                <div className="w-12 h-1 bg-gradient-to-r from-[#818CF8] to-[#6366F1] mb-6 rounded-full"></div>

                <p className="text-gray-400 text-sm sm:text-base leading-[1.8] mb-8">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-md py-1.5 px-3 text-xs sm:text-sm text-[#818CF8] font-medium shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5">
                  <a
                    href={selectedProject.webapp || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED]
                               text-white py-3 px-6 rounded-xl text-center font-semibold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                  >
                    View Live Site
                  </a>
                  <a
                    href={selectedProject.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-transparent border border-white/10 hover:border-white/30 hover:bg-white/5
                               text-gray-300 py-3 px-6 rounded-xl text-center font-semibold transition-all"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
