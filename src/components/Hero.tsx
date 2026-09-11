import { ArrowDown, Mail, FolderGit2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TerminalCard } from './TerminalCard';
import { FacebookIcon, GithubIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text and Actions (Slides in from Left) */}
          <ScrollReveal
            direction="left"
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Name as Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Hi, I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400">
                  {PORTFOLIO_DATA.name}.
                </span>
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
                {PORTFOLIO_DATA.heroBio}
              </p>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-indigo-600/25 group"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 text-indigo-200 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] active:scale-[0.98] border border-white/[0.1] hover:border-indigo-500/40 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Quick Tags */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4 text-slate-400 border-t border-white/[0.06] w-full max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              <div className="flex items-center gap-3">
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
                      aria-label={`Visit Jorald's ${social.label}`}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-indigo-950/60 border border-white/[0.08] hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all duration-200 text-xs font-mono"
                    >
                      <Icon className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Developer Terminal Snippet (Slides in from Right) */}
          <ScrollReveal
            direction="right"
            delay={100}
            className="lg:col-span-6 xl:col-span-5 flex justify-center w-full"
          >
            <TerminalCard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
