import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt, FaReact, FaNodeJs, FaDatabase, FaArrowRight, FaChartLine, FaUsers, FaCog, FaListUl, FaRegCheckCircle, FaProjectDiagram } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import cv2 from "../../assets/cv2.pdf";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-35 pb-16 px-4 sm:px-6 md:px-8 lg:px-[5vw] xl:px-[8vw] 2xl:px-[12vw] overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10">

        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start text-left z-20">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm mb-6 lg:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-gray-300 text-xs font-semibold tracking-wider uppercase">MERN Stack Developer</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6">
            I Build Modern,<br />
            Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#a855f7]">Web Applications.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-base sm:text-lg lg:text-base xl:text-lg leading-relaxed mb-8 max-w-xl">
            MERN Stack Developer building real-world full-stack applications, Admin Panels, ERP systems and E-commerce platforms using{" "}
            <span className="text-blue-400 font-medium">React</span>,{" "}
            <span className="text-green-400 font-medium">Node.js</span>,{" "}
            <span className="text-purple-400 font-medium">Express.js</span> and{" "}
            <span className="text-green-500 font-medium">MongoDB</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <Link
              to="/projects"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              View My Work
            </Link>

            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 hover:bg-gray-800/50 text-white font-medium transition-all duration-300"
            >
              Let's Work Together
            </Link>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/Gufrangethubrit?tab=repositories" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
              <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <div className="w-px h-4 bg-gray-700"></div>
            <a href="https://x.com/home" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
              <FaTwitter className="text-xl group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">X / Twitter</span>
            </a>
            <div className="w-px h-4 bg-gray-700"></div>
            <a href={cv2} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
              <FaFileAlt className="text-xl group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>
        </div>

        {/* Right Column: Glassmorphism Composition */}
        {/* Using a relative container with responsive scaling (scale-75 for lg, scale-90 for xl, scale-100 for 2xl) to fit 13-inch screens gracefully */}
        <div className="relative w-full h-[550px] hidden lg:block transform lg:scale-75 xl:scale-90 2xl:scale-100 origin-center lg:translate-x-[-10%] xl:translate-x-0">

          {/* Main Dashboard Card */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="absolute top-0 right-10 w-[600px] h-[400px] rounded-xl border border-white/10 bg-[#0f111a]/80 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col z-10">
            {/* Dash Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <FaProjectDiagram className="text-white text-sm" />
                </div>
                <span className="text-white font-semibold tracking-wide">DevFlow</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-white text-xs font-medium">Welcome back, Gufran 👋</p>
                  <p className="text-gray-400 text-[10px]">Here's what's happening today.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
                  <div className="w-full h-full rounded-full bg-[#0f111a] flex items-center justify-center">
                    <span className="text-white text-xs">GA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dash Body */}
            <div className="flex flex-1 p-5 gap-5">

              {/* Sidebar */}
              <div className="w-32 flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <MdDashboard className="text-sm" />
                  <span className="text-xs font-medium">Overview</span>
                </div>
                {[
                  { icon: FaProjectDiagram, label: 'Projects' },
                  { icon: FaChartLine, label: 'Analytics' },
                  { icon: FaListUl, label: 'Tasks' },
                  { icon: FaUsers, label: 'Users' },
                  { icon: FaCog, label: 'Settings' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
                    <item.icon className="text-sm" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-4">

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Total Projects', val: '24', inc: '+12%' },
                    { label: 'Active Users', val: '1,248', inc: '+18%' },
                    { label: 'API Requests', val: '78.5K', inc: '+23%' },
                    { label: 'Success Rate', val: '99.9%', inc: '+0.6%' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 rounded-lg p-3 flex flex-col gap-1">
                      <span className="text-gray-400 text-[9px] uppercase tracking-wider">{stat.label}</span>
                      <span className="text-white text-lg font-bold">{stat.val}</span>
                      <span className="text-emerald-400 text-[10px] font-medium flex items-center gap-1">
                        ↑ {stat.inc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chart & Activity Row */}
                <div className="flex gap-4 flex-1">

                  {/* Chart area */}
                  <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-lg p-4 flex flex-col">
                    <span className="text-gray-300 text-xs font-medium mb-4">Performance Overview</span>
                    <div className="flex-1 relative w-full flex items-end justify-between px-2">
                      {/* Mock Chart Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between py-2 border-l border-b border-white/10">
                        {[100, 75, 50, 25, 0].map(y => (
                          <div key={y} className="w-full border-t border-white/5 relative">
                            <span className="absolute -left-6 -top-2 text-[8px] text-gray-500">{y}</span>
                          </div>
                        ))}
                      </div>

                      {/* Mock Chart SVG lines */}
                      <svg className="absolute inset-0 w-full h-full pt-2 pl-2" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,80 Q10,70 20,60 T40,50 T60,30 T80,50 T100,10" fill="none" stroke="url(#blue-grad)" strokeWidth="2" />
                        <path d="M0,90 Q15,80 30,90 T60,70 T80,90 T100,60" fill="none" stroke="url(#purple-grad)" strokeWidth="2" />

                        <defs>
                          <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                          <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ec4899" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <div className="absolute bottom-[-16px] w-full flex justify-between text-[8px] text-gray-500 pl-2 pr-2">
                        <span>May 01</span><span>May 08</span><span>May 15</span><span>May 22</span><span>May 29</span>
                      </div>
                    </div>
                  </div>

                  {/* Activity area */}
                  <div className="w-40 bg-white/[0.02] border border-white/5 rounded-lg p-3 flex flex-col">
                    <span className="text-gray-300 text-xs font-medium mb-3">Recent Activity</span>
                    <div className="flex flex-col gap-3">
                      {[
                        { icon: FaProjectDiagram, text: 'New project created', time: '2m ago', color: 'text-blue-400' },
                        { icon: FiActivity, text: 'API integration', time: '15m ago', color: 'text-indigo-400' },
                        { icon: FaDatabase, text: 'Database updated', time: '1h ago', color: 'text-green-400' },
                        { icon: FaRegCheckCircle, text: 'Deployment success', time: '2h ago', color: 'text-emerald-400' }
                      ].map((act, i) => (
                        <div key={i} className="flex gap-2">
                          <act.icon className={`${act.color} text-[10px] mt-0.5 shrink-0`} />
                          <div className="flex flex-col">
                            <span className="text-gray-300 text-[9px] leading-tight">{act.text}</span>
                            <span className="text-gray-500 text-[8px]">{act.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Tilt>


          {/* Code Editor Card - Overlapping Bottom Left */}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000} className="absolute bottom-0 left-0 w-[420px] rounded-xl border border-white/10 bg-[#1e1e2e]/95 backdrop-blur-2xl shadow-2xl shadow-black/60 z-20 overflow-hidden transform -rotate-2">

            {/* Editor Header */}
            <div className="flex items-center px-4 py-2 border-b border-white/5 bg-[#181825]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
                <div className="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
              </div>
              <div className="flex-1 flex justify-center items-center gap-2">
                <span className="text-[#a6e3a1] text-[10px]">JS</span>
                <span className="text-gray-400 text-xs font-medium font-mono">server.js</span>
              </div>
            </div>

            {/* Editor Code */}
            <div className="p-4 font-mono text-[11px] leading-6 text-gray-300">
              <div className="flex">
                <span className="text-gray-600 w-6 select-none text-right pr-3">1</span>
                <span><span className="text-[#cba6f7]">const</span> <span className="text-[#f38ba8]">express</span> = <span className="text-[#89b4fa]">require</span>(<span className="text-[#a6e3a1]">'express'</span>);</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6 select-none text-right pr-3">2</span>
                <span><span className="text-[#cba6f7]">const</span> <span className="text-[#f38ba8]">app</span> = <span className="text-[#89b4fa]">express</span>();</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6 select-none text-right pr-3">3</span>
                <span><span className="text-[#cba6f7]">const</span> <span className="text-[#f38ba8]">mongoose</span> = <span className="text-[#89b4fa]">require</span>(<span className="text-[#a6e3a1]">'mongoose'</span>);</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6 select-none text-right pr-3">4</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6 select-none text-right pr-3">5</span>
                <span><span className="text-[#f38ba8]">app</span>.<span className="text-[#89b4fa]">get</span>(<span className="text-[#a6e3a1]">'/api/projects'</span>, <span className="text-[#cba6f7]">async</span> (req, res) <span className="text-[#cba6f7]">=&gt;</span> {'{'}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6 select-none text-right pr-3">6</span>
                <span className="pl-4"><span className="text-[#cba6f7]">const</span> projects = <span className="text-[#cba6f7]">await</span> <span className="text-[#f9e2af]">Project</span>.<span className="text-[#89b4fa]">find</span>();</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6 select-none text-right pr-3">7</span>
                <span className="pl-4"><span className="text-[#f38ba8]">res</span>.<span className="text-[#89b4fa]">json</span>({'{'} <span className="text-[#89dceb]">success</span>: <span className="text-[#fab387]">true</span>, <span className="text-[#89dceb]">data</span>: projects {'}'});</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6 select-none text-right pr-3">8</span>
                <span>{`});`}</span>
              </div>
            </div>

            {/* Editor Footer */}
            <div className="flex items-center justify-between px-4 py-1.5 border-t border-white/5 bg-[#181825] text-[9px] text-gray-500 font-mono">
              <div className="flex gap-4">
                <span>Ln 8, Col 2</span>
                <span>Spaces: 2</span>
                <span>UTF-8</span>
              </div>
              <div className="flex items-center gap-2">
                <span>JavaScript</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a6e3a1]"></span>
                <span className="text-gray-600">✗</span>
              </div>
            </div>
          </Tilt>


          {/* Tech Stack Vertical Card - Overlapping Right */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05} transitionSpeed={2000} className="absolute top-[80px] -right-8 xl:-right-4 w-[220px] rounded-[32px] border border-white/10 bg-[#0a0f25]/80 backdrop-blur-xl shadow-2xl shadow-blue-900/30 p-5 z-30 flex flex-col gap-8">

            {/* Connecting line */}
            <div className="absolute left-[39px] top-[40px] bottom-[40px] w-0.5 bg-gradient-to-b from-[#61dafb]/50 via-[#68a063]/50 to-[#47a248]/50 -z-10"></div>

            {[
              { icon: FaReact, name: 'React', sub: 'Frontend Library', color: 'text-[#61dafb]', bg: 'bg-[#61dafb]/10', border: 'border-[#61dafb]/30', shadow: 'shadow-[#61dafb]/20' },
              { icon: FaNodeJs, name: 'Node.js', sub: 'Runtime Environment', color: 'text-[#68a063]', bg: 'bg-[#68a063]/10', border: 'border-[#68a063]/30', shadow: 'shadow-[#68a063]/20' },
              { icon: SiExpress, name: 'Express.js', sub: 'Web Framework', color: 'text-[#fff]', bg: 'bg-white/5', border: 'border-white/20', shadow: 'shadow-white/10' },
              { icon: SiMongodb, name: 'MongoDB', sub: 'Database', color: 'text-[#47a248]', bg: 'bg-[#47a248]/10', border: 'border-[#47a248]/30', shadow: 'shadow-[#47a248]/20' }
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className={`w-[38px] h-[38px] rounded-full ${tech.bg} border ${tech.border} flex items-center justify-center shadow-lg ${tech.shadow} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                  <tech.icon className={`${tech.color} text-lg`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-semibold tracking-wide">{tech.name}</span>
                  <span className="text-gray-400 text-[10px] leading-tight">{tech.sub}</span>
                </div>
              </div>
            ))}
          </Tilt>

        </div>
      </div>
    </section>
  );
};
