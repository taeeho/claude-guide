import { Section, CodeBlock, CodeLine, Callout, Steps, Step, Shot } from './primitives.jsx'

const mcps = [
  {
    iconTone: 'green', iconText: 'PW', tagTone: '', tag: '필수',
    name: 'Playwright',
    tagline: '실제 브라우저를 열어 웹 동작·E2E 시나리오를 검증.',
    why: ['내가 만든 MVP 화면이 실제로 동작하는지 확인', '로그인·폼·스크린샷 자동화', '바이브코딩 결과물 회귀 테스트'],
    cmd: 'claude mcp add playwright -- npx -y @playwright/mcp@latest',
    docs: 'https://github.com/microsoft/playwright-mcp',
    need: 'Node.js 필요'
  },
  {
    iconTone: 'blue', iconText: 'C7', tagTone: '', tag: '필수',
    name: 'Context7',
    tagline: '라이브러리·프레임워크 최신 공식 문서를 실시간으로 주입.',
    why: ['React / FastAPI / Supabase SDK 버전 따라가기', '학습 데이터보다 최신인 API 반영', '“이 버전엔 이 메서드 없어요” 방지'],
    cmd: 'claude mcp add context7 -- npx -y @upstash/context7-mcp',
    docs: 'https://github.com/upstash/context7',
    need: 'API key 선택'
  },
  {
    iconTone: 'purple', iconText: 'ST', tagTone: '', tag: '필수',
    name: 'Sequential Thinking',
    tagline: '복잡한 문제를 단계별로 쪼개서 깊게 사고하게 만드는 추론 도구.',
    why: ['아키텍처 / 트레이드오프 판단', 'N8N vs 코드 구현 같은 선택지 비교', '디버깅 가설 트리 탐색'],
    cmd: 'claude mcp add sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking',
    docs: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking',
    need: '키 불필요'
  },
  {
    iconTone: 'gray', iconText: 'No', tagTone: '', tag: '필수',
    name: 'Notion',
    tagline: 'Notion 페이지·DB를 직접 읽고 쓰며 문서화 자동화.',
    why: ['회의록·가이드·요구사항 페이지 자동 생성', '팀 위키 검색·요약', '업무 티켓 DB CRUD'],
    cmd: 'claude mcp add notion --env NOTION_TOKEN=secret_xxx -- npx -y @notionhq/notion-mcp-server',
    docs: 'https://github.com/makenotion/notion-mcp-server',
    need: 'Internal Integration 토큰 필요'
  },
  {
    iconTone: 'yellow', iconText: 'GD', tagTone: '', tag: '필수',
    name: 'Google Drive',
    tagline: '드라이브 파일 검색·읽기·Google Sheets 내용 접근.',
    why: ['팀 드라이브의 자료 검색·요약', 'Sheets 데이터 불러와 분석·리포트 생성', '첨부 PDF·문서 맥락으로 사용'],
    cmd: 'claude mcp add gdrive -- npx -y @modelcontextprotocol/server-gdrive',
    docs: 'https://github.com/modelcontextprotocol/servers/tree/main/src/gdrive',
    need: 'OAuth 인증 필요'
  },
  {
    iconTone: 'rose', iconText: 'GC', tagTone: 'teal', tag: '업무',
    name: 'Google Calendar',
    tagline: '일정 조회·생성·리마인더 자동화.',
    why: ['"다음주 회의 잡아줘" 처럼 자연어로 일정 등록', '회의 전 브리핑 노트 자동 생성', '빈 시간 탐색 후 일정 제안'],
    cmd: 'claude mcp add gcal -- npx -y @cocal/google-calendar-mcp',
    docs: 'https://github.com/nspady/google-calendar-mcp',
    need: 'OAuth 인증 필요'
  },
  {
    iconTone: 'green', iconText: 'Sb', tagTone: 'teal', tag: '업무',
    name: 'Supabase',
    tagline: 'PostgreSQL 쿼리·스키마 관리·스토리지를 Claude가 직접.',
    why: ['AX팀 기본 DB 스택과 궁합 최상', '테이블 설계·마이그레이션 초안', '데이터 추출·리포트 쿼리 자동화'],
    cmd: 'claude mcp add supabase --env SUPABASE_ACCESS_TOKEN=sbp_xxx -- npx -y @supabase/mcp-server-supabase@latest',
    docs: 'https://github.com/supabase-community/supabase-mcp',
    need: 'Access Token 필요'
  },
  {
    iconTone: 'slate', iconText: 'Fs', tagTone: 'teal', tag: '업무',
    name: 'Filesystem',
    tagline: '허용한 폴더만 안전하게 읽기/쓰기 — 데스크톱 앱에서 특히 유용.',
    why: ['Claude 앱이 로컬 파일을 직접 다룰 수 있게', '여러 프로젝트 폴더 넘나들기', '권한 범위 명시적 제한(보안↑)'],
    cmd: 'claude mcp add fs -- npx -y @modelcontextprotocol/server-filesystem "C:\\Users\\MKM10011\\Desktop"',
    docs: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',
    need: '허용 경로 지정'
  },
  {
    iconTone: 'gray', iconText: 'Gh', tagTone: 'teal', tag: '업무',
    name: 'GitHub',
    tagline: '저장소·이슈·PR·코드 검색을 Claude가 직접 다루기.',
    why: ['PR 리뷰·요약·코멘트', '이슈 티켓 자동 생성', '레포 코드 검색 후 수정 제안'],
    cmd: 'claude mcp add --transport http github https://api.githubcopilot.com/mcp/',
    docs: 'https://github.com/github/github-mcp-server',
    need: 'GitHub OAuth 필요'
  }
]

