import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const THEME_COLOR: Record<Theme, string> = { light: '#fbfbfc', dark: '#0f1117' }

function readStored(): Theme | null {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable */
  }
  return null
}

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Theme follows the OS until the visitor explicitly toggles; only then is the
 * choice persisted. Keeps <html class="dark"> and <meta name="theme-color"> in sync.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readStored() ?? systemTheme())

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme])
  }, [theme])

  // Track OS changes while no explicit preference is stored.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      if (readStored() === null) setTheme(e.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        /* storage unavailable */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
