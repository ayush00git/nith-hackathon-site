import React from 'react';

export default function Timeline() {
  const phases = [
    {
      title: 'Phase 1: Registration',
      short: 'Call for participation through portal.',
    },
    {
      title: 'Phase 2: Evaluation 1',
      short:
        'Presentation for shortlisting top 40–50 teams based on innovation and feasibility of solutions. (Online)',
    },
    {
      title: 'Phase 3: Prototype Development (Evaluation 2)',
      short:
        'Teams develop prototypes with mentorship support. Mid-term evaluation shortlists top 20–30 teams. (Online) — Presentations and DEMO',
    },
    {
      title: 'Phase 4: Final Evaluation & Presentation',
      short:
        'Finalists present working solutions before a panel of judges. Winners are selected. (IIT Jammu) — 20–30 Teams',
    },
  ];

  return (
    <section className="py-12 px-6 sm:px-8 lg:px-0 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Hackathon Timeline and Structure:</h2>
      </div>
      <p className="mt-4 text-neutral-600 max-w-3xl">
        The hackathon will be conducted over a period of 5 months with three rounds of evaluation.
      </p>

      <ul className="mt-8 space-y-6">
        {phases.map((p, i) => (
          <li key={i} className="flex items-start gap-6">
            <div>
              <div className="text-slate-900 font-semibold text-base md:text-lg">
                {p.title} <span className="font-normal text-neutral-600">– {p.short}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
