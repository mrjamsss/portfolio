export interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly platform: 'facebook' | 'github' | 'email' | 'linkedin';
  readonly label: string;
  readonly url: string;
  readonly handle: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
  readonly subtext?: string;
}

export interface SkillItem {
  readonly name: string;
  readonly iconName?: string;
  readonly tag?: string;
}

export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly skills: readonly SkillItem[];
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly tagline: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly featured: boolean;
  readonly highlightMetrics?: readonly string[];
}

export interface EducationItem {
  readonly degree: string;
  readonly specialization: string;
  readonly institution: string;
  readonly collegeDepartment: string;
  readonly period: string;
  readonly statusBadge: string;
  readonly description: string;
  readonly highlights: readonly string[];
}

export interface ExperienceItem {
  readonly role: string;
  readonly organization: string;
  readonly period: string;
  readonly type: 'academic' | 'organization' | 'project';
  readonly description: string;
  readonly highlights: readonly string[];
}

export interface DeveloperProfile {
  readonly name: string;
  readonly displayName: string;
  readonly nickname: string;
  readonly role: string;
  readonly studentStatus: string;
  readonly specialization: string;
  readonly institution: string;
  readonly college: string;
  readonly location: string;
  readonly availability: string;
  readonly headline: string;
  readonly heroBio: string;
  readonly aboutBio: string;
  readonly aboutFocusAreas: readonly string[];
  readonly email: string;
  readonly stats: readonly StatItem[];
  readonly socials: readonly SocialLink[];
  readonly skillCategories: readonly SkillCategory[];
  readonly projects: readonly Project[];
  readonly education: readonly EducationItem[];
  readonly experiences: readonly ExperienceItem[];
}
