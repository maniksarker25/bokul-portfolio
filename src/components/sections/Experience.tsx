"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../animations/Reveal';
import { TechChip } from '../ui/TechChip';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of shipping"
          description="Five years building and scaling production software across the full stack." />
        

        <div className="relative mt-16">
          {/* Timeline spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) =>
            <div key={job.role} className="relative md:grid md:grid-cols-2 md:gap-12">
                {/* Node */}
                <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 top-2 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-accent/50 bg-base md:left-1/2 md:-translate-x-1/2">
                
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </motion.span>

                <div
                className={
                i % 2 === 0 ?
                'md:col-start-1 md:text-right' :
                'md:col-start-2'
                }>
                
                  <Reveal y={30}>
                    <div className="ml-8 rounded-2xl border border-white/10 bg-surface/40 p-6 transition-colors hover:border-white/20 md:ml-0">
                      <div className={`flex items-center gap-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-base text-accent">
                          <BriefcaseIcon className="h-4 w-4" />
                        </span>
                        <div className={i % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                          <span className="font-mono text-xs text-accent">{job.duration}</span>
                        </div>
                        {job.current &&
                      <span className="ml-auto rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 text-[11px] font-medium text-success">
                            Current
                          </span>
                      }
                      </div>

                      <p className={`mt-4 text-sm leading-relaxed text-slate-400 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                        {job.summary}
                      </p>

                      <ul className={`mt-4 space-y-2 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                        {job.responsibilities.map((r) =>
                      <li key={r} className={`flex gap-2 text-sm text-slate-300 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                            <span>{r}</span>
                          </li>
                      )}
                      </ul>

                      <div className={`mt-5 flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {job.stack.map((s) =>
                      <TechChip key={s} label={s} />
                      )}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}