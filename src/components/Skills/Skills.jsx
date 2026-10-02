import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaServer, 
  FaTools, 
  FaCode, 
  FaRocket 
} from "react-icons/fa";
import { SkillsInfo } from "../../utils/constants";

const categoryMeta = {
  "Frontend": {
    icon: FaLaptopCode,
    subtitle: "Client-side architecture & responsive UI components",
    color: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/20",
    badgeBg: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    colSpan: "lg:col-span-2",
  },
  "Backend & Database": {
    icon: FaServer,
    subtitle: "Scalable server logic, secure APIs & structured data",
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/20",
    badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    colSpan: "lg:col-span-2",
  },
  "Programming Languages": {
    icon: FaCode,
    subtitle: "Fundamental problem solving, OOP & type-safe scripting",
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/20",
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    colSpan: "lg:col-span-2",
  },
  "Tools & Platforms": {
    icon: FaTools,
    subtitle: "Version control, workflow automation, testing & cloud deployment",
    color: "from-purple-400 to-pink-500",
    shadow: "shadow-purple-500/20",
    badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-300",
    colSpan: "lg:col-span-3",
  },
  "Currently Learning": {
    icon: FaRocket,
    subtitle: "Expanding skills with modern frameworks & mobile tech",
    color: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/20",
    badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
};

const displayOrder = [
  "Frontend",
  "Backend & Database",
  "Programming Languages",
  "Tools & Platforms",
  "Currently Learning",
];

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

  const sortedSkills = [...SkillsInfo].sort(
    (a, b) => displayOrder.indexOf(a.title) - displayOrder.indexOf(b.title)
  );

  return (
    <section 
      id='skills' 
      className='seamless-section py-24 md:py-32 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans relative overflow-hidden'
    >
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>
      
      {/* Ambient Glow Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#6366F1]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='flex flex-col items-center mb-16 lg:mb-20 text-center'
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/5 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse shadow-[0_0_8px_#14B8A6]"></span>
            <span className="text-[#818CF8] uppercase tracking-[0.2em] text-xs font-semibold">Capabilities</span>
          </div>

          <h2 className='text-3xl md:text-5xl font-bold text-white tracking-tight'>
            Technologies I <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#6366F1]">Work With</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-2xl text-base sm:text-lg leading-relaxed">
            A curated stack of modern tools, battle-tested frameworks, and scalable cloud technologies I use to build robust digital solutions.
          </p>
        </motion.div>

        {/* Skills Cards Grid: 3 cards top, 2 cards bottom */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8'
        >
          {sortedSkills.map((category) => {
            const meta = categoryMeta[category.title] || {
              icon: FaCode,
              subtitle: "Essential tools and frameworks",
              color: "from-indigo-400 to-purple-500",
              shadow: "shadow-indigo-500/20",
              badgeBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
              colSpan: "lg:col-span-2",
            };
            const CategoryIcon = meta.icon;

            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`group relative bg-gradient-to-br from-[#12162B]/90 to-[#080A14]/90 backdrop-blur-xl p-7 sm:p-8 rounded-3xl border border-[#6366F1]/15 transition-all duration-300 hover:-translate-y-2 hover:border-[#6366F1]/40 hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)] overflow-hidden flex flex-col justify-between ${meta.colSpan}`}
              >
                {/* Background Glow on Hover */}
                <div 
                  className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${meta.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Category Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-[#0A0D1C]/80 border border-white/10 flex items-center justify-center shadow-lg ${meta.shadow} group-hover:scale-110 transition-transform duration-300`}>
                      <CategoryIcon className="text-2xl text-white" />
                    </div>

                    <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-sm ${meta.badgeBg}`}>
                      {category.skills.length} Tech
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#E2E8F0] mb-2 tracking-tight group-hover:text-white transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-6">
                    {meta.subtitle}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center gap-2.5 bg-[#0A0D1C]/85 hover:bg-[#131938] border border-white/[0.08] hover:border-[#6366F1]/50 rounded-xl py-2 px-3 sm:px-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(99,102,241,0.18)] cursor-default"
                      >
                        <div className="w-5 h-5 flex items-center justify-center group-hover/skill:scale-110 transition-transform duration-200">
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                          />
                        </div>
                        <span className="text-xs sm:text-[13px] text-[#CBD5E1] group-hover/skill:text-white font-medium tracking-wide transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Bottom Corner Line */}
                <div className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-r from-transparent to-[#6366F1]/50 group-hover:w-full transition-all duration-500 ease-out z-10 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
