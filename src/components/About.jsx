import { about } from '../data'
import NodeMarker from './NodeMarker'

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 lg:px-10 py-16 lg:py-20 border-t border-line">
      <NodeMarker index="01 — About" />
      <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-10">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper leading-tight">
          From model to
          <br />
          production.
        </h2>
        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">{about}</p>
      </div>
    </section>
  )
}
