

import React from 'react';

/**
 * Static-but-alive background: a masked grid with slow-moving primary glows.
 * Deliberately subtle — no neon, no heavy gradients.
 */
export function AnimatedGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="grid-mask absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
          'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />
      
      <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-[-5%] top-[30%] h-[320px] w-[320px] rounded-full bg-accent/[0.06] blur-[120px]" />
    </div>);

}