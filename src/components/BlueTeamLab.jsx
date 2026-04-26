import SectionTitle from './SectionTitle';

export default function BlueTeamLab({ blueTeamLab }) {
  const project = blueTeamLab[0];

  if (!project) return null;

  return (
    <section id="blue-team-lab" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle
        title="Blue Team Lab"
        subtitle="Projetos de automação, análise e apoio operacional para Segurança da Informação"
      />
      <p className="mb-8 max-w-4xl text-lightgray/90">
        O Blue Team Lab é o espaço onde organizo ferramentas que pretendo desenvolver para apoiar tarefas práticas de
        Segurança da Informação. O primeiro projeto planejado é o IOC Enricher, um mini app voltado ao enriquecimento
        de indicadores e apoio à triagem operacional em SOC, Threat Intelligence e resposta a incidentes.
      </p>

      <article className="mx-auto max-w-4xl rounded-2xl border border-cyantech/50 bg-white/[0.05] p-6 shadow-card">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">IOC Enricher</h3>
            <p className="mt-1 text-lightgray/90">Enriquecimento de indicadores para triagem Blue Team</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cyantech/40 px-3 py-1 text-xs text-cyantech">{project.category}</span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-lightgray">{project.status}</span>
            <span className="rounded-full border border-electric/40 px-3 py-1 text-xs text-cyantech">{project.maturity}</span>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="space-y-4 text-sm text-lightgray/90">
            <div>
              <h4 className="font-semibold text-white">Problema que resolve</h4>
              <p>
                Analistas de segurança precisam avaliar rapidamente IPs, domínios, URLs e hashes suspeitos para decidir
                se o indicador exige bloqueio, monitoramento, investigação ou pode ser ignorado.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Descrição</h4>
              <p>
                Mini app que recebe IP, domínio, URL ou hash e retorna um painel de enriquecimento com reputação,
                contexto técnico, classificação de risco e recomendação operacional.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Stack prevista</h4>
              <div className="mt-1 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/20 px-2.5 py-1 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm text-lightgray/90">
            <div>
              <h4 className="font-semibold text-white">Funcionalidades planejadas</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>Consulta reputação em fontes abertas.</li>
                <li>Classifica risco como baixo, médio, alto ou crítico.</li>
                <li>Mostra ASN, país, categoria, data de criação do domínio e histórico básico.</li>
                <li>Gera recomendação: bloquear, monitorar, investigar ou ignorar.</li>
                <li>Exporta relatório em PDF ou CSV.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-cyantech/30 bg-deep/40 p-3">
              <h4 className="font-semibold text-white">Valor para Blue Team</h4>
              <p>{project.value}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Próximo passo</h4>
              <p>{project.nextStep}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
