import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data/resume'
import { Rich } from './Rich'
import { Section } from './Section'
import { SpotlightCard } from './SpotlightCard'
import { Tag } from './Tag'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I’ve built"
      description="Side projects where I get to own the whole stack, from platform constraints to the last unit test."
    >
      <div className="stagger space-y-5">
        {featured.map((p, i) => (
          <ProjectCard key={p.name} project={p} featured index={i} />
        ))}
        <div className="stagger grid gap-5 md:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i + 1} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function ProjectCard({
  project,
  featured = false,
  index = 0,
}: {
  project: Project
  featured?: boolean
  index?: number
}) {
  return (
    <SpotlightCard
      as="article"
      style={{ '--i': index } as CSSProperties}
      className={`group flex flex-col p-6 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 ${
        featured ? 'sm:p-8' : ''
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-3">
            <h3 className={`font-semibold text-fg ${featured ? 'text-2xl' : 'text-xl'}`}>
              {project.name}
            </h3>
            {project.status && (
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[11px] font-medium text-accent">
                {project.status}
              </span>
            )}
          </div>
          <p className="mt-1 text-base text-fg-muted">{project.tagline}</p>
        </div>
        <time className="font-mono text-xs text-fg-subtle">{project.period}</time>
      </div>

      <ul className="mt-5 space-y-3">
        {project.bullets.map((b, i) => (
          <li
            key={i}
            className="relative pl-4 text-[15px] leading-relaxed text-fg-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
          >
            <Rich text={b} />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="flex gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {l.label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </SpotlightCard>
  )
}
