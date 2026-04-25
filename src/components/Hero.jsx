import ProfileAvatar from './ProfileAvatar';

export default function Hero({ person, heroDescription, hasResume }) {
  return (
    <section id="hero" className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-28 md:grid-cols-[1.4fr_1fr] md:px-6">
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-lightblue">Portfólio Profissional</p>
        <h1 className="text-4xl font-bold text-white md:text-6xl">{person.firstName}</h1>
        <p className="mt-3 text-lg text-lightgray">{person.role}</p>
        <p className="mt-6 max-w-2xl text-lightgray/90">{heroDescription}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projetos" className="rounded-lg bg-lightblue px-5 py-2.5 font-semibold text-navy transition hover:bg-sky-300">
            Ver projetos
          </a>
          {hasResume ? (
            <a href={person.resumePath} className="rounded-lg border border-lightblue px-5 py-2.5 text-lightgray transition hover:bg-white/10" download>
              Baixar currículo
            </a>
          ) : (
            <button className="cursor-not-allowed rounded-lg border border-white/30 px-5 py-2.5 text-lightgray/70" disabled>
              Currículo em breve
            </button>
          )}
          <a href={person.linkedin} className="rounded-lg border border-white/20 px-5 py-2.5 text-lightgray transition hover:bg-white/10">
            LinkedIn
          </a>
          <a href={person.github} className="rounded-lg border border-white/20 px-5 py-2.5 text-lightgray transition hover:bg-white/10">
            GitHub
          </a>
        </div>
      </div>
      <div className="grid place-items-center md:place-items-end">
        <ProfileAvatar src={person.profileImagePath} alt={person.fullName} sizeClass="h-56 w-56 md:h-72 md:w-72" textClass="text-5xl" />
      </div>
    </section>
  );
}
