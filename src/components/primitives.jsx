import { useState, useMemo, createContext, useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* ---------- PageShell: wraps non-home pages with back link + scroll-top ---------- */
export function PageShell({ children, backTo = '/', backLabel = '홈으로' }) {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return (
    <main className="max-w-[1100px] mx-auto px-5 sm:px-7 pt-6 sm:pt-10 pb-16 animate-fade">
      <Link to={backTo}
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-inksoft hover:text-accent mb-4 no-underline">
        <span aria-hidden>←</span>{backLabel}
      </Link>
      {children}
    </main>
  )
}

/* ---------- Section shell ---------- */
export function Section({ id, tone = 'teal', eyebrow, title, desc, children }) {
  const tagBg = tone === 'orange' ? 'bg-accentsoft text-accent' : 'bg-teal-soft text-teal'
  return (
    <section
      id={id}
      className="mt-14 bg-paper border border-line rounded-[18px] overflow-hidden"
    >
      <div className="px-6 sm:px-9 pt-8 sm:pt-9 pb-6 bg-gradient-to-b from-bgsoft to-transparent border-b border-line">
        <span className={`inline-flex items-center gap-2 text-[12px] font-bold tracking-[.06em] uppercase ${tagBg} px-2.5 py-1 rounded-md`}>
          {eyebrow}
        </span>
        <h2 className="mt-3 mb-1 text-[26px] sm:text-[32px] font-bold tracking-[-0.02em] leading-tight">{title}</h2>
        <p className="m-0 max-w-2xl text-[14.5px] sm:text-[15.5px] text-inksoft">{desc}</p>
      </div>
      <div className="px-5 sm:px-9 py-6 sm:py-8">{children}</div>
    </section>
  )
}

/* ---------- Tabs (controlled, OS tabs) ---------- */
const TabsCtx = createContext(null)
export function Tabs({ initial, children }) {
  const [active, setActive] = useState(initial)
  const value = useMemo(() => ({ active, setActive }), [active])
  return <TabsCtx.Provider value={value}>{children}</TabsCtx.Provider>
}
export function TabList({ children }) {
  return (
    <div className="inline-flex bg-bgsoft border border-line rounded-[10px] p-1 gap-1 mb-7">
      {children}
    </div>
  )
}
export function Tab({ id, children }) {
  const { active, setActive } = useContext(TabsCtx)
  const isActive = active === id
  return (
    <button
      onClick={() => setActive(id)}
      className={`px-4 sm:px-[18px] py-2 rounded-[7px] text-[13.5px] font-semibold inline-flex items-center gap-2 transition
        ${isActive ? 'bg-paper text-ink shadow-sm2' : 'text-inksoft hover:text-ink'}`}
    >
      <span className={`w-[6px] h-[6px] rounded-full ${isActive ? 'bg-accent' : 'bg-inkmuted'}`} />
      {children}
    </button>
  )
}
export function TabPane({ id, children }) {
  const { active } = useContext(TabsCtx)
  if (active !== id) return null
  return <div className="animate-fade">{children}</div>
}

/* ---------- OS Banner ---------- */
export function OsBanner({ children }) {
  return (
    <div className="flex items-center gap-2.5 mb-1 text-[13px] font-semibold text-inkmuted uppercase tracking-[.08em]">
      <span>{children}</span>
      <span className="flex-1 h-px bg-line" />
    </div>
  )
}

/* ---------- Step card ---------- */
export function Step({ n, title, children }) {
  return (
    <div className="grid grid-cols-[36px_1fr] sm:grid-cols-[44px_1fr] gap-4 sm:gap-[18px] p-4 sm:p-5 border border-line rounded-r2 bg-paper hover:border-linestrong hover:shadow-sm2 transition">
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] bg-ink text-white grid place-items-center font-bold text-[14px] sm:text-[15px] shadow-sm2">{n}</div>
      <div className="min-w-0">
        <h4 className="mt-0.5 mb-2 text-[16px] sm:text-[17px] font-bold tracking-[-0.01em]">{title}</h4>
        <div className="text-[14px] sm:text-[14.5px] text-inksoft space-y-1.5 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
export function Steps({ children }) {
  return <div className="flex flex-col gap-4 mt-2">{children}</div>
}

/* ---------- Keyboard key ---------- */
export function Kbd({ children }) {
  return (
    <span className="inline-block font-mono bg-bgsoft border border-linestrong px-2 rounded-md text-[13px] text-ink shadow-[0_1px_0_#D4CDBE]">
      {children}
    </span>
  )
}

/* ---------- Callout ---------- */
export function Callout({ tone = 'info', children }) {
  const styles = tone === 'warn'
    ? 'bg-warn-soft border-[#F2D78A] text-[#7C4A00]'
    : 'bg-teal-soft border-[#B7DDD5] text-[#0E5C56]'
  const iconBg = tone === 'warn' ? 'text-[#7C4A00]' : 'text-[#0E5C56]'
  const icon = tone === 'warn' ? '!' : 'i'
  return (
    <div className={`flex gap-3 px-4 py-3.5 rounded-[10px] border text-[14px] ${styles}`}>
      <span className={`font-bold text-[16px] leading-[1.4] flex-shrink-0 ${iconBg}`}>{icon}</span>
      <span className="min-w-0">{children}</span>
    </div>
  )
}

/* ---------- Code Block with copy ---------- */
export function CodeBlock({ prompt = '$', children, copyText }) {
  const [ok, setOk] = useState(false)
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText ?? (typeof children === 'string' ? children : ''))
      setOk(true); setTimeout(() => setOk(false), 1400)
    } catch {}
  }
  return (
    <div className="code">
      <button onClick={onCopy} className={`copy ${ok ? 'ok' : ''}`}>{ok ? '복사됨 ✓' : '복사'}</button>
      {Array.isArray(children) ? children : <><span className="prompt">{prompt}</span>{children}</>}
    </div>
  )
}
export function CodeLine({ prompt = '$', children }) {
  return <><span className="prompt">{prompt}</span>{children}<br /></>
}

/* ---------- Figure ---------- */
export function Shot({ src, alt, caption }) {
  return (
    <figure className="my-3.5 border border-line rounded-r2 bg-[#0E0E0C] p-3.5 overflow-hidden">
      <img src={src} alt={alt} className="block w-full h-auto rounded-lg shadow-md2" />
      {caption && <figcaption className="mt-2.5 text-[12.5px] text-[#A8A39A] text-center tracking-[.02em]">{caption}</figcaption>}
    </figure>
  )
}

/* ---------- Placeholder for images not yet added ---------- */
export function ImagePlaceholder({ label, hint }) {
  return (
    <div className="my-3.5 border border-dashed border-linestrong rounded-r2 bg-bgsoft px-5 py-7 text-center">
      <div className="text-[13.5px] font-semibold text-inksoft">[ 스크린샷 추가 예정 ]</div>
      <div className="text-[13px] text-ink mt-1.5">{label}</div>
      {hint && <div className="text-[12px] text-inkmuted mt-1">{hint}</div>}
    </div>
  )
}
