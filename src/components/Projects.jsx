import React from 'react';

const projects = [
  {
    title: '3D Interactive Portfolio',
    desc: 'This site — realtime 3D hero, parallax, and motion on a dark, vibrant palette.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Full‑stack Dashboard',
    desc: 'FastAPI backend with a modern React front-end for analytics & insights.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    link: '#',
  },
  {
    title: 'Mechanics Visualizer',
    desc: 'Interactive simulations to teach kinematics and system dynamics.',
    tags: ['Three.js', 'Python', 'UX'],
    link: '#',
  },
];

const ProjectCard = ({ p }) => (
  <a
    href={p.link}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
  >
    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-2xl transition group-hover:scale-125" />
    <h3 className="text-lg font-semibold">{p.title}</h3>
    <p className="mt-2 text-sm text-white/80">{p.desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {p.tags.map((t) => (
        <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
          {t}
        </span>
      ))}
    </div>
  </a>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0a0a0b] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Projects</h2>
          <p className="text-sm text-white/70">Selected work blending mechanical insight with software craft</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
