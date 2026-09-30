import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { NAV_ITEMS, PORTFOLIO_DATA } from '../data/portfolioData';
import logoNoBg from '../assets/JA_Logo-FF-nobg.png';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(href, { offset: -70, duration: 1.2 });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-slate-900/70 backdrop-blur-sm p-1 shadow-md shadow-indigo-500/10 flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:border-indigo-400/50 group-hover:shadow-indigo-500/25">
              <img
                src={logoNoBg}
                alt={`${PORTFOLIO_DATA.displayName} Logo`}
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(99,102,241,0.25)] transition-transform duration-200 group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-semibold text-white tracking-tight flex items-center gap-1.5 group-hover:text-indigo-300 transition-colors">
                {PORTFOLIO_DATA.displayName}
                <span className="text-indigo-400 font-mono text-xs">.dev</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider hidden sm:inline-block">
                Web Systems Tech
              </span>
            </div>
          </a>

          {/* Desktop Navigation on Right */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-indigo-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16] border-b border-white/[0.08] px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-indigo-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
