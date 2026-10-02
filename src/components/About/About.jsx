/** @format */

import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaCode, FaProjectDiagram, FaAward } from "react-icons/fa";
import profileImage from "../../assets/Gufran-best2-rbg.png";
import cvFile from "../../assets/cv2.pdf";

export const About = () => {
  return (
    <section
      id="about"
      className="about-section seamless-section relative overflow-hidden pb-[150px] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans pt-32 md:pt-40 lg:pt-48"
    >

      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* ── LEFT: Premium 3D Floating Image ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-[45%] flex justify-center"
        >
          <div className="about-img-scene">

            {/* ── Layered ambient glow orbs ── */}
            <div className="about-orb about-orb-1" />
            <div className="about-orb about-orb-2" />
            <div className="about-orb about-orb-3" />

            {/* ── Spinning rings ── */}
            <div className="about-ring about-ring-1" />
            <div className="about-ring about-ring-2" />
            <div className="about-ring about-ring-3" />

            {/* ── 3D Globe Swipe Hover Group ── */}
            <div className="about-globe-group">
              <Tilt
                className="about-tilt-wrap"
                tiltMaxAngleX={14}
                tiltMaxAngleY={14}
                perspective={800}
                scale={1.05}
                transitionSpeed={1600}
                gyroscope={true}
              >
                <div className="about-photo-wrap">
                  {/* Floor shadow */}
                  <div className="about-floor-shadow" />
                  {/* Under-body glow */}
                  <div className="about-figure-glow" />
                  {/* Photo */}
                  <img
                    src={profileImage}
                    alt="Gufran Ansari"
                    className="about-photo"
                    draggable={false}
                  />
                  {/* Sheen sweep */}
                  <div className="about-sheen" />
                </div>
              </Tilt>

              {/* Circular glow ring that pulses on hover */}
              <div className="about-hover-ring" />
            </div>

            {/* ── Floating badges ── */}
            <div className="about-badge about-badge-exp animate-[about-float_4s_ease-in-out_infinite]">
              <span className="about-badge-num">1+</span>
              <span className="about-badge-label">Year Exp.</span>
            </div>
            <div className="about-badge about-badge-proj animate-[about-float_4s_ease-in-out_infinite_1.5s]">
              <span className="about-badge-num">20+</span>
              <span className="about-badge-label">Projects</span>
            </div>

            {/* ── Floating dot particles ── */}
            <span className="about-dot about-dot-1" />
            <span className="about-dot about-dot-2" />
            <span className="about-dot about-dot-3" />
            <span className="about-dot about-dot-4" />
            <span className="about-dot about-dot-5" />
          </div>
        </motion.div>

        {/* ── RIGHT: Content ───────────────────────────────────── */}
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
                text={["MERN Stack Developer", "NextJS Developer"]}
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
              Passionate <strong className="text-white font-medium">MERN Stack Developer</strong> with
              industry experience at Axsem Softwares Pvt. Ltd. Skilled in building scalable and
              responsive full-stack web applications using{" "}
              <span className="text-[#14B8A6]">MongoDB</span>,{" "}
              <span className="text-[#818CF8]">Express.js</span>,{" "}
              <span className="text-[#61DAFB]">React.js</span>, and{" "}
              <span className="text-[#68A063]">Node.js</span>. Experienced in developing Admin
              Panels, dashboards, RESTful APIs, authentication systems, and real-time features.
              Committed to writing clean, maintainable code and delivering high-quality solutions.
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
              href={cvFile}
              download="Gufran_Ansari_CV.pdf"
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
