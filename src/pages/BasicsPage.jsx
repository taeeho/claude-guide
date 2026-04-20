import { PageShell } from '../components/primitives.jsx'
import Basics from '../components/Basics.jsx'

export default function BasicsPage() {
  return (
    <PageShell>
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2 text-[11.5px] font-bold tracking-[.08em] text-teal bg-teal-soft px-2.5 py-1 rounded-md uppercase">
          PART 2 · 기본 사용법
        </span>
        <h1 className="text-[30px] sm:text-[38px] leading-[1.1] tracking-[-0.02em] font-extrabold mt-3 mb-2">
          Claude, 제대로 써먹기
        </h1>
        <p className="text-[14.5px] sm:text-[15.5px] text-inksoft max-w-[720px]">
          설치를 마쳤다면 여기서부터. 파일을 넣는 법, 잘 물어보는 법, 자주 하는 업무를 저장해두는 법까지 — 30분이면 업무 속도가 바뀝니다.
        </p>
      </div>
      <Basics />
    </PageShell>
  )
}
