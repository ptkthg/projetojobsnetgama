import SectionTitle from './SectionTitle';

export default function Indicators({ indicators }) {
  return (
    <section id="indicadores" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Indicadores de atuação" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {indicators.map((indicator) => (
          <article key={indicator} className="rounded-xl border border-white/10 bg-white/5 p-4 text-lightgray/95">
            {indicator}
          </article>
        ))}
      </div>
    </section>
  );
}
