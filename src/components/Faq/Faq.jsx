import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaChevronDown, FaCode, FaMobileAlt, FaComments, FaTools, FaProjectDiagram } from "react-icons/fa";
import profileImg from "../../assets/Gufran-best2-rbg.png";
import mongoLogo from "../../assets/tech_logo/mongodb.png";
import expressLogo from "../../assets/tech_logo/express.png";
import reactLogo from "../../assets/tech_logo/reactjs.png";
import nodeLogo from "../../assets/tech_logo/nodejs.png";

const faqData = [
  {
    icon: FaCode,
    question: "What technologies do you specialize in?",
    answer: "I specialize in the MERN stack — MongoDB, Express.js, React.js, and Node.js. I also have strong proficiency in TypeScript, Redux Toolkit, Next.js, Tailwind CSS, and integrating third-party services like Cloudinary and payment gateways.",
  },
  {
    icon: FaProjectDiagram,
    question: "Do you build custom Admin Panels and ERPs?",
    answer: "Yes! I have extensive experience building complex, role-based Admin Panels and comprehensive ERP systems from scratch, focusing on scalable architecture, secure JWT authentication, and responsive UI.",
  },
  {
    icon: FaTools,
    question: "Can you help optimize or fix an existing web application?",
    answer: "Absolutely. I can dive into existing codebases to fix bugs, improve performance, integrate new APIs, or revamp the user interface using modern best practices.",
  },
  {
    icon: FaMobileAlt,
    question: "Are your web applications mobile-friendly?",
    answer: "Every application I build is 100% responsive and optimized for a seamless experience across all devices — desktops, tablets, and smartphones.",
  },
  {
    icon: FaComments,
    question: "How do you handle project communication and updates?",
    answer: "I believe in clear, consistent communication. I provide regular progress updates, actively seek feedback during milestones, and ensure we're always aligned on project goals.",
  },
];

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      className="seamless-section py-24 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans relative overflow-hidden"
    >
      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>
      <div className="absolute top-1/3 left-[-15%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#6366F1]/8 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-[-10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#8B5CF6]/8 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1]/40 bg-[#6366F1]/5 mb-6 backdrop-blur-sm">
            <FaQuestionCircle className="text-[#818CF8] text-xs" />
            <span className="text-[#818CF8] uppercase tracking-[0.2em] text-xs font-bold">Queries</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#6366F1]">Questions</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-xl text-center text-base sm:text-lg leading-[1.8]">
            Common questions about my expertise, services, and how I work.
          </p>
        </motion.div>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* LEFT — Portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[490px] sm:min-h-[530px] lg:min-h-[560px] group"
            style={{
              background: "linear-gradient(160deg, #0d0f1f 0%, #0a0a14 60%, #050508 100%)",
            }}
          >
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#6366F1]/35 transition-colors duration-500 z-20 pointer-events-none" />

            {/* Ambient glow orb behind portrait */}
            <div className="absolute bottom-[22%] sm:bottom-[18%] left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-[#6366F1]/20 blur-[80px] pointer-events-none z-0" />
            <div className="absolute bottom-[22%] sm:bottom-[18%] left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[#8B5CF6]/15 blur-[50px] pointer-events-none z-0" />

            {/* Decorative ring */}
            <div
              className="absolute bottom-[18%] sm:bottom-[14%] left-1/2 -translate-x-1/2 w-48 sm:w-56 h-48 sm:h-56 rounded-full border border-[#6366F1]/20 pointer-events-none z-10"
              style={{ boxShadow: "0 0 40px rgba(99,102,241,0.12) inset" }}
            />

            {/* ── MERN Floating Icons ── */}
            {/* MongoDB — top left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 sm:top-6 left-3 sm:left-5 z-10 flex flex-col items-center gap-1 sm:gap-1.5"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <img src={mongoLogo} alt="MongoDB" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
              </div>
              <span className="text-[8px] sm:text-[9px] font-semibold text-[#4DB33D]/90 uppercase tracking-wider bg-black/40 px-1.5 sm:px-2 py-0.5 rounded-full backdrop-blur-sm border border-[#4DB33D]/25">MongoDB</span>
            </motion.div>

            {/* Express — top right */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-4 sm:top-6 right-3 sm:right-5 z-10 flex flex-col items-center gap-1 sm:gap-1.5"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <img src={expressLogo} alt="Express" className="w-5 h-5 sm:w-7 sm:h-7 object-contain brightness-0 invert opacity-80" />
              </div>
              <span className="text-[8px] sm:text-[9px] font-semibold text-white/70 uppercase tracking-wider bg-black/40 px-1.5 sm:px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/15">Express</span>
            </motion.div>

            {/* React — mid left (positioned higher on mobile to prevent overlap) */}
            <motion.div
              animate={{ y: [0, -7, 0], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-[23%] sm:top-[36%] left-3 sm:left-4 z-10 flex flex-col items-center gap-1 sm:gap-1.5"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#61DAFB]/10 backdrop-blur-md border border-[#61DAFB]/25 flex items-center justify-center shadow-[0_4px_20px_rgba(97,218,251,0.2)]">
                <img src={reactLogo} alt="React" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
              </div>
              <span className="text-[8px] sm:text-[9px] font-semibold text-[#61DAFB]/90 uppercase tracking-wider bg-black/40 px-1.5 sm:px-2 py-0.5 rounded-full backdrop-blur-sm border border-[#61DAFB]/25">React</span>
            </motion.div>

            {/* Node.js — mid right (positioned higher on mobile to prevent overlap) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-[23%] sm:top-[36%] right-3 sm:right-4 z-10 flex flex-col items-center gap-1 sm:gap-1.5"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#68A063]/10 backdrop-blur-md border border-[#68A063]/25 flex items-center justify-center shadow-[0_4px_20px_rgba(104,160,99,0.2)]">
                <img src={nodeLogo} alt="Node.js" className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
              </div>
              <span className="text-[8px] sm:text-[9px] font-semibold text-[#68A063]/90 uppercase tracking-wider bg-black/40 px-1.5 sm:px-2 py-0.5 rounded-full backdrop-blur-sm border border-[#68A063]/25">Node.js</span>
            </motion.div>

            {/* Portrait — transparent PNG */}
            <img
              src={profileImg}
              alt="Gufran Ansari"
              className="absolute bottom-[22%] sm:bottom-[18%] left-1/2 -translate-x-1/2 w-[76%] sm:w-[85%] max-w-[230px] sm:max-w-[280px] object-contain select-none"
              style={{
                filter:
                  "drop-shadow(0 8px 32px rgba(99,102,241,0.55)) drop-shadow(0 2px 12px rgba(139,92,246,0.35))",
              }}
              draggable={false}
            />

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-[40%] sm:h-[44%] bg-gradient-to-t from-black/90 via-black/55 to-transparent z-10 pointer-events-none" />

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20">
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                <span className="text-green-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">Available for work</span>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white mb-1">Have a project in mind?</h3>
              <p className="text-[#94A3B8] text-xs leading-relaxed mb-3 sm:mb-4">Let's build seamless, scalable web applications.</p>
              <div className="flex gap-5 pt-3 sm:pt-4 border-t border-white/10">
                {[{ v: "20+", l: "Projects" }, { v: "1+", l: "Yrs Exp" }, { v: "100%", l: "Commit" }].map(s => (
                  <div key={s.l} className="flex flex-col">
                    <span className="text-[#818CF8] font-bold text-sm sm:text-base leading-none">{s.v}</span>
                    <span className="text-[#64748B] text-[9px] sm:text-[10px] mt-1 uppercase tracking-wider">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;
              const Icon = faq.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isActive
                      ? "border-[#6366F1]/50 bg-gradient-to-br from-[#0F1229]/95 to-[#080A14]/95 shadow-[0_8px_40px_rgba(99,102,241,0.18)]"
                      : "border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full flex items-center gap-4 p-5 sm:p-6 text-left focus:outline-none group/btn"
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-[#6366F1] shadow-[0_0_20px_rgba(99,102,241,0.4)]" : "bg-white/5 group-hover/btn:bg-[#6366F1]/15"
                    }`}>
                      <Icon className={`text-sm transition-colors duration-300 ${isActive ? "text-white" : "text-[#6366F1]"}`} />
                    </div>
                    <span className={`flex-1 text-base sm:text-[17px] font-semibold pr-2 leading-snug transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#CBD5E1] group-hover/btn:text-white"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-[#6366F1]/20 rotate-180" : "bg-white/5"
                    }`}>
                      <FaChevronDown className={`text-xs transition-colors ${isActive ? "text-[#818CF8]" : "text-[#475569]"}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 ml-14">
                          <div className="w-8 h-[2px] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mb-4 rounded-full" />
                          <p className="text-[#94A3B8] text-sm sm:text-base leading-[1.85]">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

