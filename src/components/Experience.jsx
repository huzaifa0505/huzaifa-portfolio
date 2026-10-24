import { experience } from '../data'
import NodeMarker from './NodeMarker'

export default function Experience() {
  return (
    <section id="work" className="max-w-content mx-auto px-6 lg:px-10 py-16 lg:py-20 border-t border-line">
      <NodeMarker index="02 — Experience" />
      <div className="space-y-10">
        {experience.map((job) => (
          <article
            key={job.role + job.org}
            className="grid lg:grid-cols-[0.28fr_0.72fr] gap-4 lg:gap-10 pb-10 border-b border-line last:border-0 last:pb-0"
          >
            <div>
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <p className="font-mono text-xs text-muted mt-1">{job.location}</p>
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-paper font-semibold">
                {job.role}
              </h3>
              <p className="text-brassSoft text-sm mt-1 mb-4">{job.org}</p>
              <ul className="space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-muted text-sm sm:text-base leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 rounded-full bg-brass flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
