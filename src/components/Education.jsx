import SectionTitle from './SectionTitle';

export default function Education({ education }) {
  return (
    <section id="formacao" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Formação acadêmica" />
      <article className="max-w-3xl rounded-xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold text-white">{education.course}</h3>
        <p className="mt-2 text-lightgray">{education.institution}</p>
        <p className="mt-3 inline-block rounded-full border border-softgreen/40 bg-softgreen/10 px-3 py-1 text-sm text-softgreen">
          Status: {education.status}
        </p>
      </article>
    </section>
  );
}
