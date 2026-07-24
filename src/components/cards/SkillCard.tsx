"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { SkillCategory } from '../../data/skills';

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCard({ category, index }: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: -200, y: -200, active: false });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 p-6">
      
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: spot.active ?
          `radial-gradient(220px circle at ${spot.x}px ${spot.y}px, rgba(56,189,248,0.10), transparent 70%)` :
          'transparent'
        }} />
      

      <div className="relative">
        <div className="flex items-baseline justify-between">
          <h3 className="text-base font-semibold text-white">{category.title}</h3>
          <span className="font-mono text-xs text-slate-600">
            {String(category.skills.length).padStart(2, '0')}
          </span>
        </div>
        <p className="mt-1.5 text-sm text-slate-400">{category.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {category.skills.map((skill) =>
          <span
            key={skill}
            className="group/tag relative cursor-default rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[13px] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.06] hover:text-white">
            
              {skill}
            </span>
          )}
        </div>
      </div>
    </motion.div>);

}