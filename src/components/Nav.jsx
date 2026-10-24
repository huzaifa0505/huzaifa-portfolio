import { links } from '../data'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-ink/80 border-b border-line">
      <nav className="max-w-content mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-name font-semibold text-paper tracking-tight text-base sm:text-lg"
        >
          Huzaifa Ahmed Khan
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-brassSoft transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={links.resume}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-mono uppercase tracking-widest border border-line px-4 py-2 rounded-full text-paper hover:border-brass hover:text-brassSoft transition-colors"
        >
          Résumé
        </a>
      </nav>
    </header>
  )
}
