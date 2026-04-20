import { PageShell } from '../components/primitives.jsx'
import CoworkGuide from '../components/CoworkGuide.jsx'

export default function CoworkGuidePage() {
  return (
    <PageShell>
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2 text-[11.5px] font-bold tracking-[.08em] text-accent bg-accentsoft px-2.5 py-1 rounded-md uppercase">
          COWORK · 사용 안내
        </span>
        <h1 className="text-[28px] sm:text-[38px] leading-[1.1] tracking-[-0.02em] font-extrabold mt-3 mb-2">
          Cowork 사용 안내
        </h1>
        <p className="text-[14.5px] sm:text-[15.5px] text-inksoft max-w-[760px]">
          "대화만 하는 AI"에서 "직접 실행하는 AI 업무 파트너"로 — 파일을 직접 만들고, 반복 업무를 자동화하는 Claude 데스크톱 앱 전용 모드.
        </p>
      </div>
      <CoworkGuide />
    </PageShell>
  )
}
