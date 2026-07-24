"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownIcon, DownloadIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { AnimatedGrid } from '../animations/AnimatedGrid';
import { MagneticButton } from '../ui/MagneticButton';
import { siteConfig } from '../../config/site';
import { heroTech } from '../../data/skills';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 15 });
  const px = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 20 });
  const py = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="hero"
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-28 pb-16">
      
      <AnimatedGrid />

      <div className="relative z-10 mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for select engagements
            </span>
          </motion.div>

          <motion.p variants={item} className="mt-6 font-mono text-sm text-accent">
            Hi, I'm Bokul Sarker —
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            
            Senior Full Stack
            <br />
            <span className="text-slate-400">Engineer</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I design and ship scalable web applications, robust APIs, and production-grade
            AI systems — with an obsession for performance, clarity, and craft.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href={siteConfig.resumeUrl} download variant="primary">
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              <MailIcon className="h-4 w-4" />
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon className="h-4 w-4 text-accent" />
              {siteConfig.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Profile + floating tech */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm"
          style={{ perspective: 1000 }}>
          
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
            className="relative">
            
            <div className="absolute -inset-4 rounded-[2rem] border border-white/[0.06]" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface">
              <img
                src="/36089d04-2a5f-4196-9ddc-c330c354e89c.jpg"
                alt="Portrait of Bokul Sarker"
                className="aspect-[3/4] w-full object-cover"
                loading="eager" />
              
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
            </div>

            {/* Floating chips with parallax */}
            <motion.div
              style={{ x: px, y: py }}
              className="absolute -left-6 top-10 rounded-xl border border-white/10 bg-surface/90 px-3 py-2 font-mono text-xs text-accent backdrop-blur">
              
              &lt;/&gt; TypeScript
            </motion.div>
            <motion.div
              style={{ x: py, y: px }}
              className="absolute -right-5 top-1/3 rounded-xl border border-white/10 bg-surface/90 px-3 py-2 font-mono text-xs text-white backdrop-blur">
              
              Node.js
            </motion.div>
            <motion.div
              style={{ x: px, y: py }}
              className="absolute -bottom-4 left-6 rounded-xl border border-white/10 bg-surface/90 px-3 py-2 font-mono text-xs text-success backdrop-blur">
              
              AI · RAG
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee of tech */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.06] bg-base/40 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-10 pr-10">
            {[...heroTech, ...heroTech].map((tech, i) =>
            <span key={i} className="font-mono text-sm text-slate-600 whitespace-nowrap">
                {tech}
              </span>
            )}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-20 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-xs text-slate-500 transition-colors hover:text-white lg:flex"
        aria-label="Scroll to about">
        
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
      </a>
    </section>);

}