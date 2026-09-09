import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer id="contact" className="relative isolate scroll-mt-24 overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="orb orb-b left-1/2! right-auto! top-1/3! -translate-x-1/2! opacity-[calc(var(--orb-opacity)*0.6)]!" />
      </div>
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Contact
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Let’s build something.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
          I’m looking for a software engineering role where I can keep owning hard problems end to
          end. If that sounds like your team, my inbox is open.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg sm:w-auto"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass inline-flex items-center gap-2 rounded-md border border-line px-3 py-2.5 text-sm text-fg transition-all duration-300 hover:-translate-y-px hover:border-accent/40 hover:bg-accent-soft"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass inline-flex items-center gap-2 rounded-md border border-line px-3 py-2.5 text-sm text-fg transition-all duration-300 hover:-translate-y-px hover:border-accent/40 hover:bg-accent-soft"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
