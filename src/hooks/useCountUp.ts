import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Animates from 0 to `target` once `start` becomes true. */
export function useCountUp(target: number, start: boolean, duration = 1400): number {
  const [value, setValue] = useState(0)
  const reduce = prefersReducedMotion()

  useEffect(() => {
    if (!start || reduce) return
    const t0 = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration, reduce])

  if (reduce) return start ? target : 0
  return value
}
