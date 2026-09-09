import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, description, children }: Props) {
  const [revealRef, revealClass] = useReveal<HTMLDivElement>()
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20" aria-labelledby={`${id}-title`}>
      <div ref={revealRef} className={revealClass}>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">{description}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
