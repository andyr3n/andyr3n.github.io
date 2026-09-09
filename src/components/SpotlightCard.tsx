import { useRef, type ReactNode, type MouseEvent, type CSSProperties } from 'react'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  as?: 'div' | 'article' | 'li'
}

/** Glass card whose background glows under the cursor. */
export function SpotlightCard({ children, className = '', style, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <Tag
      ref={ref as never}
      onMouseMove={onMove}
      style={style}
      className={`spotlight glass rounded-xl border border-line hover:border-accent/40 ${className}`}
    >
      {children}
    </Tag>
  )
}
