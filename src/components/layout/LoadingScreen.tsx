"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done &&
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-base">
        
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4">
          
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary font-mono text-lg font-semibold text-white">
              BS
            </span>
            <div className="h-px w-32 overflow-hidden bg-white/10">
              <motion.div
              className="h-full bg-accent"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }} />
            
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}