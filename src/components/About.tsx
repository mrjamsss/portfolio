import React from 'react';
import {
  GraduationCap,
  Layers,
  CheckCircle2,
  Code2,
  Server,
  Database,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const focusIcons = [
    Layers,
    Code2,
    Server,
    Database,
    Smartphone,
    Sparkles,
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left" className="flex flex-col items-start mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Curious student with a builder&apos;s mindset.
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-3" />
        </ScrollReveal>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative & Interests (Left Column: Slides from Left) */}
          <ScrollReveal direction="left" delay={100} className="lg:col-span-7 space-y-6 text-left">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {PORTFOLIO_DATA.aboutBio}
            </p>

            <div className="p-5 rounded-xl glass-card border border-white/[0.08] bg-slate-900/40">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 font-mono mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>Areas of Technical Interest</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.aboutFocusAreas.map((area, idx) => {
                  const Icon = focusIcons[idx % focusIcons.length];
                  return (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-slate-300 text-sm hover:border-indigo-500/30 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="p-1 rounded bg-indigo-500/10 text-indigo-400">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{area}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Based at {PORTFOLIO_DATA.institution} ({PORTFOLIO_DATA.college})
              </span>
            </div>
          </ScrollReveal>

          {/* Quick Statistics Grid (Right Column: Slides from Right) */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-5 grid grid-cols-2 gap-4">
            {PORTFOLIO_DATA.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-5 rounded-xl border border-white/[0.08] flex flex-col justify-between text-left hover:-translate-y-1 transition-all duration-200"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-indigo-400 font-mono mt-1">
                    {stat.label}
                  </div>
                </div>
                {stat.subtext && (
                  <div className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-white/[0.06]">
                    {stat.subtext}
                  </div>
                )}
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
