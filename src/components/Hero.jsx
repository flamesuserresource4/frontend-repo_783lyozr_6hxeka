import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Decorative gradients (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-600/40 to-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-40 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-600/40 to-fuchsia-500/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {/* Top bar */}
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="font-semibold tracking-wide text-sm uppercase text-white/80">MECHxSOFT</div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm backdrop-blur hover:bg-white/20 transition"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm backdrop-blur hover:bg-white/20 transition"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="pointer-events-auto mx-auto w-full max-w-6xl px-6">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <Rocket size={14} /> Mechanical Engineer • Software Developer
            </span>
            <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-6xl">
              Building bold digital experiences with a mechanical mindset
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">
              I’m a mechanical engineer with strong software chops (10 months industry, 2 internships).
              I design systems that are robust, efficient, and beautiful — from 3D interactions to full-stack apps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => scrollToId('projects')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToId('experience')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                My Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
