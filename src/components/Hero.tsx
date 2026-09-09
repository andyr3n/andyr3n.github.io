import { ArrowDown, FileText, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/resume'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { Rich } from './Rich'

const delay = (ms: number) => ({ animationDelay: `${ms}ms` })

const secondaryBtn =
  'glass inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-medium text-fg transition-all duration-300 hover:-translate-y-px hover:border-accent/40 hover:bg-accent-soft'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="bg-grid absolute inset-0" />
      </div>
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-28 sm:px-8 sm:pb-28 sm:pt-44">
        <div className="fade-up flex items-center gap-2" style={delay(0)}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs font-medium tracking-wide text-fg-muted">
            {profile.openTo}
          </span>
        </div>

        <h1
          className="fade-up text-display mt-6 pb-1 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
          style={delay(80)}
        >
          {profile.name}
        </h1>

        <p
          className="fade-up mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-fg-muted sm:text-xl"
          style={delay(160)}
        >
          <span className="font-medium text-fg">{profile.role}</span>
          {profile.focus.map((f) => (
            <span key={f} className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="text-accent">
                ·
              </span>
              {f}
            </span>
          ))}
        </p>

        <p
          className="fade-up mt-5 max-w-3xl text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl"
          style={delay(240)}
        >
          {profile.headline}
        </p>

        <p
          className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
          style={delay(320)}
        >
          <Rich text={profile.summary} />
        </p>

        <div className="fade-up mt-8 flex flex-wrap items-center gap-3" style={delay(400)}>
          <a
            href={`mailto:${profile.email}`}
            className="btn-glow inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg"
          >
            <Mail size={16} /> Get in touch
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className={secondaryBtn}>
            <FileText size={16} /> Resume
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={secondaryBtn}>
            <GithubIcon size={16} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={secondaryBtn}>
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-fg-subtle">
            <MapPin size={14} /> {profile.location}
          </span>
        </div>

        <a
          href="#experience"
          className="fade-up mt-12 inline-flex items-center gap-2 py-3 font-mono text-xs text-fg-subtle transition-colors hover:text-accent sm:mt-16"
          style={delay(600)}
        >
          <ArrowDown size={14} className="animate-bounce motion-reduce:animate-none" /> scroll to experience
        </a>
      </div>
    </section>
  )
}
