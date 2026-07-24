import React from 'react';
import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Senior Full Stack Engineer Portfolio | Bokul Sarker',
  description: 'Design and ship scalable web applications, robust APIs, and production-grade AI systems — with an obsession for performance, clarity, and craft.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
