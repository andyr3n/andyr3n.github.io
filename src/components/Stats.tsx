import { stats } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export function Stats() {
  const [revealRef, revealClass] = useReveal<HTMLDListElement>()
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <dl
        ref={revealRef}
        className={`${revealClass} grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4`}
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col bg-bg-elevated px-6 py-6">
            <dt className="order-2 mt-1 text-sm text-fg-muted">{s.label}</dt>
            <dd className="order-1 font-mono text-3xl font-semibold tracking-tight text-fg">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
