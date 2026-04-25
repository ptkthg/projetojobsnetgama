import SectionTitle from './SectionTitle';

const groupIcons = {
  'Microsoft Security': '🧩',
  'SOC e Detecção': '📊',
  'Governança e Hardening': '🛡️',
  Ferramentas: '🧰',
  Frameworks: '📚',
  Cloud: '☁️',
};

export default function TechStack({ techStack }) {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Stack técnica" />
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(techStack).map(([group, items]) => (
          <article key={group} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <span aria-hidden>{groupIcons[group] ?? '•'}</span>
              {group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-full border border-cyantech/40 bg-deep/80 px-3 py-1 text-sm text-lightgray">
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
