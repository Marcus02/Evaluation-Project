'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#hero-section" },  
  { name: "About RARE", href: "#about-section" },
  { name: "Services", href: "#services-section" },
  { name: "Industry", href: "#industry-section" },
  { name: "Resources", href: "#resources-section" },
  { name: "Contact Us", href: "#contact-section" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    console.log('Toggling mobile menu:', !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 w-full max-w-[1400px] mx-auto h-16 sm:h-18">
        <div className="flex-shrink-0">
          <Image src="/nav-logo.svg" alt="Logo" width={81} height={78} style={{ objectFit: 'contain' }} />
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-6 lg:gap-8 mx-auto">
          {navLinks.map((link) => (
          <li key={link.name} style={{ height: 24 }}>
            <Link
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-[#444] text-[14px] lg:text-[16px] font-normal px-3 py-2 rounded-md transition-all duration-300 hover:bg-[#f3eafd] hover:text-[#791E79] focus:outline-none focus:ring-2 focus:ring-[#791E79] focus:ring-offset-2 text-center min-w-[70px] hover:scale-105"
            >
              {link.name}
            </Link>
          </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex flex-shrink-0">
          <button
            className="relative inline-flex items-center justify-center bg-[#791E79] rounded-full px-6 lg:px-8 py-3 text-white font-medium text-[14px] lg:text-[16px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#791E79] focus:ring-offset-2 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{ 
              fontFamily: 'inherit',
              background: 'linear-gradient(180deg, #8B2A8B 0%, #791E79 50%, #6B1A6B 100%)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.1)',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Request a Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-[#791E79] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#791E79] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#791E79] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-[70] bg-white shadow-2xl border-t border-gray-200">
          <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Navigation Links */}
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block text-[#444] text-[16px] font-medium px-3 py-2.5 rounded-lg transition-all duration-300 hover:bg-[#f3eafd] hover:text-[#791E79] hover:scale-105 hover:shadow-sm border border-transparent hover:border-[#f3eafd] cursor-pointer"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideInFromTop 0.2s ease-out forwards'
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-3 border-t border-gray-200 mt-3">
              <button
                className="w-full relative inline-flex items-center justify-center bg-[#791E79] rounded-full px-4 py-2.5 text-white font-medium text-[14px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#791E79] focus:ring-offset-2 hover:scale-105 hover:shadow-lg active:scale-95"
                style={{ 
                  fontFamily: 'inherit',
                  background: 'linear-gradient(180deg, #8B2A8B 0%, #791E79 50%, #6B1A6B 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.1)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Request a Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
