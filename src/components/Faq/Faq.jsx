import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. I also have strong proficiency in TypeScript, Redux Toolkit, Tailwind CSS, and integrating various third-party services like Cloudinary and payment gateways."
  },
  {
    question: "Do you build custom Admin Panels and ERPs?",
    answer: "Yes, I have extensive experience building complex, role-based Admin Panels and comprehensive ERP systems from scratch, focusing on scalable architecture, secure authentication (JWT), and responsive UI."
  },
  {
    question: "Can you help optimize or fix an existing web application?",
    answer: "Absolutely! I can dive into existing codebases to fix bugs, improve performance, integrate new APIs, or revamp the user interface using modern best practices."
  },
  {
    question: "Are your web applications mobile-friendly?",
    answer: "Yes, every application I build is 100% responsive and optimized for a seamless experience across all devices, including desktops, tablets, and smartphones."
  },
  {
    question: "How do you handle project communication and updates?",
    answer: "I believe in clear and consistent communication. I provide regular progress updates, actively seek feedback during development milestones, and ensure we are always aligned on the project goals."
  }
];

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans relative overflow-hidden bg-gradient-to-b from-black to-[#000428] border-t border-white/[0.05]"
    >
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>

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
            <span className="text-[#6366F1] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">Queries</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#6366F1]">Questions</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-2xl text-center text-base sm:text-lg leading-[1.8]">
            Here are some common questions about my technical expertise, services, and workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-full min-h-[400px] lg:min-h-[500px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#6366F1]/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6366F1]/20 to-transparent mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
              alt="Coding Workspace" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-2xl font-bold text-white mb-2">Have a project in mind?</h3>
              <p className="text-gray-300 text-sm max-w-sm">Let's turn your complex ideas into seamless web applications.</p>
            </div>
          </motion.div>

          {/* Right Side: FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isActive = activeIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-[#12162B] to-[#080A14] shadow-[0_8px_32px_rgba(99,102,241,0.15)] border-[#6366F1]/40' : 'bg-[#0A0A12]/50 hover:bg-[#12162B]/80 hover:border-white/20'}`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  >
                    <span className={`text-base sm:text-lg font-semibold pr-4 transition-colors duration-300 ${isActive ? 'text-[#818CF8]' : 'text-gray-200'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-[#6366F1] text-white rotate-180' : 'bg-white/5 text-gray-400'}`}>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
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
