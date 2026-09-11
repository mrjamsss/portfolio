import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { GithubIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left" className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Crafted Systems & Applications
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
              Real-world full-stack architectures, database-backed platforms, and interactive web concepts.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
          </div>

          <div className="mt-6 md:mt-0">
            <a
              href="https://github.com/mrjamsss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-white/[0.08] hover:border-indigo-500/40 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-indigo-400" />
              <span>Explore GitHub Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid with Left, Center, Right entrances */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            const direction = idx === 0 ? 'left' : idx === 1 ? 'up' : 'right';
            const delay = idx * 100;
            return (
              <ScrollReveal key={project.id} direction={direction} delay={delay}>
                <ProjectCard project={project} />
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Note */}
        <ScrollReveal direction="up" delay={150} className="mt-12 p-6 rounded-xl glass-panel text-center max-w-2xl mx-auto border border-white/[0.06]">
          <p className="text-sm text-slate-400">
            Have a project idea or looking for a dedicated full-stack developer for an internship?{' '}
            <a
              href="#contact"
              className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4"
            >
              Let&apos;s talk about it.
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
