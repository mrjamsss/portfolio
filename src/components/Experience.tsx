import React from 'react';
import { Briefcase, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left" className="flex flex-col items-start mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Collaborative & Academic Work
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
            Student leadership, development team projects, and collegiate technology initiatives.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </ScrollReveal>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => {
            const direction = idx % 2 === 0 ? 'left' : 'right';
            const delay = (idx % 2) * 100;
            return (
              <ScrollReveal key={idx} direction={direction} delay={delay}>
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-indigo-400 flex items-center gap-1.5 mt-0.5">
                        <Users className="w-4 h-4 text-indigo-400" />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 font-mono text-xs">
                        <Briefcase className="w-3 h-3 text-indigo-400" />
                        <span className="capitalize">{exp.type}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed pt-4">
                    {exp.description}
                  </p>

                  {/* Bullet highlights */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/[0.04] space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs text-slate-400"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}

        </div>
      </div>
    </section>
  );
};
