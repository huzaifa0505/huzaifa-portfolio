import { education } from '../data'
import NodeMarker from './NodeMarker'

export default function Education() {
  return (
    <section id="education" className="max-w-content mx-auto px-6 lg:px-10 py-16 lg:py-20 border-t border-line">
      <NodeMarker index="04 — Education" />
      <div className="grid sm:grid-cols-3 gap-5">
        {education.map((item) => (
          <div key={item.degree} className="border border-line rounded-2xl p-6 bg-panel">
            <p className="font-mono text-xs text-muted mb-3">{item.year}</p>
            <h3 className="font-display text-base text-paper font-semibold leading-snug">
              {item.degree}
            </h3>
            <p className="text-muted text-sm mt-2">{item.school}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
