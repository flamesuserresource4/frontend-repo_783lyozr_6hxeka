import React, { useRef } from 'react';
import { Code2, Wrench } from 'lucide-react';

const SkillPill = ({ label }) => (
  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur hover:bg-white/20 transition">
    {label}
  </span>
);

const Skills = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--tx', `${x * 10}px`);
    el.style.setProperty('--ty', `${y * 10}px`);
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#0a0a0b] py-20 text-white"
      style={{
        transform: 'translate(var(--tx, 0), var(--ty, 0))',
        transition: 'transform 120ms ease-out',
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-600/30 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 p-3">
            <Code2 className="text-indigo-300" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Software Toolkit</h2>
            <p className="text-sm text-white/70">Modern stacks for building reliable, immersive interfaces</p>
          </div>
        </div>
        <div className="mb-12 flex flex-wrap gap-2">
          {['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion', 'Three.js/Spline', 'FastAPI', 'Python', 'Node.js', 'MongoDB', 'REST APIs', 'Git/GitHub'].map((s) => (
            <SkillPill key={s} label={s} />
          ))}
        </div>

        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3">
            <Wrench className="text-blue-300" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Mechanical Foundations</h2>
            <p className="text-sm text-white/70">Practical engineering that informs my approach to software</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {['CAD', 'SolidWorks', 'FEA Basics', 'Thermodynamics', 'Mechanisms', 'DFM/DFA', 'Problem Solving', 'Systems Thinking'].map((s) => (
            <SkillPill key={s} label={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
