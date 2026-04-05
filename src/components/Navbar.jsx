import { useEffect, useState } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#armies', label: 'Three Armies' },
  { href: '#family', label: 'One Family' },
  { href: '#why-they-left', label: 'Why They Left' },
  { href: '#explore', label: 'Explore' },
  { href: '#propaganda', label: 'Propaganda' },
  { href: '#conclusions', label: 'Conclusions' },
  { href: '#future-research', label: 'Future Research' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const hasDark = document.documentElement.classList.contains('dark')
    setIsDark(hasDark)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    if (root.classList.contains('dark')) {
      root.classList.remove('dark')
      setIsDark(false)
    } else {
      root.classList.add('dark')
      setIsDark(true)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink-dark/10 dark:border-ink/10 bg-surface-light/95 dark:bg-surface/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a
          href="#hero"
          className="font-display text-lg font-semibold tracking-tight text-ink-dark dark:text-ink md:text-xl"
        >
          The Fortunes of War
        </a>

        <div className="hidden flex-wrap items-center justify-end gap-1 lg:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded px-2 py-1 text-sm text-ink-dark/80 transition hover:text-us dark:text-ink/80 dark:hover:text-us"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded border border-ink-dark/20 px-3 py-1.5 text-xs font-medium text-ink-dark dark:border-ink/25 dark:text-ink"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            className="rounded p-2 lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="block h-0.5 w-5 bg-ink-dark dark:bg-ink" />
            <span className="mt-1 block h-0.5 w-5 bg-ink-dark dark:bg-ink" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-ink-dark/10 px-4 py-3 dark:border-ink/10 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded py-2 text-sm text-ink-dark dark:text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
