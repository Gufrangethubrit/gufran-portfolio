import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronRight, FaCode } from "react-icons/fa";

export const Breadcrumb = ({ pageName }) => {
  return (
    <section className="relative pt-40 md:pt-48 pb-12 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw] bg-gradient-to-r from-[#0d0717] via-[#160d29] to-[#05020a] border-b border-[#8245ec]/30 shadow-2xl overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238245ec'/%3E%3C/svg%3E\")" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-[#8245ec]/10 rounded-[100%] blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        
        {/* Left Side: Breadcrumb & Title */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Actual Breadcrumb Path */}
          <div className="flex items-center gap-2 text-sm text-[#94A3B8] font-medium mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <FaChevronRight className="text-[10px] text-purple-400" />
            <span className="text-white">{pageName}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
            {pageName}
          </h1>
        </motion.div>

        {/* Right Side: Freelance/MERN Badge */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 bg-[#111111]/80 backdrop-blur-md border border-purple-500/20 px-5 py-3 rounded-2xl shadow-[0_8px_32px_rgba(168,85,247,0.1)] hover:border-purple-500/40 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
            <FaCode className="text-white text-lg" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[#E2E8F0] font-bold text-sm tracking-wide">MERN Stack Expert</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 text-xs font-semibold">Available for Freelance</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
