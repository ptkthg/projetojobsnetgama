import SectionTitle from './SectionTitle';

export default function Contact({ person, disclaimer }) {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Contato" />
      <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-2xl font-semibold text-white">{person.fullName}</h3>
        <p className="mt-1 text-lightgray">Segurança da Informação</p>
        <p className="text-lightgray">{person.city}</p>
        <p className="mt-3 text-lightgray">
          E-mail:{' '}
          <a href={`mailto:${person.email}`} className="text-cyantech hover:underline">
            {person.email}
          </a>
        </p>
        <p className="text-lightgray">
          LinkedIn:{' '}
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="text-cyantech hover:underline">
            {person.linkedin}
          </a>
        </p>
        <p className="text-lightgray">
          GitHub:{' '}
          <a href={person.github} target="_blank" rel="noreferrer" className="text-cyantech hover:underline">
            {person.github}
          </a>
        </p>

        <a
          href={person.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex rounded-lg border border-softgreen/50 bg-softgreen/10 px-4 py-2 text-sm text-softgreen transition hover:bg-softgreen/20"
        >
          Contato via WhatsApp
        </a>

        <p className="mt-6 rounded-lg border border-softgreen/30 bg-softgreen/10 p-4 text-sm text-lightgray">{disclaimer}</p>
      </article>
    </section>
  );
}
