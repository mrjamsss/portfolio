import { ExternalLink, FolderCode, CheckCircle2, ShieldCheck, Navigation, ClipboardList } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Render a custom, elegant developer illustration banner for each project
  const renderProjectVisual = () => {
    switch (project.id) {
      case 'project-solo':
        return (
          <div className="relative h-48 w-full bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-white/[0.08]">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-[11px] font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verification System</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                Active Architecture
              </span>
            </div>

            {/* Mock system UI elements */}
            <div className="bg-slate-900/90 rounded-lg p-3 border border-white/[0.08] shadow-lg text-left z-10 backdrop-blur-sm">
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1.5">
                <span>Applicant ID: #SOLO-2024-089</span>
                <span className="text-indigo-400">Status: Verified</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-indigo-500 h-full w-4/5 rounded-full" />
              </div>
            </div>

            {/* Background grid accent */}
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
          </div>
        );

      case 'pawtner':
        return (
          <div className="relative h-48 w-full bg-gradient-to-br from-cyan-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-white/[0.08]">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono">
                <Navigation className="w-3.5 h-3.5" />
                <span>Travel & Mobility</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                UI/UX Concept
              </span>
            </div>

            {/* Mock companion UI */}
            <div className="bg-slate-900/90 rounded-lg p-3 border border-white/[0.08] shadow-lg text-left z-10 backdrop-blur-sm">
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1.5">
                <span>Route: Pet-Friendly Transit</span>
                <span className="text-cyan-400">Accommodations: 12 Found</span>
              </div>
              <div className="flex gap-1.5 text-[10px] font-mono text-slate-400">
                <span className="px-1.5 py-0.5 rounded bg-white/[0.05]">Air-Conditioned</span>
                <span className="px-1.5 py-0.5 rounded bg-white/[0.05]">Verified Stays</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
          </div>
        );

      case 'ontrack':
      default:
        return (
          <div className="relative h-48 w-full bg-gradient-to-br from-violet-950 via-slate-900 to-slate-950 p-4 flex flex-col justify-between overflow-hidden border-b border-white/[0.08]">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-violet-500/20 border border-violet-500/40 text-violet-300 text-[11px] font-mono">
                <ClipboardList className="w-3.5 h-3.5" />
                <span>OJT Process Tracking</span>
              </div>
              <span className="text-[10px] font-mono text-violet-400 bg-violet-950/60 border border-violet-500/30 px-2 py-0.5 rounded-full">
                Academic System
              </span>
            </div>

            {/* Mock DTR logger UI */}
            <div className="bg-slate-900/90 rounded-lg p-3 border border-white/[0.08] shadow-lg text-left z-10 backdrop-blur-sm">
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1.5">
                <span>DTR Log: 486 / 600 Hours</span>
                <span className="text-violet-400">81% Complete</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-violet-500 h-full w-[81%] rounded-full" />
              </div>
            </div>

            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
          </div>
        );
    }
  };

  return (
    <article className="glass-card rounded-xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
      <div>
        {/* Project Header Banner */}
        {renderProjectVisual()}

        {/* Project Content */}
        <div className="p-6 text-left space-y-4">
          <div>
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
              {project.category}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <FolderCode className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Highlight features */}
          {project.highlightMetrics && (
            <div className="space-y-1.5 pt-1">
              {project.highlightMetrics.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-xs text-slate-400"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-900 border border-white/[0.06] text-slate-300 text-[11px] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 flex items-center gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-indigo-500/40 text-xs font-mono text-slate-200 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-xs font-mono text-indigo-300 hover:text-white transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </article>
  );
};