const iconToneClass = {
  orange: 'bg-accentsoft border-[#F3CBA9]',
  teal:   'bg-teal-soft border-[#B7DDD5]',
  purple: 'bg-[#F1EBFB] border-[#DDD0F1]',
  blue:   'bg-[#E6EEFB] border-[#C2D3F0]',
  rose:   'bg-[#FBE7EE] border-[#F0C2D1]',
  green:  'bg-[#E5F3E6] border-[#BEDFC0]',
  yellow: 'bg-[#FAF2CF] border-[#EDDD8E]',
  gray:   'bg-bgsoft border-line',
  slate:  'bg-[#E7EAEE] border-[#C4CBD4]'
}

const pillToneClass = {
  '':     'bg-accentsoft text-accent',
  teal:   'bg-teal-soft text-teal'
}

function McpCard({ m }) {
  return (
    <div className="flex flex-col gap-2.5 p-5 border border-line rounded-r2 bg-paper transition hover:border-linestrong hover:shadow-md2 hover:-translate-y-0.5">
      <div className="flex items-center justify-between gap-2">
        <div className={`w-10 h-10 rounded-[10px] grid place-items-center text-[15px] font-bold border ${iconToneClass[m.iconTone]}`}>
          {m.iconText}
        </div>
        <span className={`text-[11px] font-bold tracking-[.06em] uppercase px-2 py-0.5 rounded-md ${pillToneClass[m.tagTone]}`}>{m.tag}</span>
      </div>
      <h4 className="m-0 text-[17px] font-bold tracking-[-0.01em]">{m.name}</h4>
      <p className="m-0 text-[13.5px] text-inksoft min-h-[2.6em]">{m.tagline}</p>
      <ul className="list-disc pl-4 my-1 text-[13px] text-inksoft space-y-0.5">
        {m.why.map((w, i) => <li key={i}>{w}</li>)}
      </ul>
      <div className="mt-1">
        <div className="code !text-[12px] !py-2.5 !pl-3 !pr-14 break-all whitespace-pre-wrap">
          <BreakableCmd cmd={m.cmd} />
          <CopyMini text={m.cmd} />
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 mt-auto pt-2 text-[12.5px]">
        <a href={m.docs} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold no-underline border-b border-transparent hover:border-accent">공식 문서 →</a>
        <span className="text-inkmuted">{m.need}</span>
      </div>
    </div>
  )
}

function BreakableCmd({ cmd }) {
  // Split long cmd into tokens for easier wrapping
  return <><span className="prompt">$</span>{cmd}</>
}
function CopyMini({ text }) {
  const onCopy = async () => {
    try { await navigator.clipboard.writeText(text) } catch {}
  }
  return (
    <button onClick={onCopy} className="copy">복사</button>
  )
}

