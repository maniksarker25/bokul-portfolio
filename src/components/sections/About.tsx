"use client";

import React from 'react';
import { CpuIcon, GaugeIcon, LayersIcon, SparklesIcon } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../animations/Reveal';
import { siteConfig } from '../../config/site';

const values = [
{
  icon: LayersIcon,
  title: 'Systems thinking',
  description: 'I design for the whole lifecycle — from data model to deploy — so systems stay simple as they scale.'
},
{
  icon: GaugeIcon,
  title: 'Performance first',
  description: 'Fast is a feature. I measure, profile, and optimize until experiences feel instant.'
},
{
  icon: CpuIcon,
  title: 'AI in production',
  description: 'I build LLM and RAG systems that are grounded, observable, and dependable under real load.'
},
{
  icon: SparklesIcon,
  title: 'Craft & detail',
  description: 'The last 10% is where trust is earned. I sweat spacing, states, and micro-interactions.'
}];


export function About() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineering that earns trust"
          description="I care about the details that compound — clean architecture, thoughtful UX, and software that holds up in production." />
        

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-slate-300">{siteConfig.summary}</p>
            <p className="mt-6 leading-relaxed text-slate-400">
              My current focus is at the intersection of full-stack engineering and applied AI —
              integrating LLMs, designing retrieval systems, and shipping products that feel
              effortless while being rigorously engineered underneath.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="font-mono text-2xl font-semibold text-white">5+</div>
                <div className="mt-1 text-sm text-slate-400">Years of experience</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="font-mono text-2xl font-semibold text-white">Full Stack</div>
                <div className="mt-1 text-sm text-slate-400">Frontend · Backend · AI</div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((value, i) =>
            <Reveal key={value.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/30 hover:bg-white/[0.04]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-base text-accent transition-colors group-hover:border-accent/40">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-medium text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{value.description}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>);

}