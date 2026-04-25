import SectionTitle from './SectionTitle';

const statusStyles = {
  Planejado: 'border-white/20 text-lightgray',
  'Em desenho': 'border-cyantech/40 text-cyantech',
  'Em desenvolvimento': 'border-electric/40 text-cyantech',
  MVP: 'border-softgreen/40 text-softgreen',
  Publicado: 'border-softgreen/50 bg-softgreen/10 text-softgreen',
};

const maturityStyles = {
  Ideia: 'border-white/20 text-lightgray',
  Protótipo: 'border-cyantech/40 text-cyantech',
  MVP: 'border-softgreen/40 text-softgreen',
  Produção: 'border-softgreen/50 bg-softgreen/10 text-softgreen',
};

export default function BlueTeamLab({ blueTeamLab }) {
  return (
    <section id="blue-team-lab" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle
        title="Blue Team Lab"
        subtitle="Projetos de automação, análise e apoio operacional para Segurança da Informação"
      />
      <p className="mb-8 max-w-4xl text-lightgray/90">
        O Blue Team Lab reúne projetos de automação e ferramentas práticas voltadas para SOC, Threat Hunting,
        resposta a incidentes, gestão de vulnerabilidades, inteligência de ameaças e governança de acessos. A
        proposta é transformar tarefas recorrentes da operação defensiva em soluções simples, documentadas e
        reutilizáveis.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {blueTeamLab.map((lab) => (
          <article
            key={lab.title}
            className="rounded-xl border border-cyantech/40 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyantech/60"
          >
            <h3 className="text-xl font-semibold text-white">{lab.title}</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-cyantech/40 px-3 py-1 text-xs text-cyantech">{lab.category}</span>
              <span className={`rounded-full border px-3 py-1 text-xs ${statusStyles[lab.status] ?? 'border-white/20 text-lightgray'}`}>
                {lab.status}
              </span>
              <span className={`rounded-full border px-3 py-1 text-xs ${maturityStyles[lab.maturity] ?? 'border-white/20 text-lightgray'}`}>
                {lab.maturity}
              </span>
            </div>

            <dl className="mt-4 space-y-3 text-sm text-lightgray/90">
              <div>
                <dt className="font-semibold text-white">Problema que resolve</dt>
                <dd>{lab.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Descrição</dt>
                <dd>{lab.description}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Stack prevista</dt>
                <dd className="mt-1 flex flex-wrap gap-2">
                  {lab.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/20 px-2 py-0.5 text-xs">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Valor para operação de segurança</dt>
                <dd>{lab.value}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Próximo passo</dt>
                <dd>{lab.nextStep}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
