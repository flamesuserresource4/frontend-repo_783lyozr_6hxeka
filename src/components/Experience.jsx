import React from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ title, company, period, bullets }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-fuchsia-500/0 to-indigo-500/0 opacity-0 transition group-hover:opacity-20" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-white/70">{company} • {period}</p>
    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/80">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-[#0b0c10] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 p-3">
            <Briefcase className="text-fuchsia-300" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
            <p className="text-sm text-white/70">10 months in industry • 2 internships</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ExperienceItem
            title="Software Developer"
            company="Industry Role"
            period="10 months"
            bullets={[
              'Built interactive, performant UIs with React and modern tooling.',
              'Collaborated cross-functionally, shipping features on tight timelines.',
              'Optimized components for accessibility, responsiveness, and speed.',
            ]}
          />
          <ExperienceItem
            title="Engineering Intern"
            company="Internship #1"
            period="3-6 months"
            bullets={[
              'Prototyped data visualizations and dashboards from mechanical datasets.',
              'Automated workflows using Python/FastAPI backends.',
            ]}
          />
          <ExperienceItem
            title="Software Intern"
            company="Internship #2"
            period="3-6 months"
            bullets={[
              'Contributed features end-to-end, from API to interactive frontends.',
              'Improved code quality with testing and reviews.',
            ]}
          />
          <ExperienceItem
            title="Mech Design + Tools"
            company="Projects & Labs"
            period="Ongoing"
            bullets={[
              'Applied CAD/FEA fundamentals to product prototypes.',
              'Bridged physical constraints with robust software systems.',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
