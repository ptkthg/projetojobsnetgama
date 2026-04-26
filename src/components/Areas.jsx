import SectionTitle from './SectionTitle';

const iconMap = {
  shield: '🛡️',
  radar: '📡',
  target: '🎯',
  bug: '🔎',
  key: '🔐',
  server: '🖥️',
};

export default function Areas({ areas }) {
  return (
    <section id="areas" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Áreas de atuação" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {areas.map((area) => (
          <article key={area.title} className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyantech/60">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-cyantech/40 bg-deep text-lg">
              {iconMap[area.icon] ?? '•'}
            </div>
            <h3 className="text-xl font-semibold text-white">{area.title}</h3>
            <p className="mt-3 text-lightgray/90">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
