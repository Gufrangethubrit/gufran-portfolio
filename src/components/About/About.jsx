/** @format */

import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaCode, FaProjectDiagram, FaAward } from "react-icons/fa";
import profileImage from "../../assets/Gufran-best2-rbg.png";

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-[150px] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans pt-32 md:pt-40 lg:pt-48 bg-gradient-to-b from-[#000428] to-black"
    >
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Image Visuals (Common in About sections) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[45%] flex justify-center relative"
        >
          {/* Abstract glowing elements behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#6366F1]/30 via-[#8B5CF6]/20 to-transparent rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-[60px] -z-10 animate-pulse"></div>
          
          <Tilt
            className="relative z-10 w-[280px] h-[340px] sm:w-[350px] sm:h-[420px] md:w-[400px] md:h-[480px]"
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            gyroscope={true}
          >
            {/* Glassmorphism Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-0"></div>
            
            {/* Image Container */}
            <div className="absolute inset-[6px] sm:inset-[10px] bg-gradient-to-b from-[#0A0D1C] to-[#12162B] rounded-[2.2rem] overflow-hidden border border-[#6366F1]/20">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#6366F1]/20 to-transparent pointer-events-none z-10"></div>
              <img
                src={profileImage}
                alt="Gufran Ansari"
                className="w-full h-full object-cover object-top scale-[1.02] transition-transform duration-700 hover:scale-[1.08]"
              />
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-gradient-to-br from-[#12162B] to-[#0A0D1C] border border-[#6366F1]/30 p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-md animate-[float_4s_ease-in-out_infinite]">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#6366F1]">1+</span>
                <span className="text-[#94A3B8] text-xs sm:text-sm font-medium tracking-wider uppercase mt-1">Year Exp.</span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Right Side: Editorial Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 mb-6 backdrop-blur-md">
            <FaCode className="text-[#A78BFA]" />
            <span className="text-[#A78BFA] uppercase tracking-[0.2em] text-xs font-bold">Discover More</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-3">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#A78BFA]">Me</span>
          </h2>
          
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex flex-wrap justify-center lg:justify-start gap-2">
            <span className="text-white">Hi, I am Gufran Ansari, a</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#0D9488]">
              <ReactTypingEffect
                text={[
                  "MERN Stack Developer",
                  "NextJS Developer",
                ]}
                speed={80}
                eraseSpeed={40}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#14B8A6]">{cursor}</span>
                )}
              />
            </span>
          </h3>

          <div className="relative mb-8">
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed text-justify lg:text-left">
              Passionate <strong className="text-white font-medium">MERN Stack Developer</strong> with industry experience at Axsem Softwares Pvt. Ltd. Skilled in building scalable and responsive full-stack web applications using <span className="text-[#14B8A6]">MongoDB</span>, <span className="text-[#818CF8]">Express.js</span>, <span className="text-[#61DAFB]">React.js</span>, and <span className="text-[#68A063]">Node.js</span>. Experienced in developing Admin Panels, dashboards, RESTful APIs, authentication systems, and real-time features. Committed to writing clean, maintainable code and delivering high-quality solutions.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 w-full mb-10">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-white/10 hover:border-[#6366F1]/30">
              <div className="w-12 h-12 rounded-xl bg-[#6366F1]/20 flex items-center justify-center text-[#818CF8]">
                <FaProjectDiagram size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-lg">20+</span>
                <span className="text-[#94A3B8] text-xs uppercase tracking-wider">Projects</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-white/10 hover:border-[#8B5CF6]/30">
              <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center text-[#A78BFA]">
                <FaAward size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-lg">100%</span>
                <span className="text-[#94A3B8] text-xs uppercase tracking-wider">Commitment</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://drive.google.com/file/d/16ia13UOmloen3AYGle4z5pi-JjoeBJXE/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] border border-white/10 hover:-translate-y-1"
            >
              <FaDownload className="group-hover:-translate-y-1 transition-transform" />
              <span>Download CV</span>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-[#E2E8F0] transition-all duration-300 rounded-xl bg-transparent border-2 border-[#6366F1]/50 hover:bg-[#6366F1]/10 hover:border-[#6366F1] backdrop-blur-md hover:text-white shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:-translate-y-1"
            >
              <FaEnvelope />
              <span>Contact Me</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
