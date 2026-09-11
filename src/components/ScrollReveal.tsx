import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'none';
  delay?: number; // delay in milliseconds
  duration?: number; // duration in milliseconds
  className?: string;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 750,
  className = '',
  threshold = 0.12,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Continuous observation: enters view -> appears, exits view -> slowly disappears
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '-30px 0px -30px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [threshold]);

  const getTransformClasses = () => {
    if (isVisible) {
      return 'translate-x-0 translate-y-0 opacity-100 scale-100';
    }

    switch (direction) {
      case 'left':
        return '-translate-x-14 md:-translate-x-20 opacity-0';
      case 'right':
        return 'translate-x-14 md:translate-x-20 opacity-0';
      case 'up':
        return 'translate-y-12 opacity-0';
      default:
        return 'opacity-0 scale-95';
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity] transform ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
