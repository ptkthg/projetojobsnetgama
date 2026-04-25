import SectionTitle from './SectionTitle';

export default function TechStack({ techStack }) {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Stack técnica" />
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(techStack).map(([group, items]) => (
          <article key={group} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-full border border-lightblue/40 bg-navy px-3 py-1 text-sm text-lightgray">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
