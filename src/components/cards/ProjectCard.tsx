"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, GithubIcon, LayersIcon, TargetIcon } from 'lucide-react';
import type { Project } from '../../data/projects';
import { TechChip } from '../ui/TechChip';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reversed = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-surface/40 p-6 transition-colors hover:border-white/20 lg:grid-cols-2 lg:p-8">
      
      {/* Preview */}
      <div className={`relative overflow-hidden rounded-2xl border border-white/10 ${reversed ? 'lg:order-2' : ''}`}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy" />
        
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center ${reversed ? 'lg:order-1' : ''}`}>
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="mt-5 space-y-3">
          <div className="flex gap-3">
            <LayersIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p className="text-sm leading-relaxed text-slate-300">
              <span className="text-slate-500">Architecture — </span>
              {project.architecture}
            </p>
          </div>
          <div className="flex gap-3">
            <TargetIcon className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <p className="text-sm leading-relaxed text-slate-300">
              <span className="text-slate-500">Challenge solved — </span>
              {project.challenge}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) =>
          <TechChip key={s} label={s} />
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-base transition-colors hover:bg-slate-200">
            
            Live Demo <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:border-white/30 hover:bg-white/[0.05]">
            
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </motion.article>);

}