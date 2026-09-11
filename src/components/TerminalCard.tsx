import React, { useState } from 'react';
import { Copy, Check, FileCode, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TerminalCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'stack'>('profile');

  const profileCode = `// developer.config.ts
export const developer = {
  name: "${PORTFOLIO_DATA.name}",
  specialization: "${PORTFOLIO_DATA.specialization}",
  institution: "NEUST - CICT",
  standing: "${PORTFOLIO_DATA.studentStatus}",
  coreStack: ["React", "Laravel", "PHP", "MySQL", "Node.js"],
  strengths: [
    "Relational Database Architecture",
    "Full-Stack Web Systems",
    "Clean REST API Integration"
  ],
  availableForInternship: true
};`;

  const stackCode = `// tech-stack.json
{
  "frontend": ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  "backend": ["PHP", "Laravel", "Node.js"],
  "languages": ["C++", "Java", "JavaScript"],
  "database": ["MySQL"],
  "mobile": ["Ionic Angular"],
  "workflow": ["Git", "GitHub", "Vite", "REST APIs"]
}`;

  const currentCode = activeTab === 'profile' ? profileCode : stackCode;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl overflow-hidden glass-panel border border-white/[0.1] shadow-2xl shadow-indigo-950/40 text-left">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400">~/workspace/portfolio</span>
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code snippet"
          className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-slate-200 px-2 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs: developer.ts & stack.json */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-slate-950/70 border-b border-white/[0.05]">
        <button
          type="button"
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t transition-all ${
            activeTab === 'profile'
              ? 'bg-slate-900 text-indigo-300 border-t-2 border-indigo-500 font-medium'
              : 'text-slate-400 hover:text-slate-300 hover:bg-white/[0.03]'
          }`}
        >
          <FileCode className="w-3.5 h-3.5 text-indigo-400" />
          <span>developer.ts</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('stack')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t transition-all ${
            activeTab === 'stack'
              ? 'bg-slate-900 text-cyan-300 border-t-2 border-cyan-500 font-medium'
              : 'text-slate-400 hover:text-slate-300 hover:bg-white/[0.03]'
          }`}
        >
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>stack.json</span>
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 bg-slate-950/90 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
        <pre className="selection:bg-indigo-500/30">
          <code>
            {activeTab === 'profile' && (
              <>
                <span className="text-slate-500">// developer.config.ts</span>
                {'\n'}
                <span className="text-indigo-400 font-semibold">export const</span>{' '}
                <span className="text-cyan-300">developer</span> = {'{'}
                {'\n'}  <span className="text-slate-400">name:</span>{' '}
                <span className="text-amber-300">&quot;{PORTFOLIO_DATA.name}&quot;</span>,
                {'\n'}  <span className="text-slate-400">specialization:</span>{' '}
                <span className="text-emerald-300">&quot;{PORTFOLIO_DATA.specialization}&quot;</span>,
                {'\n'}  <span className="text-slate-400">institution:</span>{' '}
                <span className="text-emerald-300">&quot;NEUST - CICT&quot;</span>,
                {'\n'}  <span className="text-slate-400">standing:</span>{' '}
                <span className="text-amber-300">&quot;{PORTFOLIO_DATA.studentStatus}&quot;</span>,
                {'\n'}  <span className="text-slate-400">coreStack:</span> [
                {'\n'}    <span className="text-cyan-300">&quot;React&quot;</span>,{' '}
                <span className="text-cyan-300">&quot;Laravel&quot;</span>,{' '}
                <span className="text-cyan-300">&quot;PHP&quot;</span>,{' '}
                <span className="text-cyan-300">&quot;MySQL&quot;</span>,{' '}
                <span className="text-cyan-300">&quot;Node.js&quot;</span>
                {'\n'}  ],
                {'\n'}  <span className="text-slate-400">availableForOpportunities:</span>{' '}
                <span className="text-indigo-400 font-semibold">true</span>
                {'\n'}
                {'}'};
              </>
            )}

            {activeTab === 'stack' && (
              <>
                <span className="text-slate-500">// tech-stack.json</span>
                {'\n'}
                {'{'}
                {'\n'}  <span className="text-indigo-400">&quot;frontend&quot;</span>: [
                <span className="text-amber-300">&quot;React&quot;</span>,{' '}
                <span className="text-amber-300">&quot;Next.js&quot;</span>,{' '}
                <span className="text-amber-300">&quot;Tailwind CSS&quot;</span>],
                {'\n'}  <span className="text-cyan-400">&quot;backend&quot;</span>: [
                <span className="text-amber-300">&quot;PHP&quot;</span>,{' '}
                <span className="text-amber-300">&quot;Laravel&quot;</span>,{' '}
                <span className="text-amber-300">&quot;Node.js&quot;</span>],
                {'\n'}  <span className="text-emerald-400">&quot;languages&quot;</span>: [
                <span className="text-amber-300">&quot;C++&quot;</span>,{' '}
                <span className="text-amber-300">&quot;Java&quot;</span>,{' '}
                <span className="text-amber-300">&quot;JavaScript&quot;</span>],
                {'\n'}  <span className="text-violet-400">&quot;database&quot;</span>: [
                <span className="text-amber-300">&quot;MySQL&quot;</span>],
                {'\n'}  <span className="text-rose-400">&quot;mobile&quot;</span>: [
                <span className="text-amber-300">&quot;Ionic Angular&quot;</span>]
                {'\n'}
                {'}'}
              </>
            )}
          </code>
        </pre>
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-slate-300">Ready to Collaborate</span>
        </div>
        <span className="text-slate-500">UTF-8 • TypeScript</span>
      </div>
    </div>
  );
};
