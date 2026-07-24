"use client";

import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollProgress } from '../components/layout/ScrollProgress';
import { BackToTop } from '../components/layout/BackToTop';
import { LoadingScreen } from '../components/layout/LoadingScreen';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { AIEngineering } from '../components/sections/AIEngineering';
import { Education } from '../components/sections/Education';
import { Achievements } from '../components/sections/Achievements';
import { Contact } from '../components/sections/Contact';

export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-base text-white">
      {/* Global noise texture */}
      <div
        aria-hidden
        className="noise-layer pointer-events-none fixed inset-0 z-[90] opacity-[0.025] mix-blend-soft-light" />
      
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AIEngineering />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
