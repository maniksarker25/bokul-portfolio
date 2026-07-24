"use client";

import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-base">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-sm text-slate-400">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-[10px] text-white">BS</span>
          {siteConfig.name}
        </div>

        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. Designed & built with care.
        </p>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent/40 hover:text-white">
            
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent/40 hover:text-white">
            
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-accent/40 hover:text-white">
            
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>);

}