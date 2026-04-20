import { PageShell } from '../components/primitives.jsx'
import Safety from '../components/Safety.jsx'

export default function SafetyPage() {
  return (
    <PageShell>
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2 text-[11.5px] font-bold tracking-[.08em] text-accent bg-accentsoft px-2.5 py-1 rounded-md uppercase">
          PART 4 · 안전 수칙
        </span>
        <h1 className="text-[30px] sm:text-[38px] leading-[1.1] tracking-[-0.02em] font-extrabold mt-3 mb-2">
          하면 안 되는 것
        </h1>
        <p className="text-[14.5px] sm:text-[15.5px] text-inksoft max-w-[720px]">
          기업 환경에서 Claude를 쓸 때 꼭 지켜야 할 5가지. 처음 한 번만 읽어두면 충분합니다.
        </p>
      </div>
      <Safety />
    </PageShell>
  )
}
