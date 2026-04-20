import { Link } from 'react-router-dom'

const mainCards = [
  {
    to: '/app', num: 1, tone: 'orange',
    title: 'Claude 앱 설치',
    desc: '브라우저 없이 데스크톱에서 바로 Claude를 쓰는 공식 앱. Mac / Windows 모두 지원.',
    tag: '1단계 · 설치'
  },
  {
    to: '/basics', num: 2, tone: 'teal',
    title: '기본 사용법',
    desc: '파일 올리기, 잘 물어보는 법, 자주 쓰는 업무를 Project로 저장하는 법까지.',
    tag: '2단계 · 사용법'
  },
  {
    to: '/mcp', num: 3, tone: 'orange',
    title: '외부 도구 연결',
    desc: 'Google Drive, Notion, Calendar를 Claude에 연결해 자료를 바로 읽히기.',
    tag: '3단계 · 확장'
  },
  {
    to: '/safety', num: 4, tone: 'red',
    title: '하면 안 되는 것',
    desc: '회사에서 Claude 쓸 때 지켜야 할 보안·검증·로그인 규칙 5가지.',
    tag: '4단계 · 안전'
  }
]

const optionalCards = [
  {
    to: '/code', num: '+', tone: 'teal',
    title: 'Claude Code 설치 (선택)',
    desc: '웹페이지·자동화 도구를 직접 만들고 싶을 때만. 일반 업무용으로는 불필요.',
    tag: '개발·파워유저용'
  },
  {
    to: '/tips', num: '/', tone: 'orange',
    title: 'Code 꿀팁 & 단축키',
    desc: '슬래시 커맨드, 입력창 단축키, CLI 플래그, MCP 관리까지 한 장에.',
    tag: '파워유저용'
  },
  {
    to: '/cowork-guide', num: 'W', tone: 'teal',
    title: 'Cowork 사용 안내',
    desc: '파일 생성·자동화까지 가능한 데스크톱 전용 모드. 세팅부터 업무 예시까지.',
    tag: 'COWORK USAGE'
  },
  {
    to: '/cowork', num: '!', tone: 'red',
    title: 'COWORK 오류 해결',
    desc: 'Claude Cowork가 실행되지 않을 때 — BIOS 가상화·재설치 가이드.',
    tag: 'WINDOWS FIX'
  },
  {
    to: '/troubleshoot', num: '?', tone: 'teal',
    title: '자주 묻는 문제',
    desc: '설치 중 가장 자주 막히는 4가지. 위에서 아래로 한 번씩 점검.',
    tag: 'CHECKLIST'
  }
]

const toneClass = {
  orange: { tag: 'bg-accentsoft text-accent', ring: 'hover:border-accent hover:bg-accentsoft/40' },
  teal:   { tag: 'bg-teal-soft text-teal',    ring: 'hover:border-teal hover:bg-teal-soft/50'   },
  red:    { tag: 'bg-[#FCE9E7] text-[#B4281E]', ring: 'hover:border-[#B4281E] hover:bg-[#FCE9E7]/50' }
}

