import { useEffect, useState } from 'react'
import { FileText, Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, profile } from '../data/resume'
import type { Theme } from '../hooks/useTheme'

type Props = { theme: Theme; onToggleTheme: () => void }

export function Nav({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-line bg-bg/80 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-fg hover:text-accent"
        >
          andy<span className="text-accent">.</span>ren
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm text-fg-muted transition-colors hover:bg-accent-soft hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-line-strong hover:bg-bg-elevated"
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
        <div className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden">
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
      className="rounded-md p-2 text-fg-muted transition-colors hover:bg-accent-soft hover:text-fg"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
