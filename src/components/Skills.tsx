import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { TechBall, type TechItem } from './TechBall';
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  ReactLogo,
  NextLogo,
  TailwindLogo,
  IonicAngularLogo,
  PhpLogo,
  LaravelLogo,
  NodeLogo,
  MysqlLogo,
  CppLogo,
  JavaLogo,
  GitLogo,
} from './TechLogos';

const TECH_ITEMS: readonly TechItem[] = [
  { id: 'html', name: 'HTML5', category: 'Frontend', icon: <HtmlLogo size={36} /> },
  { id: 'css', name: 'CSS3', category: 'Frontend', icon: <CssLogo size={36} /> },
  { id: 'js', name: 'JavaScript', category: 'Language', icon: <JsLogo size={36} /> },
  { id: 'react', name: 'React', category: 'Frontend', icon: <ReactLogo size={36} /> },
  { id: 'next', name: 'Next.js', category: 'Framework', icon: <NextLogo size={36} /> },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Styling', icon: <TailwindLogo size={36} /> },
  { id: 'ionic', name: 'Ionic Angular', category: 'Mobile/Web', icon: <IonicAngularLogo size={36} /> },
  { id: 'php', name: 'PHP', category: 'Backend', icon: <PhpLogo size={36} /> },
  { id: 'laravel', name: 'Laravel', category: 'Backend', icon: <LaravelLogo size={36} /> },
  { id: 'node', name: 'Node.js', category: 'Runtime', icon: <NodeLogo size={36} /> },
  { id: 'mysql', name: 'MySQL', category: 'Database', icon: <MysqlLogo size={36} /> },
  { id: 'cpp', name: 'C++', category: 'Language', icon: <CppLogo size={36} /> },
  { id: 'java', name: 'Java', category: 'Language', icon: <JavaLogo size={36} /> },
  { id: 'git', name: 'Git', category: 'Tool', icon: <GitLogo size={36} /> },
];

export const Skills: React.FC = () => {
  // Split into two balanced rows like in the screenshot
  const row1 = TECH_ITEMS.slice(0, 7);
  const row2 = TECH_ITEMS.slice(7);

  return (
    <section id="skills" className="py-20 relative bg-tech-grid/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left" className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Stack &amp; Toolkit
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Hover over any 3D faceted ball to interact and inspect the technologies I build with.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </ScrollReveal>

        {/* 3D Low-Poly Faceted Tech Balls Grid */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 max-w-5xl mx-auto">
          {/* Row 1: Frontend & Core Tools (Glides from Left to Center) */}
          <ScrollReveal
            direction="left"
            delay={50}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full"
          >
            {row1.map((tech, idx) => (
              <TechBall key={tech.id} item={tech} delayIndex={idx} />
            ))}
          </ScrollReveal>

          {/* Row 2: Backend, Databases & Languages (Glides from Right to Center) */}
          <ScrollReveal
            direction="right"
            delay={150}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full"
          >
            {row2.map((tech, idx) => (
              <TechBall key={tech.id} item={tech} delayIndex={idx + 7} />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
