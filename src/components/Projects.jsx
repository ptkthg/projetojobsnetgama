import SectionTitle from './SectionTitle';

export default function Projects({ projects }) {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionTitle title="Projetos técnicos" />
      <p className="mb-8 max-w-3xl text-lightgray/90">
        Projetos técnicos e estudos práticos voltados à investigação, detecção, resposta e melhoria de postura defensiva.
      </p>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`rounded-xl border bg-white/5 p-5 transition hover:-translate-y-1 ${
              project.isMain ? 'border-cyantech/70 ring-1 ring-electric/40' : 'border-white/10 hover:border-cyantech/60'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">🧪 {project.title}</h3>
              {project.isMain && (
                <span className="rounded-full border border-softgreen/40 bg-softgreen/10 px-3 py-1 text-xs font-semibold text-softgreen">
                  Projeto principal
                </span>
              )}
            </div>
            <p className="mt-3 text-lightgray/90">{project.description}</p>
            <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-cyantech">Competências aplicadas</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/20 px-3 py-1 text-xs text-lightgray">
                  {skill}
                </span>
              ))}
            </div>
            <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-cyantech">Cenários abordados</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-lightgray/90">
              {project.scenarios.map((scenario) => (
                <li key={scenario}>{scenario}</li>
              ))}
            </ul>
            <button className="mt-5 rounded-lg border border-cyantech/60 px-4 py-2 text-sm text-lightgray transition hover:bg-white/10">
              Ver detalhes
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
