import { PageShell } from '../components/primitives.jsx'
import Cowork from '../components/Cowork.jsx'

export default function CoworkPage() {
  return (
    <PageShell>
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2 text-[11.5px] font-bold tracking-[.08em] text-[#B4281E] bg-[#FCE9E7] px-2.5 py-1 rounded-md uppercase">
          PART 4 · WINDOWS FIX
        </span>
        <h1 className="text-[30px] sm:text-[38px] leading-[1.1] tracking-[-0.02em] font-extrabold mt-3 mb-2">
          COWORK 오류 해결법
        </h1>
        <p className="text-[14.5px] sm:text-[15.5px] text-inksoft max-w-[720px]">
          Claude Cowork가 실행되지 않을 때 두 가지 케이스로 나눠 점검합니다.
          먼저 <b>BIOS 가상화(SVM / VT-x)</b>가 꺼져 있는지 확인하고,
          이미 켜져 있다면 <b>잔여 패키지 정리 후 재설치</b>로 넘어가세요.
        </p>
      </div>
      <Cowork />
    </PageShell>
  )
}
