"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  download?: boolean;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  download,
  ariaLabel
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
  'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base';
  const styles =
  variant === 'primary' ?
  'bg-primary text-white hover:bg-primary-soft shadow-[0_8px_30px_-8px_rgba(37,99,235,0.6)]' :
  'border border-white/15 bg-white/[0.02] text-white hover:border-white/30 hover:bg-white/[0.06]';

  const content =
  <motion.div
    ref={ref}
    onMouseMove={handleMove}
    onMouseLeave={reset}
    animate={{ x: pos.x, y: pos.y }}
    transition={{ type: 'spring', stiffness: 250, damping: 18, mass: 0.4 }}
    className="inline-flex">
    
      <span className={cn(base, styles, className)}>{children}</span>
    </motion.div>;


  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        aria-label={ariaLabel}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        
        {content}
      </a>);

  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>);

}