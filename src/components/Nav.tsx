import { useEffect, useRef, useState } from 'react'
import { FileText, Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, profile } from '../data/resume'
import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'

type Props = { theme: Theme; onToggleTheme: () => void }

const sectionIds = navLinks.map((l) => l.href.slice(1))

export function Nav({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0
      progressRef.current?.style.setProperty('transform', `scaleX(${pct / 100})`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = (href: string) =>
    `relative rounded-md px-3 py-1.5 text-sm transition-colors hover:text-fg ${
      active === href.slice(1) ? 'text-fg' : 'text-fg-muted'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-transparent transition-[border-color,backdrop-filter] duration-300 ${
        scrolled ? 'border-line/60 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      {/* Scroll progress */}
      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-150 ease-out"
      />
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-fg transition-colors hover:text-accent"
        >
          andy<span className="text-accent">.</span>ren
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-all duration-300 ${
                  active === l.href.slice(1) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-accent/40 hover:bg-accent-soft"
          >
            <FileText size={15} /> Resume
          </a>
          <ThemeButton theme={theme} onClick={onToggleTheme} />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeButton theme={theme} onClick={onToggleTheme} />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-fg-muted hover:bg-accent-soft hover:text-fg"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-line md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-fg-muted hover:bg-accent-soft hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-fg hover:bg-accent-soft"
            >
              <FileText size={15} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function ThemeButton({ theme, onClick }: { theme: Theme; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-md p-2 text-fg-muted transition-all hover:rotate-12 hover:bg-accent-soft hover:text-fg"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
