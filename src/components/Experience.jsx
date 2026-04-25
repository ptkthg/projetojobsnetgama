import SectionTitle from './SectionTitle';

export default function Experience({ experiences }) {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Experiência profissional" />
      <div className="relative ml-2 border-l border-cyantech/40 pl-7">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.period}`} className="relative mb-8 rounded-xl border border-white/10 bg-white/5 p-5">
            <span className="absolute -left-[34px] top-6 h-3 w-3 rounded-full bg-softgreen" aria-hidden />
            <p className="text-sm text-cyantech">{exp.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-lightgray">{exp.company}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-lightgray/90">
              {exp.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
