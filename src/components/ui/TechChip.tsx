"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TechChipProps {
  label: string;
  className?: string;
}

export function TechChip({ label, className }: TechChipProps) {
  return (
    <motion.span
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'group/chip relative inline-flex cursor-default items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-accent/40 hover:text-white',
        className
      )}>
      
      <span className="h-1.5 w-1.5 rounded-full bg-slate-600 transition-colors group-hover/chip:bg-accent" />
      {label}
    </motion.span>);

}