import { profile, links } from '../data'

export default function Hero() {
  return (
    <section id="top" className="max-w-content mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal mb-6">
            Available for AI engineering &amp; automation work
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-paper">
            Building AI systems
            <br />
            that <span className="text-brassSoft">run the work</span>
            <br />
            for you.
          </h1>
          <p className="mt-6 max-w-xl text-muted text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-brass text-ink font-medium px-6 py-3 rounded-full text-sm hover:bg-brassSoft transition-colors"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line px-6 py-3 rounded-full text-sm text-paper hover:border-brass hover:text-brassSoft transition-colors"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 font-mono text-xs uppercase tracking-widest text-muted">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-brassSoft transition-colors">
              LinkedIn
            </a>
            <span className="text-line">/</span>
            <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-brassSoft transition-colors">
              GitHub
            </a>
            <span className="text-line">/</span>
            <a href={links.twitter} target="_blank" rel="noreferrer" className="hover:text-brassSoft transition-colors">
              Twitter
            </a>
          </div>
        </div>

        <div className="relative justify-self-center lg:justify-self-end">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-brass/40" aria-hidden="true" />
          <div className="relative w-56 sm:w-64 lg:w-72 aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-panel">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover grayscale-[15%] contrast-[1.05]"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-panel border border-line rounded-xl px-4 py-3 font-mono text-xs text-muted shadow-lg shadow-[#2c1e16]/10">
            <p className="text-paper">{profile.role}</p>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
