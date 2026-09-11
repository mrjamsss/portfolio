import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-tech-grid/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left" className="flex flex-col items-start mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
            Formal education focused on web technologies, software architecture, and computational thinking.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </ScrollReveal>

        {/* Timeline Wrapper (Slides in from Right) */}
        <div className="max-w-4xl mx-auto">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <ScrollReveal key={idx} direction="right" delay={100}>
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative text-left hover:border-indigo-500/40 transition-all duration-300">
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.degree}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {edu.statusBadge}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 font-mono text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Institution & Specialization */}
                <div className="py-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.specialization}
                  </h3>
                  <div className="text-slate-300 font-medium text-sm sm:text-base mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span>{edu.institution}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-indigo-300">{edu.collegeDepartment}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{PORTFOLIO_DATA.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-2.5">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                    <Award className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Program Highlights & Focus Areas</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-white/[0.04]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
