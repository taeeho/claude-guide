import { PageShell } from '../components/primitives.jsx'
import Tips from '../components/Tips.jsx'

export default function TipsPage() {
  return (
    <PageShell>
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2 text-[11.5px] font-bold tracking-[.08em] text-accent bg-accentsoft px-2.5 py-1 rounded-md uppercase">
          TIPS · Claude Code
        </span>
        <h1 className="text-[28px] sm:text-[38px] leading-[1.1] tracking-[-0.02em] font-extrabold mt-3 mb-2">
          자주 쓰는 커맨드와 단축키
        </h1>
        <p className="text-[14.5px] sm:text-[15.5px] text-inksoft max-w-[720px]">
          설치 끝낸 다음 이것만 익혀두면 Claude Code 속도가 확 달라집니다. 전부 외우지 말고 자주 쓰는 것부터.
        </p>
      </div>
      <Tips />
    </PageShell>
  )
}
