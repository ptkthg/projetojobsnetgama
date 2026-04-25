import SectionTitle from './SectionTitle';

function SecurityIllustration() {
  return (
    <svg viewBox="0 0 320 220" className="h-full w-full" role="img" aria-label="Ilustração de resposta a incidente Blue Team">
      <defs>
        <linearGradient id="caseGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#0F3D91" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect x="20" y="30" width="180" height="130" rx="12" fill="#020617" stroke="#38BDF8" strokeOpacity="0.45" />
      <rect x="35" y="48" width="150" height="12" rx="4" fill="url(#caseGradient)" opacity="0.7" />
      <rect x="35" y="72" width="110" height="8" rx="4" fill="#38BDF8" opacity="0.35" />
      <rect x="35" y="88" width="85" height="8" rx="4" fill="#38BDF8" opacity="0.35" />
      <circle cx="235" cy="100" r="50" fill="#020617" stroke="#22C55E" strokeOpacity="0.55" />
      <path d="M235 67 258 76v20c0 20-12 31-23 36-11-5-23-16-23-36V76l23-9Z" fill="#0F3D91" stroke="#38BDF8" />
      <path d="m224 97 8 8 15-15" fill="none" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" />
      <circle cx="67" cy="184" r="4" fill="#EF4444" />
      <circle cx="84" cy="184" r="4" fill="#22C55E" />
      <circle cx="101" cy="184" r="4" fill="#38BDF8" />
    </svg>
  );
}

const blockLabels = [
  { key: 'context', label: 'Contexto' },
  { key: 'detection', label: 'Detecção' },
  { key: 'response', label: 'Resposta' },
  { key: 'rootCause', label: 'Causa raiz' },
  { key: 'correction', label: 'Correção' },
  { key: 'result', label: 'Resultado' },
  { key: 'lessonsLearned', label: 'Lições aprendidas' },
];

export default function CaseStudy({ caseStudy }) {
  return (
    <section id="estudo-caso" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title={caseStudy.title} subtitle={caseStudy.subtitle} />
      <div className="grid gap-6 rounded-2xl border border-electric/40 bg-gradient-to-br from-deep via-graydark to-[#0f1f3b] p-6 shadow-card md:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-3">
          {blockLabels.map((item) => (
            <article key={item.key} className="rounded-lg border border-white/10 bg-black/20 p-3 md:p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-cyantech">{item.label}</h3>
              <p className="mt-1 text-sm text-lightgray md:text-base">{caseStudy[item.key]}</p>
            </article>
          ))}
          <div className="mt-1 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-cyantech/40 bg-deep/70 px-3 py-1 text-xs text-lightgray">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/25 p-4">
          <SecurityIllustration />
        </div>
      </div>
    </section>
  );
}
