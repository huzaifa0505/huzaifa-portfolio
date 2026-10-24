import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import NodeMarker from './components/NodeMarker'
import { links, profile } from './data'

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-content mx-auto px-6 lg:px-10 py-16 lg:py-20 border-t border-line"
    >
      <NodeMarker index="05 — Contact" />
      <div className="grid lg:grid-cols-[0.55fr_0.45fr] gap-10 items-end">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper leading-tight">
            Let&rsquo;s wire something
            <br />
            <span className="text-brassSoft">worth automating.</span>
          </h2>
          <p className="mt-5 max-w-lg text-muted text-base leading-relaxed">
            Open to AI engineering, RAG systems, and automation work. The
            fastest way to reach me is email — I usually reply within a day.
          </p>
          <a
            href={`mailto:${links.email}`}
            className="mt-7 inline-flex items-center gap-2 bg-brass text-ink font-medium px-6 py-3 rounded-full text-sm hover:bg-brassSoft transition-colors"
          >
            {links.email}
          </a>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end font-mono text-xs uppercase tracking-widest">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-line rounded-full px-5 py-3 text-paper hover:border-brass hover:text-brassSoft transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="border border-line rounded-full px-5 py-3 text-paper hover:border-brass hover:text-brassSoft transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={links.twitter}
            target="_blank"
            rel="noreferrer"
            className="border border-line rounded-full px-5 py-3 text-paper hover:border-brass hover:text-brassSoft transition-colors"
          >
            Twitter ↗
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="border border-line rounded-full px-5 py-3 text-paper hover:border-brass hover:text-brassSoft transition-colors"
          >
            Résumé ↗
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="max-w-content mx-auto px-6 lg:px-10 py-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="font-mono text-[11px] text-muted">
        © {new Date().getFullYear()} {profile.name}. Built from scratch.
      </p>
      <p className="font-mono text-[11px] text-muted">{profile.location}</p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink grain relative">
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
