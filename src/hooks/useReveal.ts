import { useEffect, useRef, useState } from 'react'

const supportsObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window

/**
 * Marks an element visible once it scrolls into view.
 * Returns [ref, className]; className is `reveal` then `reveal is-visible`.
 * Falls back to always-visible when IntersectionObserver is unavailable.
 */
export function useReveal<T extends HTMLElement>(): [React.RefObject<T | null>, string] {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(!supportsObserver)

  useEffect(() => {
    const el = ref.current
    if (!el || !supportsObserver) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.05 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, visible ? 'reveal is-visible' : 'reveal']
}
