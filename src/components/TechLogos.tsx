import React from 'react';
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiAngular,
  SiIonic,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiCplusplus,
  SiGit,
} from 'react-icons/si';
import { FaCss3Alt, FaJava } from 'react-icons/fa6';

export interface LogoProps {
  className?: string;
  size?: number | string;
}

export const HtmlLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiHtml5 size={size} className={`text-[#E34F26] drop-shadow-sm ${className}`} />
);

export const CssLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <FaCss3Alt size={size} className={`text-[#1572B6] drop-shadow-sm ${className}`} />
);

export const JsLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative inline-flex items-center justify-center rounded-[4px] bg-[#000000] overflow-hidden drop-shadow-sm ${className}`}
  >
    <SiJavascript size={size} className="text-[#F7DF1E]" />
  </div>
);

export const ReactLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiReact size={size} className={`text-[#61DAFB] drop-shadow-sm ${className}`} />
);

export const NextLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative inline-flex items-center justify-center rounded-full bg-white drop-shadow-sm ${className}`}
  >
    <SiNextdotjs size={size} className="text-black" />
  </div>
);

export const TailwindLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiTailwindcss size={size} className={`text-[#06B6D4] drop-shadow-sm ${className}`} />
);

export const IonicAngularLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiAngular size={size} className={`text-[#DD0031] drop-shadow-sm ${className}`} />
);

export const AngularLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiAngular size={size} className={`text-[#DD0031] drop-shadow-sm ${className}`} />
);

export const IonicLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiIonic size={size} className={`text-[#3880FF] drop-shadow-sm ${className}`} />
);

export const PhpLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiPhp size={size} className={`text-[#777BB4] drop-shadow-sm ${className}`} />
);

export const LaravelLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiLaravel size={size} className={`text-[#FF2D20] drop-shadow-sm ${className}`} />
);

export const NodeLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiNodedotjs size={size} className={`text-[#5FA04E] drop-shadow-sm ${className}`} />
);

export const MysqlLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiMysql size={size} className={`text-[#4479A1] drop-shadow-sm ${className}`} />
);

export const CppLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiCplusplus size={size} className={`text-[#00599C] drop-shadow-sm ${className}`} />
);

export const JavaLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <FaJava size={size} className={`text-[#E76F00] drop-shadow-sm ${className}`} />
);

export const GitLogo: React.FC<LogoProps> = ({ size = 36, className = '' }) => (
  <SiGit size={size} className={`text-[#F05032] drop-shadow-sm ${className}`} />
);
