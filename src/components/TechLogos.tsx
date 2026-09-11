import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
}

export const HtmlLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
    <path fill="#E44D26" d="M107.6 460.5L74.9 92.5h362.2l-32.7 367.9L256 504.5l-148.4-44z" />
    <path fill="#F16529" d="M256 470.6V126.9h148.8l-26.6 299.7L256 470.6z" />
    <path fill="#EBEBEB" d="M256 220.2h-63.1l-4.4-49.3H256v-49.1H135.5l12.9 144.9H256v-46.5zm0 134.4l-.5.1-41-11.1-2.6-29.4h-49.3l5.2 58.7 88.2 24.5.5-.1v-42.7z" />
    <path fill="#FFFFFF" d="M256 121.8v49.1h66.5l-6.3 70.3H256v46.5h62.3l-5.9 66.8-56.4 15.2v42.8l99.3-27.5.7-7.4 11.3-126.4 2.4-26.6 2.3-26.7H256z" />
  </svg>
);

export const CssLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
    <path fill="#264DE4" d="M107.6 460.5L74.9 92.5h362.2l-32.7 367.9L256 504.5l-148.4-44z" />
    <path fill="#2965F1" d="M256 470.6V126.9h148.8l-26.6 299.7L256 470.6z" />
    <path fill="#EBEBEB" d="M256 220.2h-63.1l-4.4-49.3H256v-49.1H135.5l12.9 144.9H256v-46.5zm-59.5 50.8l4.4 49.2 55.1 14.9v42.8l-99.3-27.5-6.5-73.4h46.3z" />
    <path fill="#FFFFFF" d="M256 121.8v49.1h124.9l-4.4 49.3H256v46.5h66.3l-6.3 70.3-56 15.2v42.8l99.3-27.5 13.7-153.2.3-2.5 2.1-23.7.3-3.1 2.3-25.9H256z" />
  </svg>
);

export const JsLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 630 630" className={className}>
    <rect width="630" height="630" fill="#F7DF1E" rx="70" />
    <path d="M423.2 492.2c12.7 20.7 29.2 35.9 58.4 35.9 24.5 0 40.2-12.3 40.2-29.2 0-20.3-16.1-27.5-43.1-39.3l-14.8-6.3c-42.7-18.2-71.1-41-71.1-89.2 0-44.4 33.8-77.9 86.7-77.9 37.6 0 64.7 13.1 83.3 45.7l-46.1 29.6c-10.1-18.2-21.1-25.4-37.2-25.4-16.5 0-27.1 10.6-27.1 24.5 0 17.3 10.6 24.5 35.1 35.1l14.8 6.3c51.2 22 80.8 44 80.8 92.2 0 52.9-41.4 82.5-98.1 82.5-54.6 0-90.1-26.2-106.6-60.9l44.8-23.9zm-209.5 4.7c8.5 14.8 16.1 27.5 34.7 27.5 17.8 0 29.2-7.2 29.2-34.7V291.6h58.8v198.8c0 58.4-34.3 85-84.6 85-45.7 0-72.3-23.7-85.4-52.5l47.3-26z" />
  </svg>
);

export const ReactLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.232 23 20.463" className={className}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 180 180" className={className}>
    <circle cx="90" cy="90" r="85" fill="#000000" stroke="#333333" strokeWidth="6" />
    <path
      fill="url(#next-grad)"
      d="M149.5 148.5L78.8 55H60v70h16.7V77.7l64.2 84.8c2.9-1.9 5.8-4 8.6-6.4z"
    />
    <path fill="#FFFFFF" d="M120 55h16.7v45.2L120 78.4V55z" />
    <defs>
      <linearGradient id="next-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const TailwindLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 7.95 10.65 8.25C11.6667 8.50417 12.3917 9.24167 13.1917 10.0542C14.4917 11.3792 16 12.9 19.5 12.9C21.9 12.9 23.4 11.7 24 9.3C23.1 10.5 22.05 10.95 20.85 10.65C19.8333 10.3958 19.1083 9.65833 18.3083 8.84583C17.0083 7.52083 15.5 6 12 6ZM4.5 13.5C2.1 13.5 0.6 14.7 0 17.1C0.9 15.9 1.95 15.45 3.15 15.75C4.16667 16.0042 4.89167 16.7417 5.69167 17.5542C6.99167 18.8792 8.5 20.4 12 20.4C14.4 20.4 15.9 19.2 16.5 16.8C15.6 18 14.55 18.45 13.35 18.15C12.3333 17.8958 11.6083 17.1583 10.8083 16.3458C9.50833 15.0208 8 13.5 4.5 13.5Z"
      fill="#38BDF8"
    />
  </svg>
);

export const IonicAngularLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 250 250" className={className}>
    <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
    <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
    <polygon points="125,52.1 66,183.8 88.3,183.8 100.1,154.5 125,154.5 149.9,154.5 161.7,183.8 184,183.8" fill="#FFFFFF" />
    <polygon points="125,97.7 110.4,133.5 125,133.5 139.6,133.5" fill="#3880FF" />
  </svg>
);

export const PhpLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
    <ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4" />
    <path
      fill="#FFFFFF"
      d="M33 50h14c6 0 10 3 10 9s-4 9-10 9h-7l-3 10H27l6-28zm10 12h5c2.5 0 4-1 4-3s-1.5-3-4-3h-5l0 6zm20-12h10l-6 28H57l6-28zm6 11h9c3 0 5 1 5 4s-2 5-5 5h-9l0-9zm20-11h14c6 0 10 3 10 9s-4 9-10 9h-7l-3 10H83l6-28zm10 12h5c2.5 0 4-1 4-3s-1.5-3-4-3h-5l0 6z"
    />
  </svg>
);

