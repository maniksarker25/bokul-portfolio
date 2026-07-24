"use client";

import React from 'react';
import { GraduationCapIcon } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../animations/Reveal';
import { education } from '../../data/experience';

export function Education() {
  return (
    <section id="education" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <div className="mt-14">
          {education.map((edu) =>
          <Reveal key={edu.school}>
              <div className="relative flex gap-6 rounded-2xl border border-white/10 bg-surface/40 p-6 sm:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-base text-accent">
                  <GraduationCapIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-xs text-accent">
                      {edu.year}
                    </span>
                  </div>
                  <p className="mt-1 text-slate-300">{edu.field}</p>
                  <p className="mt-1 text-sm text-slate-500">{edu.school}</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}