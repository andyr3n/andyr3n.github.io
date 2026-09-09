import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data/resume'
import { Rich } from './Rich'
import { Section } from './Section'
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
      <div className="space-y-5">
        {featured.map((p) => (
          <ProjectCard key={p.name} project={p} featured />
        ))}
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`group relative flex flex-col rounded-xl border border-line bg-bg-elevated p-6 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30 ${
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

      <ul className={`mt-5 space-y-3 ${featured ? 'md:columns-1' : ''}`}>
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
    </article>
  )
}
