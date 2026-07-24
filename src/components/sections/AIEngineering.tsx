"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BotIcon, DatabaseIcon, GitBranchIcon, NetworkIcon, ShieldCheckIcon, WandSparklesIcon } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../animations/Reveal';
import { aiCapabilities } from '../../data/projects';

const icons = [BotIcon, DatabaseIcon, NetworkIcon, WandSparklesIcon, GitBranchIcon, ShieldCheckIcon];

const pipeline = ['Query', 'Embed', 'Retrieve', 'Re-rank', 'Generate', 'Cite'];

export function AIEngineering() {
  return (
    <section id="ai" className="relative w-full overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-surface/20" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[120px]" />
      

      <div className="relative mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="AI Engineering"
          title="Production AI, done right"
          description="I build LLM-powered systems that are grounded, observable, and reliable — not demos, but products people depend on." />
        

        {/* RAG pipeline visualization */}
        <Reveal className="mt-14">
          <div className="rounded-2xl border border-white/10 bg-base/60 p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500">
              <span className="h-2 w-2 rounded-full bg-success" />
              RAG pipeline
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {pipeline.map((step, i) =>
              <React.Fragment key={step}>
                  <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-lg border border-white/10 bg-surface px-4 py-2 font-mono text-sm text-white">
                  
                    {step}
                  </motion.span>
                  {i < pipeline.length - 1 &&
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.05 }}
                  className="text-accent">
                  
                      →
                    </motion.span>
                }
                </React.Fragment>
              )}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((cap, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={cap.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-white/10 bg-surface/40 p-6 transition-colors hover:border-accent/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-base text-accent transition-colors group-hover:border-accent/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-medium text-white">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{cap.description}</p>
                </div>
              </Reveal>);

          })}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/10 bg-base/40 px-6 py-5">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">Providers</span>
            {['OpenAI', 'Claude', 'Gemini', 'LangChain', 'LangGraph', 'Pinecone', 'Qdrant'].map((p) =>
            <span key={p} className="rounded-md border border-white/10 px-3 py-1 text-sm text-slate-300">
                {p}
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}