export const LaravelLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 256 261" className={className}>
    <path
      fill="#FF2D20"
      d="M239.5 56.4L137.9 1.1c-6.1-3.3-13.6-3.3-19.8 0L6.6 62.5c-4.1 2.2-6.6 6.5-6.6 11.2v113.8c0 4.6 2.5 8.9 6.6 11.2l99.5 54.1c6.1 3.3 13.6 3.3 19.8 0l113.6-61.8c4.1-2.2 6.6-6.5 6.6-11.2V67.6c0-4.7-2.5-9-6.6-11.2zm-123.6 177L26 184.2V88.8l89.9 48.9v95.7zm10.7-106.9L40 79.1l88.1-47.9 86.8 47.2-88.2 48.1zm93.6 46.8l-83-45.1V82.5l83 45.3v49.1z"
    />
  </svg>
);

export const NodeLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <path
      fill="#5FA04E"
      d="M16 2.5L2.8 10.1v15.2L16 32.9l13.2-7.6V10.1L16 2.5zm-.1 3.6l10 5.8v11.5l-10 5.8-10-5.8V11.9l10-5.8z"
    />
    <path
      fill="#FFFFFF"
      d="M19.8 19.5c0 1.9-1.3 3.1-3.6 3.1-1.6 0-3-.6-3.8-1.5l1.6-1.6c.6.6 1.4 1 2.2 1 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-2-1.5-2.2-.6-3.4-1.4-3.4-3.3 0-1.8 1.4-3.1 3.5-3.1 1.4 0 2.6.5 3.4 1.3l-1.5 1.7c-.5-.5-1.1-.9-1.9-.9-.9 0-1.4.5-1.4 1.1 0 .7.6 1.1 2 1.5 2.1.6 3.4 1.5 3.4 3.4z"
    />
  </svg>
);

export const MysqlLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
    <path
      fill="#00758F"
      d="M32 4C16.5 4 4 16.5 4 32s12.5 28 28 28 28-12.5 28-28S47.5 4 32 4zm14.2 37.8c-2.4 1.5-6.2 2.2-10.2 2.2-9 0-15-4-15-12.5 0-9.2 7-15.5 17.5-15.5 3.2 0 6 .6 7.7 1.4v6.5c-1.8-1-4.2-1.7-6.8-1.7-5.5 0-9.2 3.2-9.2 8.4 0 4.8 3.2 7.2 8.2 7.2 2.5 0 5-.6 6.8-1.5l1 5.5z"
    />
    <path fill="#F29111" d="M48 24c-2.5-3-6-5-10-6 2 2 3.5 5 4.5 8 2-1 4-1.5 5.5-2z" />
  </svg>
);

export const CppLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
    <polygon points="64,6 116,36 116,96 64,126 12,96 12,36" fill="#00599C" />
    <polygon points="64,14 108,39 108,89 64,114 20,89 20,39" fill="#004482" />
    <path
      fill="#FFFFFF"
      d="M58 50c-6-4-15-3-20 2-5 6-5 16 0 22 5 5 14 6 20 2v10c-11 5-25 3-33-5-9-9-9-24 0-33 8-8 22-10 33-5V50zm18 10h5v-5h5v5h5v5h-5v5h-5v-5h-5v-5zm22 0h5v-5h5v5h5v5h-5v5h-5v-5h-5v-5z"
    />
  </svg>
);

export const JavaLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
    <path
      fill="#5382A1"
      d="M48 95c12 2 24 2 35-1 4-1 7-3 8-5 1-2-1-3-4-3-12-1-24 0-35 3-5 1-8 3-7 4 0 1 1 2 3 2zm-5 13c14 3 29 2 43-2 6-2 10-4 10-7s-3-4-9-4c-15 0-30 2-44 5-6 2-7 5-6 6 1 1 3 2 6 2zm1-27c10 2 21 2 32-1 4-1 6-3 6-4s-2-2-5-2c-10 0-21 1-31 3-5 1-7 2-6 3 0 1 2 1 4 1z"
    />
    <path
      fill="#E76F00"
      d="M62 18c6 8 3 17-2 24-4 6-7 12-5 19 1 3 3 6 6 8-5-1-9-4-10-8-3-8 1-16 5-23 4-6 6-12 6-20zM75 35c4 5 3 11-1 16-3 4-5 8-4 13 1 2 2 4 4 5-3-1-6-3-7-6-2-5 1-11 4-15 3-4 4-8 4-13z"
    />
  </svg>
);

export const GitLogo: React.FC<LogoProps> = ({ size = 32, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
    <path
      fill="#F05032"
      d="M125 56.6L71.4 3a10.4 10.4 0 0 0-14.7 0L44 15.7l18.5 18.5a12.3 12.3 0 0 1 15.6 15.6l17.8 17.8a12.3 12.3 0 1 1-7.4 7.4L71.8 58.2v32.2a12.3 12.3 0 1 1-10.4 0V56.6a12.3 12.3 0 0 1-6.6-16.1L36.6 22 3 55.6a10.4 10.4 0 0 0 0 14.7l53.6 53.6a10.4 10.4 0 0 0 14.7 0L125 71.3a10.4 10.4 0 0 0 0-14.7z"
    />
  </svg>
);
