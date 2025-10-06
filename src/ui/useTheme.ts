export type Theme = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'theme-preference'

export function getSystemTheme(): 'light' | 'dark' {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

export function getSavedTheme(): Theme | null {
  const v = localStorage.getItem(STORAGE_KEY)
  if (v === 'light' || v === 'dark' || v === 'system') return v
  return null
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  const resolved = theme === 'system' ? getSystemTheme() : theme
  root.setAttribute('data-theme', resolved)
}

export function initTheme() {
  const saved = getSavedTheme()
  // По умолчанию — тёмная тема
  applyTheme(saved ?? 'dark')

  // Реакция на смену системной темы (если выбрана 'system' или не задано)
  const prefers = window.matchMedia('(prefers-color-scheme: dark)')
  const onChange = () => {
    const saved = getSavedTheme()
    if (!saved || saved === 'system') applyTheme('system')
  }
  if (prefers.addEventListener) prefers.addEventListener('change', onChange)
  else if ((prefers as any).addListener) (prefers as any).addListener(onChange)
}

export function setTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme)
  applyTheme(theme)
}

export function currentTheme(): Theme {
  return (localStorage.getItem(STORAGE_KEY) as Theme) ?? 'dark'
}

