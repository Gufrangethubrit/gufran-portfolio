import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaMobileAlt, FaCodeBranch, FaPaintBrush } from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, interactive, and highly optimized user interfaces using React.js, Tailwind CSS, and Framer Motion.",
      icon: FaLaptopCode,
      color: "from-blue-400 to-indigo-500",
      shadow: "shadow-blue-500/20"
    },
    {
      title: "Backend Development",
      description: "Designing robust and scalable server-side architectures, RESTful APIs, and authentication systems with Node.js and Express.js.",
      icon: FaServer,
      color: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-500/20"
    },
    {
      title: "Database Management",
      description: "Architecting efficient database schemas, complex aggregations, and optimizing query performance using MongoDB and Mongoose.",
      icon: FaDatabase,
      color: "from-green-400 to-emerald-600",
      shadow: "shadow-green-500/20"
    },
    {
      title: "Full-Stack Web Apps",
      description: "End-to-end development of scalable MERN stack web applications, tailored to your business needs with seamless integration.",
      icon: FaCodeBranch,
      color: "from-purple-400 to-pink-500",
      shadow: "shadow-purple-500/20"
    },
    {
      title: "Admin Dashboards",
      description: "Creating comprehensive, data-rich admin panels with real-time analytics, charts, and secure role-based access control.",
      icon: FaMobileAlt,
      color: "from-orange-400 to-red-500",
      shadow: "shadow-orange-500/20"
    },
    {
      title: "UI/UX Enhancements",
      description: "Upgrading existing applications with modern design systems, glassmorphism, smooth animations, and premium aesthetics.",
      icon: FaPaintBrush,
      color: "from-pink-400 to-rose-500",
      shadow: "shadow-pink-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="services" 
      className="relative overflow-hidden py-24 md:py-32 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-gradient-to-b from-[#000428] to-black border-t border-white/[0.05]"
    >
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 lg:mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/5 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse shadow-[0_0_8px_#14B8A6]"></span>
            <span className="text-[#818CF8] uppercase tracking-[0.2em] text-xs font-semibold">What I Do</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#6366F1]">Services</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl text-base sm:text-lg leading-relaxed">
            I deliver high-quality, scalable, and modern digital solutions utilizing the full power of the MERN stack to help your business grow.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-[#12162B]/90 to-[#080A14]/90 backdrop-blur-xl p-8 rounded-3xl border border-[#6366F1]/15 transition-all duration-300 hover:-translate-y-2 hover:border-[#6366F1]/40 hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)] overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              <div className={`w-14 h-14 rounded-2xl bg-[#0A0D1C]/80 border border-white/10 flex items-center justify-center mb-6 shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-2xl text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#E2E8F0] mb-3 tracking-tight group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {service.description}
              </p>
              
              {/* Decorative Corner Line */}
              <div className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-r from-transparent to-[#6366F1]/50 group-hover:w-full transition-all duration-500 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
