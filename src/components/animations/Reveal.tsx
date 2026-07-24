"use client";

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '../../lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
}

const build = (y: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
  }
});

export function Reveal({ children, className, delay = 0, y = 24, once = true, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={build(y, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}>
      
      {children}
    </MotionTag>);

}