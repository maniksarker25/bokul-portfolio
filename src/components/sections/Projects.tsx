"use client";

import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';
import { ProjectCard } from '../cards/ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work"
          description="A few systems I've designed and shipped — each solving a real, hard problem in production." />
        

        <div className="mt-14 space-y-8">
          {projects.map((project, i) =>
          <ProjectCard key={project.title} project={project} index={i} />
          )}
        </div>
      </div>
    </section>);

}