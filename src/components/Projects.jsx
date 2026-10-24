import { projects } from '../data'
import NodeMarker from './NodeMarker'

export default function Projects() {
  return (
    <section id="projects" className="max-w-content mx-auto px-6 lg:px-10 py-16 lg:py-20 border-t border-line">
      <NodeMarker index="03 — Projects" />
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group bg-panel border border-line rounded-2xl p-6 hover:border-brass/60 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-lg text-paper font-semibold leading-snug">
                {project.title}
              </h3>
              <span className="font-mono text-[11px] text-muted flex-shrink-0">{project.year}</span>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-signal mt-3">
              {project.stack}
            </p>
            <p className="text-muted text-sm leading-relaxed mt-3">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
