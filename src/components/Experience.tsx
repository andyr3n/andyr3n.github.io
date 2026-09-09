import type { CSSProperties } from 'react'
import { ExternalLink } from 'lucide-react'
import { experience } from '../data/resume'
import { Rich } from './Rich'
import { Section } from './Section'
import { Tag } from './Tag'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I’ve worked"
      description="Production systems with real users, real data, and no safety net."
    >
      <div className="space-y-16">
        {experience.map((job) => (
          <article key={job.company} className="grid gap-8 md:grid-cols-[220px_1fr]">
            {/* Company column */}
            <div className="md:sticky md:top-24 md:self-start">
              <h3 className="text-lg font-semibold text-fg">
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-accent"
                  >
                    {job.company}
                    <ExternalLink size={14} className="text-fg-subtle" />
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p className="mt-1 text-sm text-fg-subtle">{job.location}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>

            {/* Roles timeline */}
            <ol className="relative pl-8 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-px before:bg-linear-to-b before:from-accent before:via-line-strong before:to-transparent">
              {job.roles.map((role, i) => (
                <li key={role.title} className={i > 0 ? 'mt-12' : ''}>
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[5px] mt-2 h-[9px] w-[9px] rounded-full ring-4 ring-bg ${
                      i === 0 ? 'bg-accent shadow-[0_0_12px_var(--ring)]' : 'bg-line-strong'
                    }`}
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-base font-semibold text-fg">{role.title}</h4>
                    <time className="font-mono text-xs text-fg-subtle">{role.period}</time>
                  </div>
                  <ul className="stagger mt-4 space-y-3">
                    {role.bullets.map((b, j) => (
                      <li
                        key={j}
                        style={{ '--i': j } as CSSProperties}
                        className="relative pl-4 text-[15px] leading-relaxed text-fg-muted before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                      >
                        <Rich text={b} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  )
}
