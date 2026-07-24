"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      
      <nav
        className={cn(
          'flex w-full max-w-content items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300',
          scrolled ?
          'border-white/10 bg-surface/70 backdrop-blur-xl' :
          'border-transparent bg-transparent'
        )}>
        
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white">
          
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs">BS</span>
          <span className="hidden sm:inline">bokul.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) =>
          <li key={item.href}>
              <a
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white">
              
                {item.label}
              </a>
            </li>
          )}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-base transition-colors hover:bg-slate-200 md:inline-flex">
          
          Let's talk
        </a>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}>
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="absolute left-4 right-4 top-[72px] rounded-2xl border border-white/10 bg-surface/95 p-3 backdrop-blur-xl md:hidden">
          
            <ul className="flex flex-col">
              {siteConfig.nav.map((item) =>
            <li key={item.href}>
                  <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white">
                
                    {item.label}
                  </a>
                </li>
            )}
              <li>
                <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-white">
                
                  Let's talk
                </a>
              </li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

}