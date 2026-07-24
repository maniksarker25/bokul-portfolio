"use client";

import React from 'react';
import { SectionHeading } from '../shared/SectionHeading';
import { SkillCard } from '../cards/SkillCard';
import { skillCategories } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 sm:py-32">
      {/* subtle surface backdrop */}
      <div aria-hidden className="absolute inset-0 bg-surface/20" />
      <div className="relative mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A deep, modern toolkit"
          description="Technologies I use to design, build, and operate production software — organized by discipline." />
        

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) =>
          <SkillCard key={category.title} category={category} index={i} />
          )}
        </div>
      </div>
    </section>);

}