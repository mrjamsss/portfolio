import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FacebookIcon, GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-slate-950/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Description */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-base font-bold text-white font-mono flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>{PORTFOLIO_DATA.nickname}</span>
              <span className="text-slate-500 font-sans text-xs">({PORTFOLIO_DATA.name})</span>
            </span>
            <p className="text-xs text-slate-400">
              Designed &amp; Built with React, TypeScript &amp; Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {PORTFOLIO_DATA.socials.map((social) => {
              const Icon =
                social.platform === 'facebook'
                  ? FacebookIcon
                  : social.platform === 'github'
                  ? GithubIcon
                  : Mail;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-slate-900 border border-white/[0.06] hover:border-indigo-500/40 text-slate-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-2">
          <span>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Web Systems Technology <Heart className="w-3 h-3 text-rose-500 inline" /> NEUST CICT
          </span>
        </div>
      </div>
    </footer>
  );
};
