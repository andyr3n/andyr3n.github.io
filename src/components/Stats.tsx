import type { CSSProperties } from 'react'
import { stats } from '../data/resume'
import { useCountUp } from '../hooks/useCountUp'
import { useReveal } from '../hooks/useReveal'
import { SpotlightCard } from './SpotlightCard'

/** Splits "~980K" into { prefix: "~", num: 980, suffix: "K" } for animation. */
function parseStat(value: string) {
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/)
  if (!m) return null
  return { prefix: m[1], num: parseFloat(m[2].replace(/,/g, '')), suffix: m[3] }
}

function StatValue({ value, start }: { value: string; start: boolean }) {
  const parsed = parseStat(value)
  const n = useCountUp(parsed?.num ?? 0, start)
  if (!parsed) return <>{value}</>
  return (
    <>
      {parsed.prefix}
      {Math.round(n).toLocaleString()}
      {parsed.suffix}
    </>
  )
}

export function Stats() {
  const [revealRef, revealClass, visible] = useReveal<HTMLDListElement>()
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <dl
        ref={revealRef}
        className={`${revealClass} stagger grid grid-cols-2 gap-3 md:grid-cols-4`}
      >
        {stats.map((s, i) => (
          <SpotlightCard
            key={s.label}
            className="flex flex-col px-6 py-6 hover:-translate-y-0.5"
            style={{ '--i': i } as CSSProperties}
          >
            <dt className="order-2 mt-1 text-sm text-fg-muted">{s.label}</dt>
            <dd className="order-1 font-mono text-3xl font-semibold tracking-tight text-fg tabular-nums">
              <StatValue value={s.value} start={visible} />
            </dd>
          </SpotlightCard>
        ))}
      </dl>
    </div>
  )
}