function Card({ c }) {
  return (
    <Link
      to={c.to}
      className={`group flex flex-col gap-3 bg-paper border border-line rounded-[18px] p-5 sm:p-6 no-underline text-ink shadow-sm2 transition
        ${toneClass[c.tone].ring}
        hover:-translate-y-0.5 hover:shadow-md2`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="w-10 h-10 rounded-[10px] bg-ink text-white grid place-items-center font-extrabold text-[15px] shadow-sm2">
          {c.num}
        </div>
        <span className={`text-[11px] font-bold tracking-[.06em] uppercase px-2 py-1 rounded-md ${toneClass[c.tone].tag}`}>
          {c.tag}
        </span>
      </div>
      <h3 className="text-[18px] sm:text-[19px] font-bold tracking-[-0.01em] m-0 mt-1">{c.title}</h3>
      <p className="text-[13.5px] text-inksoft m-0 leading-relaxed">{c.desc}</p>
      <div className="mt-auto pt-3 flex items-center justify-between text-[13px] font-semibold text-inksoft group-hover:text-accent transition">
        <span>열어보기</span>
        <span className="text-inkmuted group-hover:text-accent group-hover:translate-x-0.5 transition">→</span>
      </div>
    </Link>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-5 sm:px-7 pt-10 sm:pt-16 pb-6 sm:pb-8">
        <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[.04em] text-accent bg-accentsoft px-3 py-1.5 rounded-full uppercase">
          AX팀 Claude 가이드
        </span>
        <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.04] tracking-[-0.025em] mt-4 mb-4 font-extrabold max-w-[880px]">
          처음 쓰시는 분을 위한<br />
          <span className="grad-text">Claude 가이드북</span>
        </h1>
        <p className="text-[15px] sm:text-[17px] text-inksoft max-w-[680px]">
          설치부터 업무 활용까지, 개발 지식 없어도 따라올 수 있게. <b>1 → 2 → 3 → 4 순서</b>로 한 번씩만 훑으시면 됩니다.
        </p>
      </section>

      {/* 분기 박스 */}
      <section className="max-w-[1100px] mx-auto px-5 sm:px-7 mb-10">
        <h2 className="text-[13.5px] font-bold text-inksoft tracking-[.1em] uppercase mb-3">나는 어느 쪽?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-5 sm:p-6 bg-teal-soft border border-[#B7DDD5] rounded-r2">
            <span className="inline-block text-[11px] font-bold tracking-[.08em] uppercase text-teal bg-paper px-2 py-0.5 rounded mb-2">99%의 사용자</span>
            <h3 className="text-[17px] sm:text-[18px] font-bold text-ink mb-1.5">일반 업무에 Claude를 쓸 거예요</h3>
            <p className="text-[13.5px] sm:text-[14px] text-inksoft m-0 leading-relaxed">
              대화, 문서 요약, 이메일 작성, 자료 조사, 데이터 분석, 이미지 설명 — <b>Claude 앱 하나만 설치</b>하면 끝.
              아래 <b>1 → 2 → 3 → 4</b> 순서로 읽으세요.
            </p>
          </div>
          <div className="p-5 sm:p-6 bg-accentsoft border border-[#F3CBA9] rounded-r2">
            <span className="inline-block text-[11px] font-bold tracking-[.08em] uppercase text-accent bg-paper px-2 py-0.5 rounded mb-2">파워유저만</span>
            <h3 className="text-[17px] sm:text-[18px] font-bold text-ink mb-1.5">웹페이지·자동화 도구를 직접 만들고 싶어요</h3>
            <p className="text-[13.5px] sm:text-[14px] text-inksoft m-0 leading-relaxed">
              그때만 추가로 <b>Claude Code</b>를 설치하면 됩니다. 바이브코딩 MVP 용도 외엔 필요 없어요.
              하단 <b>선택 · 필요할 때만</b> 섹션에서 확인.
            </p>
          </div>
        </div>
      </section>

      {/* 메인 카드 */}
      <main className="max-w-[1100px] mx-auto px-5 sm:px-7 pb-10">
        <h2 className="text-[13.5px] font-bold text-inksoft tracking-[.1em] uppercase mb-4">이 순서대로 보세요</h2>
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {mainCards.map(c => <Card key={c.to} c={c} />)}
        </div>
      </main>

      {/* 선택 카드 */}
      <section className="max-w-[1100px] mx-auto px-5 sm:px-7 pb-16">
        <h2 className="text-[13.5px] font-bold text-inksoft tracking-[.1em] uppercase mb-4">선택 · 필요할 때만</h2>
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {optionalCards.map(c => <Card key={c.to} c={c} />)}
        </div>
      </section>
    </>
  )
}
