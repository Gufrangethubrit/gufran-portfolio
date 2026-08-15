import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const TopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed left-0 w-full h-10 z-[60] bg-[#05010a]/90 border-b border-white/5 text-gray-400 text-[11px] sm:text-xs px-4 sm:px-6 md:px-[5vw] lg:px-[8vw] transition-all duration-300 ${isScrolled ? '-top-10' : 'top-0'}`}>
      <div className="w-full h-full flex justify-between items-center px-6">
      <div className="flex items-center gap-6">
        <a href="tel:+918542877243" className="flex items-center gap-2 hover:text-white transition-colors">
          <FaPhoneAlt className="text-gray-400" />
          <span className="font-medium tracking-wide">+91 8542877243</span>
        </a>
        <div className="w-px h-3 bg-white/10 hidden md:block"></div>
        <a href="mailto:gufrankgna@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
          <FaEnvelope className="text-gray-400" />
          <span className="hidden sm:inline font-medium tracking-wide">gufrankgna@gmail.com</span>
        </a>
      </div>
      <div className="flex items-center gap-5">
        <a href="https://github.com/Gufrangethubrit?tab=repositories" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <FaGithub className="text-sm" />
        </a>
        <a href="https://www.linkedin.com/in/gufran-ansari-62124230a/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <FaLinkedin className="text-sm" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
          <FaXTwitter className="text-sm" />
        </a>
      </div>
      </div>
    </div>
  );
};
