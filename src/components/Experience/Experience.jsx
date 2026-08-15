import { motion } from "framer-motion";
import { experiences } from "../../utils/constants";

export const Experience = () => {
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
      id="experience"
      className="py-24 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans relative overflow-hidden bg-gradient-to-b from-[#000428] to-black border-t border-white/[0.02]"
    >
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#6366F1]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>

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
            <span className="text-[#6366F1] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">Career</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#6366F1]">EXPERIENCE</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-2xl text-center text-base sm:text-lg leading-[1.8]">
            A curated overview of my professional experience and the roles I have held across different organizations.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {experiences.map((experience) => (
            <motion.div
              variants={itemVariants}
              key={experience.id}
              className="bg-[#0A0A12]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 
                         hover:bg-[#10101C] hover:border-[#6366F1]/30 hover:-translate-y-1 
                         transition-all duration-300 ease-out flex flex-col h-full shadow-lg shadow-black/20 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)] group"
            >
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-4 items-center">
                  {experience.img && (
                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#C084FC]/10 flex items-center justify-center border border-[#6366F1]/20 p-2 group-hover:border-[#6366F1]/50 transition-colors duration-300">
                       <img src={experience.img} alt={experience.company} className="w-full h-full object-contain rounded-md opacity-100" />
                     </div>
                  )}
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-100 tracking-tight">
                      {experience.role}
                    </h3>
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#C084FC] font-medium text-sm mt-0.5">
                      {experience.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Date (Clean Metadata) */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse"></span>
                <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                  {experience.date}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-[1.7] mb-8 flex-grow">
                {experience.desc}
              </p>
              
              {/* Skills */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-md py-1 px-2.5 text-xs text-[#818CF8] font-medium 
                                 group-hover:bg-[#6366F1]/20 group-hover:text-white group-hover:border-[#6366F1]/40 transition-all duration-300 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
