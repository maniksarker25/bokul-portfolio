"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  Loader2Icon,
  MailIcon,
  MapPinIcon,
  SendIcon } from
'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../animations/Reveal';
import { MagneticButton } from '../ui/MagneticButton';
import { siteConfig } from '../../config/site';

type Status = 'idle' | 'submitting' | 'success';

interface FormState {
  name: string;
  email: string;
  message: string;
}
type Errors = Partial<Record<keyof FormState, string>>;

const validate = (form: FormState): Errors => {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name';
  if (!form.email.trim()) errors.email = 'Please enter your email';else
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.message.trim()) errors.message = 'Tell me a little about your project';
  return errors;
};

const fieldBase =
'w-full rounded-xl border bg-base/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40';

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1300);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a role, a product, or a hard problem in mind? I'd love to hear about it." />
        

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-surface/40 p-6 sm:p-8">
              <div className="space-y-5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-base/40 p-4 transition-colors hover:border-accent/30">
                  
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-accent">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Email</span>
                    <span className="text-sm text-white group-hover:text-accent">{siteConfig.email}</span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-base/40 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-accent">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Location</span>
                    <span className="text-sm text-white">{siteConfig.location}</span>
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:border-white/30 hover:bg-white/[0.05]">
                    
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:border-white/30 hover:bg-white/[0.05]">
                    
                    <LinkedinIcon className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
                <div className="mt-3">
                  <MagneticButton href={siteConfig.resumeUrl} download variant="primary">
                    <DownloadIcon className="h-4 w-4" /> Download Resume
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-surface/40 p-6 sm:p-8">
              {status === 'success' ?
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center py-12 text-center">
                
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-success/30 bg-success/10 text-success">
                    <CheckCircle2Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-white">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-400">
                    Thanks for reaching out — I'll get back to you within 1–2 business days.
                  </p>
                  <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-accent hover:underline">
                  
                    Send another message
                  </button>
                </motion.div> :

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm text-slate-400">
                      Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Jane Doe"
                    className={`${fieldBase} ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                    aria-invalid={!!errors.name} />
                  
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm text-slate-400">
                      Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="jane@company.com"
                    className={`${fieldBase} ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
                    aria-invalid={!!errors.email} />
                  
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm text-slate-400">
                      Message
                    </label>
                    <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about your project or role…"
                    className={`${fieldBase} resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10'}`}
                    aria-invalid={!!errors.message} />
                  
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-soft disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  
                    {status === 'submitting' ?
                  <>
                        <Loader2Icon className="h-4 w-4 animate-spin" /> Sending…
                      </> :

                  <>
                        Send Message <SendIcon className="h-4 w-4" />
                      </>
                  }
                  </button>
                </form>
              }
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}