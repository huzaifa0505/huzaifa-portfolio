import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section className="max-w-content mx-auto px-6 lg:px-10 pb-16 lg:pb-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
        {skillGroups.map((group) => (
          <div key={group.label} className="bg-panel p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-signal mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs sm:text-sm text-paper/90 border border-line rounded-full px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
