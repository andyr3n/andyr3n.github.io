import { ArrowDown, FileText, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/resume'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { Rich } from './Rich'

const delay = (ms: number) => ({ animationDelay: `${ms}ms` })

const secondaryBtn =
  'inline-flex items-center gap-2 rounded-md border border-line bg-bg-elevated px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-line-strong'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
        <div className="fade-up flex items-center gap-2" style={delay(0)}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs font-medium tracking-wide text-fg-muted">
            {profile.openTo}
          </span>
        </div>

        <h1
          className="fade-up mt-6 text-5xl font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl"
          style={delay(80)}
        >
          {profile.name}
        </h1>

        <p className="fade-up mt-4 text-lg text-fg-muted sm:text-xl" style={delay(160)}>
          <span className="font-medium text-fg">{profile.role}</span>
          {profile.focus.map((f) => (
            <span key={f}>
              <span className="mx-2 text-accent">·</span>
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
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg shadow-sm transition-opacity hover:opacity-90"
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
          className="fade-up mt-16 inline-flex items-center gap-2 font-mono text-xs text-fg-subtle transition-colors hover:text-accent"
          style={delay(600)}
        >
          <ArrowDown size={14} className="animate-bounce" /> scroll to experience
        </a>
      </div>
    </section>
  )
}
