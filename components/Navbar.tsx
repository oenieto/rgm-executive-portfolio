import React, { useState } from 'react';
import { Icon } from './Icon';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getLink = (hash: string) => isHome ? hash : `/${hash}`;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf3] bg-white/90 backdrop-blur-md px-6 py-4 lg:px-40 shadow-sm transition-all duration-300">
      <Link to="/" className="flex items-center gap-4 text-[#0d121b]">
        <div className="size-12 flex items-center justify-center">
          <img src="/logo.png" alt="RGM Executive Logo" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-text-main text-lg font-bold leading-tight tracking-[-0.015em]">
          RGM Executive
        </h2>
      </Link>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-9">
          <a className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors" href={getLink('#profile')}>
            Profile
          </a>
          <a className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors" href={getLink('#experience')}>
            Experience
          </a>
          <a className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors" href={getLink('#impact')}>
            Strategic Impact
          </a>
          <Link className="text-text-main text-sm font-medium leading-normal hover:text-primary transition-colors" to="/contact">
            Contact
          </Link>
        </nav>
        <a 
          href="/rafael-guerram-cv.pdf"
          download="Rafael_Guerra_Magana_CV.pdf"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
        >
          <span className="truncate">Download CV</span>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <Icon name="menu" className="text-3xl" />
      </div>

      {/* Mobile Menu Dropdown (Basic implementation) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#e7ebf3] shadow-lg flex flex-col p-4 gap-4 md:hidden">
           <a className="text-text-main font-medium" href={getLink('#profile')} onClick={() => setMobileMenuOpen(false)}>Profile</a>
           <a className="text-text-main font-medium" href={getLink('#experience')} onClick={() => setMobileMenuOpen(false)}>Experience</a>
           <a className="text-text-main font-medium" href={getLink('#impact')} onClick={() => setMobileMenuOpen(false)}>Impact</a>
           <Link className="text-text-main font-medium" to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
           <a href="/rafael-guerram-cv.pdf" download="Rafael_Guerra_Magana_CV.pdf" className="w-full flex items-center justify-center h-10 bg-primary text-white rounded-lg font-bold">Download CV</a>
        </div>
      )}
    </header>
  );
};