export default function McpGrid() {
  return (
    <Section
      id="mcp"
      tone="orange"
      eyebrow="PART 3 · 외부 도구 연결"
      title="Claude를 다른 서비스와 연결하기"
      desc="Google Drive의 파일을 Claude에게 바로 읽히거나, Notion 페이지를 요약·작성하거나, 캘린더 일정을 잡을 수 있어요. 아래 두 가지 방법 중 편한 쪽을 선택하세요."
    >
      {/* 앱 방식 - 비개발자용 (권장) */}
      <div className="mb-10 p-5 sm:p-7 bg-teal-soft/50 border border-[#B7DDD5] rounded-r2">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[.08em] text-teal bg-paper px-2 py-0.5 rounded mb-3">권장 · 비개발자</span>
        <h3 className="m-0 text-[20px] sm:text-[22px] font-bold">방법 1 · Claude 앱에서 클릭으로 연결</h3>
        <p className="mt-2 mb-5 text-[14px] sm:text-[14.5px] text-inksoft max-w-[720px]">
          Google Drive, Google Calendar, Gmail, GitHub, Notion 같은 주요 서비스는 <b>Claude 데스크톱 앱의 Settings</b>에서 클릭 몇 번으로 연결할 수 있어요.
          터미널을 쓸 필요 없습니다.
        </p>

        <Steps>
          <Step n="1" title="Claude 앱 실행 → 좌측 하단 프로필 → Settings 클릭">
            <p>앱을 켜고 왼쪽 사이드바 맨 아래의 프로필(본인 이름) 영역을 누르면 메뉴가 뜹니다. <b>Settings</b>를 선택하세요. (단축키 <code className="bg-bgsoft border border-line px-1.5 rounded">Ctrl + ,</code>)</p>
            <Shot
              src="/images/connectors/01-settings.png"
              alt="Claude 앱 좌측 하단 프로필 메뉴의 Settings 항목"
              caption="프로필 클릭 → 메뉴 최상단의 Settings"
            />
          </Step>
          <Step n="2" title="왼쪽 메뉴에서 Connectors 선택 → 원하는 서비스 Connect">
            <p>Settings 창의 왼쪽 사이드에서 <b>Connectors</b> 탭을 누르면 연결 가능한 외부 서비스 목록이 나옵니다. Google Drive, Google Calendar, GitHub 등이 기본 제공돼요.</p>
            <p>쓰고 싶은 서비스의 <b>Connect</b> 버튼을 누르세요.</p>
            <Shot
              src="/images/connectors/02-connectors.png"
              alt="Settings > Connectors 화면의 서비스 목록"
              caption="Connectors 탭의 서비스 목록. 하단의 [Add custom connector]는 목록에 없는 도구를 직접 추가할 때."
            />
            <Callout tone="info">
              상단에 <b>"Connectors have moved to Customize"</b> 안내가 뜰 수 있어요. 그 경우 <b>Go to Customize</b> 버튼을 눌러 새 화면에서 동일하게 관리하시면 됩니다. 기능 자체는 같습니다.
            </Callout>
          </Step>
          <Step n="3" title="브라우저에서 로그인·권한 승인">
            <p>Connect를 누르면 브라우저가 자동으로 열리면서 해당 서비스 로그인 화면으로 이동합니다. <b>회사 이메일(@ccfm.co.kr)</b>로 로그인하고 "허용/Allow"을 누르면 끝. 앱으로 돌아오면 상태가 <b>Connected</b>로 바뀝니다.</p>
          </Step>
          <Step n="4" title="대화창에서 바로 쓰기">
            <ul className="list-disc pl-5 space-y-1">
              <li>"내 <b>캘린더</b>에서 이번 주 일정 요약하고, 회의 준비할 안건 제안해줘"</li>
              <li>"<b>구글 드라이브</b>에서 '2026 사업계획'으로 검색해서 가장 최근 파일 요약해줘"</li>
              <li>"<b>깃허브</b>의 내 저장소 중 최근 일주일 이슈만 뽑아줘"</li>
            </ul>
          </Step>
        </Steps>

        <div className="mt-4">
          <Callout tone="info">
            연결 가능한 서비스 목록은 회사 플랜(Team/Enterprise)과 계정 권한에 따라 달라질 수 있어요. 찾는 서비스가 없으면 <b>아래 방법 2</b>를 참고.
          </Callout>
        </div>
      </div>

      {/* 개발자 방식 - Claude Code CLI */}
      <div className="mb-5">
        <span className="inline-block text-[11px] font-bold uppercase tracking-[.08em] text-accent bg-accentsoft px-2 py-0.5 rounded mb-3">개발자·파워유저</span>
        <h3 className="m-0 text-[20px] sm:text-[22px] font-bold">방법 2 · Claude Code로 MCP 서버 직접 설치</h3>
        <p className="mt-2 mb-4 text-[14px] sm:text-[14.5px] text-inksoft max-w-[780px]">
          앱의 Connectors에 없는 도구(Supabase, Playwright, Sequential Thinking 등)를 쓰려면, <b>Claude Code CLI</b>에서 한 줄 명령으로 MCP(Model Context Protocol) 서버를 직접 붙입니다. Claude Code 설치가 먼저 필요해요 (<a href="#/code" className="text-accent font-medium hover:underline">설치 페이지</a>).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div className="text-[14px] text-inksoft bg-bgsoft border border-line rounded-r2 px-4 py-4 leading-relaxed">
          <b className="text-ink">사용 방법</b> — 아래 각 카드의 명령을 터미널(PowerShell/Terminal)에 그대로 붙여넣으면 됩니다.<br />
          등록 후 <code className="bg-bg border border-line px-1.5 rounded">claude mcp list</code> 로 연결 상태 확인.
        </div>
        <CodeBlock copyText={"claude mcp list\nclaude mcp add <name> -- <command> <args...>"}>
          <CodeLine>claude mcp list</CodeLine>
          <CodeLine>claude mcp add &lt;name&gt; -- &lt;command&gt; &lt;args...&gt;</CodeLine>
        </CodeBlock>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {mcps.map(m => <McpCard key={m.name} m={m} />)}
      </div>

      <div className="mt-6">
        <Callout tone="info">
          커맨드가 잘 안 먹히면 <code className="bg-white/60 px-1.5 rounded">claude mcp remove &lt;name&gt;</code> 로 지우고 다시 등록하세요.
          Node.js 기반 MCP는 최초 실행 시 <code className="bg-white/60 px-1.5 rounded">npx</code>가 패키지를 받느라 몇 초~수십 초 걸릴 수 있어요.
        </Callout>
      </div>
    </Section>
  )
}
