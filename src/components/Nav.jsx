import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/app', label: '앱 설치' },
  { to: '/basics', label: '기본 사용법' },
  { to: '/mcp', label: '외부 도구 연결' },
  { to: '/safety', label: '안전 수칙' },
  { to: '/code', label: 'Claude Code', muted: true },
  { to: '/cowork', label: 'COWORK 오류' },
  { to: '/troubleshoot', label: 'FAQ' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-30 border-b border-line nav-blur" style={{ backdropFilter: 'blur(14px)', background: 'rgba(250,249,245,.85)' }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-7 py-3.5 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 font-bold text-[15px] text-ink no-underline">
          <span className="w-7 h-7 rounded-[8px] grid place-items-center text-white font-extrabold text-[13px] shadow-sm2" style={{ background: 'linear-gradient(135deg,#C2410C,#EA580C)' }}>C</span>
          <span>Claude 설치 가이드북</span>
          <small className="text-inkmuted font-medium ml-1.5 hidden lg:inline">· AX기획팀</small>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-1 flex-wrap">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) =>
                `text-[13.5px] font-medium px-3 py-2 rounded-lg transition no-underline ${
                  isActive ? 'text-ink bg-bgsoft' : 'text-inksoft hover:text-ink hover:bg-bgsoft'
                }`
              }>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu" aria-expanded={open}
          className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-line bg-paper hover:bg-bgsoft transition">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="#1F1E1B" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="#1F1E1B" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-paper border-b border-line shadow-md2 animate-slide">
          <nav className="max-w-[1200px] mx-auto px-5 py-3 flex flex-col">
            <NavLink to="/" end
              className={({ isActive }) =>
                `py-3 px-3 text-[15px] font-medium rounded-lg no-underline ${isActive ? 'text-ink bg-bgsoft' : 'text-ink hover:bg-bgsoft'}`
              }>홈</NavLink>
            {links.map(l => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) =>
                  `py-3 px-3 text-[15px] font-medium rounded-lg no-underline ${isActive ? 'text-ink bg-bgsoft' : 'text-ink hover:bg-bgsoft'}`
                }>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
