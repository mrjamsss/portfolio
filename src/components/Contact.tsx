import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Send,
  CheckCircle,
  Copy,
  Check,
  AlertCircle,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FacebookIcon, GithubIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsSubmitting(false);
      setErrorMessage(
        'EmailJS configuration missing: Please set VITE_EMAILJS_PUBLIC_KEY in your .env file.'
      );
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name.trim(),
          from_name: formData.name.trim(),
          email: formData.email.trim(),
          reply_to: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Inquiry',
          message: formData.message.trim(),
          to_name: PORTFOLIO_DATA.name,
        },
        publicKey
      );
      setSubmitted(true);
    } catch (err: unknown) {
      console.error('Contact form submission error:', err);
      const errDetail = err && typeof err === 'object' && 'text' in err ? String(err.text) : '';
      setErrorMessage(
        errDetail || 'Failed to send message via EmailJS. Please verify your EmailJS keys or try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <section id="contact" className="py-20 relative bg-tech-grid/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="left" className="flex flex-col items-start mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s build something together.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
            Have a project in mind, an internship opportunity, or want to discuss full-stack development? Feel free to reach out anytime.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-4" />
        </ScrollReveal>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          {/* Left Column: Direct Links & Info */}
          <ScrollReveal direction="left" delay={100} className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl glass-panel border border-white/[0.08] space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Get in Touch Directly</span>
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                I am currently in my 4th year studying Web Systems Technology at NEUST CICT and actively seeking internships and full-stack project collaborations.
              </p>

              {/* Email Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/[0.08] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Email Address</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-indigo-300 font-mono transition-colors block break-all"
                >
                  {PORTFOLIO_DATA.email}
                </a>
              </div>

              {/* Social Channels */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                  Find Me Online
                </span>
                <div className="grid grid-cols-1 gap-2.5">
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
                        className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-white/[0.06] hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded bg-white/[0.04] text-indigo-400 group-hover:text-cyan-400 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">
                              {social.label}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              {social.handle}
                            </div>
                          </div>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Contact Form */}
          <ScrollReveal direction="right" delay={150} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/[0.08]">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Fill out the form below to initiate a discussion.
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-left space-y-4 animate-fade-in">
                  <div className="flex items-center gap-3 text-emerald-400">
                    <div className="p-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Sent to {PORTFOLIO_DATA.email}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Thank you, <span className="font-semibold text-indigo-300">{formData.name}</span>. Your message regarding &ldquo;{formData.subject || 'Portfolio Inquiry'}&rdquo; has been sent directly to Jorald. I&apos;ll get back to you as soon as possible.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors inline-flex items-center gap-2 shadow-md shadow-indigo-600/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-slate-400 mb-1.5"
                      >
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alex Santos"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/[0.08] focus:border-indigo-500 text-white placeholder:text-slate-600 text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-slate-400 mb-1.5"
                      >
                        Email Address <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@example.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/[0.08] focus:border-indigo-500 text-white placeholder:text-slate-600 text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono text-slate-400 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Internship / Web Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/[0.08] focus:border-indigo-500 text-white placeholder:text-slate-600 text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-slate-400 mb-1.5"
                    >
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Jorald, I came across your portfolio and wanted to reach out regarding..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-white/[0.08] focus:border-indigo-500 text-white placeholder:text-slate-600 text-sm focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-indigo-600/25"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
