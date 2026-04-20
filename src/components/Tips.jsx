import { Section, Callout, Kbd } from './primitives.jsx'

function Cmd({ children }) {
  return (
    <code className="font-mono bg-bgsoft border border-line px-2 py-0.5 rounded text-[13px] text-ink break-all">
      {children}
    </code>
  )
}

function Combo({ children }) {
  return <span className="inline-flex gap-1 items-center flex-wrap">{children}</span>
}

function Row({ label, title, desc, example }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[210px_1fr] gap-2 sm:gap-5 p-3 sm:p-4 border border-line rounded-r2 bg-paper hover:border-linestrong transition">
      <div className="flex flex-wrap gap-1.5 items-start sm:pt-0.5 min-w-0">{label}</div>
      <div className="min-w-0">
        <div className="text-[14.5px] sm:text-[15px] font-bold mb-1 leading-snug">{title}</div>
        {desc && <p className="text-[13.5px] text-inksoft m-0 leading-relaxed">{desc}</p>}
        {example && (
          <div className="mt-2 text-[12.5px] font-mono text-inksoft bg-bgsoft border border-line px-2.5 py-1.5 rounded leading-relaxed break-all">
            {example}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Tips() {
  return (
    <>
      <Section
        id="tips-slash"
        tone="teal"
        eyebrow="1 · 슬래시 커맨드"
        title="/ 로 시작하는 명령어"
        desc="채팅창에 / 만 치면 사용 가능한 커맨드가 리스트로 뜹니다. 자주 쓰는 것 8개."
      >
        <div className="flex flex-col gap-3">
          <Row label={<Cmd>/help</Cmd>} title="전체 커맨드 목록 보기" desc="뭐가 있는지 까먹었을 때 제일 먼저." />
          <Row label={<Cmd>/clear</Cmd>} title="현재 세션 초기화" desc="주제가 바뀔 때 누르면 이전 대화 맥락을 모두 비우고 새로 시작합니다." />
          <Row
            label={<Cmd>/compact</Cmd>}
            title="긴 대화를 요약해서 압축"
            desc="컨텍스트 한도에 가까워졌을 때. Claude가 지금까지 대화를 요약해 핵심만 남기고 컨텍스트를 비워줍니다. 일을 이어가면서 메모리만 리프레시하고 싶을 때."
          />
          <Row label={<Cmd>/rename</Cmd>} title="현재 대화 제목 바꾸기" desc="자동 제목이 맘에 안 들 때. 나중에 /resume 으로 찾기 쉬워집니다." />
          <Row label={<Cmd>/resume</Cmd>} title="이전 대화 불러와 이어하기" desc="지난번 하던 작업을 그대로 받아 계속할 때." />
          <Row
            label={<Cmd>/init</Cmd>}
            title="프로젝트 CLAUDE.md 자동 생성"
            desc="새 프로젝트 폴더에서 처음 실행. Claude가 폴더 구조와 핵심 파일을 훑어 팀 공통 지침 파일(CLAUDE.md) 초안을 만들어줍니다."
          />
          <Row
            label={<Cmd>/model</Cmd>}
            title="모델 변경 (Opus · Sonnet · Haiku)"
            desc="빨리 끝낼 땐 Haiku, 아키텍처·트레이드오프 고민엔 Opus. 작업 성격에 맞게 교체."
          />
          <Row label={<Cmd>/config</Cmd>} title="테마·설정 변경" desc="다크/라이트 테마, 폰트, 기본값 등 설정 화면." />
        </div>
      </Section>

      <Section
        id="tips-input"
        tone="orange"
        eyebrow="2 · 입력창 꿀팁"
        title="채팅창에서 바로 쓰는 단축키·특수문자"
        desc="타자 효율을 크게 올려주는 것들. 이 섹션만 외워도 체감이 달라집니다."
      >
        <div className="flex flex-col gap-3">
          <Row
            label={<Cmd>@파일경로</Cmd>}
            title="파일·폴더를 대화에 첨부"
            desc="@ 를 치면 파일 자동완성이 뜹니다. Claude가 해당 파일을 직접 읽어서 답해요."
            example="@src/App.jsx 이 파일에서 이상한 부분 있으면 고쳐줘"
          />
          <Row
            label={<Cmd>#내용</Cmd>}
            title="메모리에 저장 (CLAUDE.md 업데이트)"
            desc="Claude가 앞으로 기억해야 할 규칙·사실을 그 자리에서 CLAUDE.md에 추가해줍니다."
            example="# 이 프로젝트는 항상 한국어 주석을 씁니다"
          />
          <Row
            label={<Cmd>!명령</Cmd>}
            title="한 번만 셸 명령 실행"
            desc="Claude에게 요청하지 않고 터미널 명령을 그 자리에서 직접 실행."
            example="!git status"
          />
          <Row
            label={<Combo><Kbd>Ctrl</Kbd>+<Kbd>J</Kbd></Combo>}
            title="여러 줄 입력 (줄바꿈)"
            desc="엔터는 전송, Ctrl+J 는 줄바꿈. 긴 프롬프트 쓸 때 필수."
          />
          <Row
            label={<Combo><Kbd>Shift</Kbd>+<Kbd>Tab</Kbd></Combo>}
            title="Plan 모드 토글"
            desc="켜면 Claude가 파일 수정 전에 먼저 계획안을 제시합니다. 큰 작업은 일단 이걸로 계획 보고 → 승인 → 실행 흐름이 안전해요."
          />
          <Row label={<Kbd>Esc</Kbd>} title="Claude 응답 중단" desc="엉뚱한 방향으로 갈 때 즉시 멈춤." />
          <Row
            label={<Combo><Kbd>Esc</Kbd> <Kbd>Esc</Kbd></Combo>}
            title="직전 내 메시지 편집"
            desc="방금 보낸 프롬프트를 고쳐서 다시 보낼 수 있어요."
          />
          <Row
            label={<Combo><Kbd>Ctrl</Kbd>+<Kbd>U</Kbd></Combo>}
            title="입력창 한 줄 통째로 지우기"
            desc="잘못 쓰던 프롬프트를 빠르게 리셋할 때."
          />
          <Row
            label={<Combo><Kbd>Alt</Kbd>+<Kbd>V</Kbd></Combo>}
            title="클립보드 이미지 붙여넣기"
            desc="캡처한 이미지를 대화에 그대로 첨부. 에러 화면·디자인 시안·대시보드를 이미지로 물어볼 때."
          />
          <Row
            label={<span className="text-[13px] text-inksoft font-semibold">드래그 & 드롭</span>}
            title="파일 첨부"
            desc="탐색기에서 파일을 대화창으로 끌어다 놓으면 바로 첨부됩니다."
          />
        </div>
      </Section>

      <Section
        id="tips-terminal"
        tone="teal"
        eyebrow="3 · 터미널 단축키"
        title="터미널을 쪼개서 멀티작업"
        desc={<>Claude Code 자체 기능이 아니라 <b>Windows Terminal</b> 단축키입니다. 한 창에 터미널 여러 개를 나란히 띄워 동시 작업할 때 유용해요.</>}
      >
        <div className="flex flex-col gap-3">
          <Row
            label={<Combo><Kbd>Alt</Kbd>+<Kbd>Shift</Kbd>+<Kbd>+</Kbd></Combo>}
            title="옆에 터미널 하나 더 열기 (Split Pane)"
            desc="창을 좌우로 쪼개 두 번째 터미널을 띄웁니다. 한쪽은 Claude Code, 다른 쪽은 서버 실행·로그 확인 같은 식으로."
          />
          <Row
            label={<Combo><Kbd>Ctrl</Kbd>+<Kbd>Shift</Kbd>+<Kbd>W</Kbd></Combo>}
            title="분할된 터미널 하나 닫기"
            desc="옆에 띄운 pane만 닫힘. 전체 창은 안 닫힙니다."
          />
          <Row label={<Combo><Kbd>Alt</Kbd>+<Kbd>←</Kbd>/<Kbd>→</Kbd></Combo>} title="좌/우 pane으로 포커스 이동" desc="마우스 안 쓰고 pane 간 이동." />
          <Row label={<Combo><Kbd>Alt</Kbd>+<Kbd>↑</Kbd>/<Kbd>↓</Kbd></Combo>} title="위/아래 pane으로 포커스 이동" desc="가로로도 분할한 경우." />
        </div>
        <div className="mt-4">
          <Callout tone="info">
            다른 터미널 앱(iTerm2 · VS Code 내장 터미널 · 기존 PowerShell 창 등)은 단축키가 다릅니다. 위는 Windows Terminal 기준.
          </Callout>
        </div>
      </Section>

      <Section
        id="tips-mcp"
        tone="teal"
        eyebrow="4 · MCP 관리"
        title="외부 도구 연결 커맨드"
        desc={<>Claude Code에 MCP 서버를 붙일 때 쓰는 커맨드. 자세한 추천 목록은 <a href="#/mcp" className="text-accent font-medium hover:underline">외부 도구 연결 페이지</a>.</>}
      >
        <div className="flex flex-col gap-3">
          <Row
            label={<Cmd>claude mcp list</Cmd>}
            title="연결된 MCP 서버 목록·상태 확인"
            desc="뭐가 붙어 있고 연결 상태가 어떤지 한눈에."
          />
          <Row
            label={<Cmd>claude mcp add &lt;name&gt;</Cmd>}
            title="새 MCP 서버 등록"
            desc="외부 도구 연결 페이지의 각 카드에 적힌 커맨드를 그대로 붙여넣으면 됩니다."
          />
          <Row
            label={<Cmd>claude mcp remove &lt;name&gt;</Cmd>}
            title="MCP 서버 제거"
            desc="등록이 꼬였을 땐 지우고 다시 등록하는 게 제일 빠릅니다."
          />
        </div>
      </Section>
    </>
  )
}
