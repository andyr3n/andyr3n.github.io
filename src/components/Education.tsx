import { GraduationCap } from 'lucide-react'
import { education } from '../data/resume'
import { Section } from './Section'
import { SpotlightCard } from './SpotlightCard'

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied">
      <ul className="space-y-4">
        {education.map((e) => (
          <SpotlightCard
            as="li"
            key={e.school}
            className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <span className="mt-0.5 rounded-lg bg-accent-soft p-2.5 text-accent">
                <GraduationCap size={20} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-fg">{e.school}</h3>
                <p className="text-fg-muted">{e.degree}</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-mono text-xs text-fg-subtle">{e.period}</p>
              <p className="mt-0.5 text-sm text-fg-subtle">{e.location}</p>
            </div>
          </SpotlightCard>
        ))}
      </ul>
    </Section>
  )
}
