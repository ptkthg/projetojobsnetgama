import SectionTitle from './SectionTitle';

export default function Differentials({ differentials }) {
  return (
    <section id="diferenciais" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Diferenciais" />
      <div className="grid gap-5 md:grid-cols-2">
        {differentials.map((item) => (
          <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-lightgray/90">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
