import React, { useState } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
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
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-semibold text-white tracking-tight flex items-center gap-1.5">
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
