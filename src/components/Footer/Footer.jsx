import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-gradient-to-b from-black to-[#000428] text-white py-12 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] border-t border-white/[0.05] overflow-hidden"
      >
        {/* Premium Background Dot Grid */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.05]" 
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
        ></div>

        <div className="container mx-auto text-center relative z-10">
          {/* Name / Logo */}
          <Link to="/">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 hover:from-pink-300 hover:to-purple-200 transition-all duration-300 cursor-pointer mb-2">
              Gufran Ansari
            </h2>
          </Link>

          {/* Navigation Links - Responsive */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Experience", path: "/experience" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="hover:text-purple-300 text-sm sm:text-base font-medium my-1 transition-all duration-300 hover:scale-110 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Social Media Icons - Responsive */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 mt-8">
            {[
              { icon: <FaGithub />, link: "https://github.com/Gufrangethubrit?tab=repositories" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/gufran-ansari-62124230a/" },
              { icon: <FaTwitter />, link: "https://x.com/home" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-200 hover:text-purple-300 transition-all duration-300 transform hover:scale-125 hover:shadow-lg hover:shadow-purple-500/50 p-3 rounded-full hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 border border-transparent hover:border-purple-500/50"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Copyright Text */}
          <div className="mt-8 pt-6 border-t border-purple-500/20">
            <p className="text-sm text-gray-400">
              Copyright © 2025 <span className="text-purple-300 font-semibold">Gufran Ansari</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
