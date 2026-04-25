import ProfileAvatar from './ProfileAvatar';

function HeroBlueTeamVisual() {
  return (
    <svg viewBox="0 0 380 300" className="w-full max-w-sm" aria-label="Painel Blue Team" role="img">
      <defs>
        <linearGradient id="heroPanel" x1="0" x2="1">
          <stop offset="0%" stopColor="#0F3D91" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect x="10" y="15" width="360" height="270" rx="18" fill="#020617" stroke="#38BDF8" strokeOpacity="0.3" />
      <rect x="30" y="35" width="320" height="30" rx="8" fill="url(#heroPanel)" opacity="0.7" />
      <circle cx="50" cy="50" r="4" fill="#EF4444" />
      <circle cx="65" cy="50" r="4" fill="#22C55E" />
      <circle cx="80" cy="50" r="4" fill="#38BDF8" />
      <rect x="32" y="84" width="150" height="80" rx="10" fill="#0f172a" stroke="#38BDF8" strokeOpacity="0.25" />
      <path d="M45 146 68 122l18 13 28-32 18 15 22-22" fill="none" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" />
      <rect x="195" y="84" width="145" height="80" rx="10" fill="#0f172a" stroke="#38BDF8" strokeOpacity="0.25" />
      <path d="M208 142h48l12-18 12 26 10-14h35" fill="none" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
      <rect x="32" y="177" width="308" height="83" rx="10" fill="#0f172a" stroke="#38BDF8" strokeOpacity="0.25" />
      <path d="M178 198l36 20-36 20-36-20 36-20Z" fill="#0F3D91" stroke="#38BDF8" />
      <path d="m168 218 8 8 13-13" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero({ person, heroDescription, hasResume }) {
  return (
    <section id="hero" className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-6">
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyantech">Portfólio Profissional</p>
        <h1 className="text-4xl font-bold text-white md:text-6xl">{person.firstName}</h1>
        <p className="mt-3 text-lg text-lightgray">{person.role}</p>
        <p className="mt-6 max-w-2xl text-lightgray/90">{heroDescription}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projetos" className="rounded-lg bg-cyantech px-5 py-2.5 font-semibold text-deep transition hover:bg-sky-300">
            Ver projetos
          </a>
          <a href="#estudo-caso" className="rounded-lg border border-cyantech px-5 py-2.5 text-lightgray transition hover:bg-white/10">
            Estudo de caso
          </a>
          {hasResume ? (
            <a href={person.resumePath} className="rounded-lg border border-cyantech px-5 py-2.5 text-lightgray transition hover:bg-white/10" download>
              Baixar currículo
            </a>
          ) : (
            <button className="cursor-not-allowed rounded-lg border border-white/30 px-5 py-2.5 text-lightgray/70" disabled>
              Currículo em breve
            </button>
          )}
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-5 py-2.5 text-lightgray transition hover:bg-white/10">
            LinkedIn
          </a>
          <a href={person.github} target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-5 py-2.5 text-lightgray transition hover:bg-white/10">
            GitHub
          </a>
        </div>
      </div>
      <div className="grid content-start gap-5 place-items-center">
        <ProfileAvatar src={person.profileImagePath} alt={person.fullName} sizeClass="h-52 w-52 md:h-64 md:w-64" textClass="text-5xl" />
        <HeroBlueTeamVisual />
      </div>
    </section>
  );
}
