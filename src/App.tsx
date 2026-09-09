import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'
import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()

  // The browser's own fragment scroll runs before React renders, so a deep link
  // like /#projects lands at the top. Re-run it once the sections exist.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [])

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Stats />
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  )
}
