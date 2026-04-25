import SectionTitle from './SectionTitle';

export default function Methodology({ methodology, methodologyText }) {
  return (
    <section id="metodologia" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Metodologia de trabalho" subtitle={methodologyText} />
      <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {methodology.map((step, index) => (
          <li key={step} className="rounded-xl border border-white/10 bg-white/5 p-4 text-lightgray">
            <span className="text-cyantech">{index + 1}. </span>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
