import { motion } from "framer-motion";
import { SkillsInfo } from "../../utils/constants";

export const Skills = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section 
      id='skills' 
      className='py-24 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans relative overflow-hidden bg-gradient-to-b from-[#000428] to-black border-t border-white/[0.02]'
    >
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#6366F1]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='flex flex-col items-center mb-16'
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1] bg-transparent mb-6">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse shadow-[0_0_8px_#14B8A6]"></span>
            <span className="text-[#6366F1] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">Capabilities</span>
          </div>

          <h2 className='text-3xl md:text-5xl font-bold text-white text-center tracking-tight'>
            Technologies I <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#6366F1]">Work With</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-2xl text-center text-base sm:text-lg leading-[1.8]">
            A curated list of modern tools, frameworks, and technologies I use to build scalable and beautiful digital experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'
        >
          {SkillsInfo.map((category) => (
            <motion.div
              variants={itemVariants}
              key={category.title}
              className='bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08] rounded-2xl p-6 sm:p-8 
                         shadow-[0_8px_32px_rgba(99,102,241,0.15)] 
                         hover:-translate-y-1 hover:border-[#6366F1]/40 
                         transition-all duration-300 ease-out group relative overflow-hidden'
            >
              {/* Subtle inner highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <h3 className='text-xl font-bold text-white mb-6 flex items-center gap-4 relative z-10'>
                <div className="w-10 h-10 rounded-xl bg-[#6366F1]/15 flex items-center justify-center border border-white/[0.08] group-hover:border-[#6366F1]/30 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#818CF8] to-[#6366F1]"></div>
                </div>
                {category.title}
              </h3>

              <div className='flex flex-wrap gap-3 sm:gap-4 relative z-10'>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className='flex items-center gap-2.5 bg-[#0A0A12] border border-white/[0.08] rounded-full py-2 px-3 sm:px-4
                               hover:border-[#6366F1]/50 hover:bg-white/[0.02] 
                               transition-all duration-300 cursor-default'
                  >
                    <div className='w-5 h-5 flex items-center justify-center group-hover/skill:scale-110 transition-transform duration-300'>
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <span className='text-[13px] sm:text-[14px] text-[#94A3B8] font-medium'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
