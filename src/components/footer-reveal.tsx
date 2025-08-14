'use client';

import { useEffect, useRef } from 'react';

interface FooterRevealProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}

export default function FooterReveal({ children, footer }: FooterRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (containerRect.top <= 0) {
        const scrolledPast = Math.abs(containerRect.top);
        const maxScroll = windowHeight;

        const progress = Math.min(scrolledPast / maxScroll, 1);

        const translateY = progress * windowHeight;
        content.style.transform = `translateY(-${translateY}px)`;
      } else {
        content.style.transform = 'translateY(0px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-screen overflow-hidden">
      <div className="fixed inset-0 z-0">{footer}</div>

      <div ref={contentRef} className="relative z-10 bg-background">
        {children}
      </div>
    </div>
  );
}
