"use client";

import React from 'react';
import { Reveal } from '../animations/Reveal';
import { useCountUp } from '../../hooks/useCountUp';
import { stats } from '../../data/projects';

function Stat({ value, suffix, label, index }: {value: number;suffix: string;label: string;index: number;}) {
  const { ref, value: current } = useCountUp(value);
  return (
    <Reveal delay={index * 0.08}>
      <div className="rounded-2xl border border-white/10 bg-surface/40 p-6 text-center transition-colors hover:border-accent/30 sm:p-8">
        <span ref={ref} className="font-mono text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {current}
          <span className="text-accent">{suffix}</span>
        </span>
        <p className="mt-2 text-sm text-slate-400">{label}</p>
      </div>
    </Reveal>);

}

export function Achievements() {
  return (
    <section className="relative w-full py-16 sm:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) =>
          <Stat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} index={i} />
          )}
        </div>
      </div>
    </section>);

}