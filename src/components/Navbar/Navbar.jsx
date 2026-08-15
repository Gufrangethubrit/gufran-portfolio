/** @format */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 pt-3 pb-3 px-4 sm:px-6 md:px-[5vw] lg:px-[8vw] ${isScrolled
          ? "top-0 backdrop-blur-md bg-[#05010a]/90 shadow-2xl shadow-purple-900/20 border-b border-white/5"
          : "top-10"
          }`}
      >
        <div className={`top-navbar text-white flex justify-between items-center transition-all duration-300 px-6 ${isScrolled ? 'py-2' : 'bg-[#0f0b1e]/60 backdrop-blur-xl border border-white/10 rounded-2xl py-3 shadow-xl shadow-purple-900/10'}`}>
          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest text-white leading-tight">GUFRAN ANSARI</span>
              <span className="text-[10px] tracking-[0.25em] text-gray-400 font-medium">MERN STACK DEVELOPER</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className='hidden md:flex space-x-6 lg:space-x-8 text-gray-300'>
            {navItem.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={item.path}
                  className={`cursor-pointer font-medium text-[15px] hover:text-white transition-all duration-300 relative group flex justify-center ${isActive ? "text-[#8245ec]" : ""}`}
                >
                  <Link to={item.path} className="relative">
                    {item.label}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#8245ec] rounded-full shadow-[0_0_8px_#8245ec]"></div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA Button */}
          <div className='hidden md:flex'>
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 text-sm"
            >
              Let's Work Together
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className='md:hidden'>
            {isOpen ? (
              <FiX
                className='text-3xl text-[#8245ec] cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className='text-3xl text-[#8245ec] cursor-pointer'
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className='absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-gradient-to-br from-[#1a0f2e] via-[#2d1b4e] to-[#0f0520] backdrop-filter backdrop-blur-xl z-50 rounded-2xl shadow-2xl shadow-purple-900/60 border border-purple-500/20 md:hidden'>
            <ul className='flex flex-col items-center space-y-5 py-6 text-gray-300'>
              {navItem.map((item) => (
                <li
                  key={item.path}
                  className={`cursor-pointer hover:text-white transition-colors text-lg ${location.pathname === item.path ? "text-[#8245ec] font-medium" : ""
                    }`}
                >
                  <Link to={item.path} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <div className='pt-2'>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-600/25"
                >
                  Let's Work Together
                </Link>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};
