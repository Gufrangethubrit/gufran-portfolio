import { motion } from "framer-motion";
import { education } from "../../utils/constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans relative overflow-hidden bg-gradient-to-b from-[#000428] to-black border-t border-white/[0.05]"
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
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-20 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1] bg-transparent mb-6">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse shadow-[0_0_8px_#14B8A6]"></span>
            <span className="text-[#6366F1] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">Academics</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#6366F1]">EDUCATION</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-2xl text-center text-base sm:text-lg leading-[1.8]">
            My education has been a journey of learning and development. Here are the details of my academic background.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#6366F1]/30 to-transparent -translate-x-1/2" />

          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col lg:flex-row items-center mb-4 lg:mb-8 ${
                  isLeft ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Center Timeline Dot (Desktop) */}
                <div
                  className="hidden lg:flex absolute left-1/2 w-12 h-12 bg-[#0A0A12] border-2 border-[#6366F1]/50 rounded-full items-center justify-center z-10 -translate-x-1/2 shadow-[0_0_20px_rgba(99,102,241,0.3)] p-1.5"
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full rounded-full object-cover opacity-90"
                  />
                </div>

                {/* Card */}
                <div
                  className={`relative w-full lg:w-[45%] bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-2xl border border-white/[0.05] rounded-3xl p-6 sm:p-8 
                             hover:from-white/[0.06] hover:to-white/[0.02] hover:border-white/[0.15] hover:-translate-y-1 hover:scale-[1.02]
                             transition-all duration-500 ease-out flex flex-col shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_16px_48px_0_rgba(99,102,241,0.2)] group overflow-hidden`}
                >
                  {/* Subtle Top Inner Glow on Hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex gap-4 items-center">
                      {/* Mobile Logo */}
                      <div className="lg:hidden w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#C084FC]/10 flex items-center justify-center border border-[#6366F1]/20 p-2 group-hover:border-[#6366F1]/50 transition-colors duration-300 shrink-0">
                        <img src={edu.img} alt={edu.school} className="w-full h-full object-contain rounded-md" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                          {edu.degree}
                        </h3>
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#C084FC] font-semibold text-sm mt-1">
                          {edu.school}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Metadata (Date & Grade) */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse"></span>
                      <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                        {edu.date}
                      </span>
                    </div>
                    <div className="h-3 w-[1px] bg-white/10 hidden sm:block"></div>
                    <div className="bg-[#6366F1]/15 border border-[#6366F1]/30 rounded-md py-1 px-2.5 text-[11px] text-[#A5B4FC] font-bold tracking-wider">
                      GRADE: {edu.grade}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#94A3B8] text-sm md:text-base leading-[1.8] font-light">
                    {edu.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
