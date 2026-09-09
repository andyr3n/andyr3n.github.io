import { skills } from '../data/resume'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="divide-y divide-line rounded-xl border border-line bg-bg-elevated">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-3 px-6 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-fg-subtle sm:pt-1.5">
              {g.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-bg px-2.5 py-1 text-sm text-fg transition-colors hover:border-accent/50 hover:bg-accent-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
