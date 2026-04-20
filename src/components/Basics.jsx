import { Section, Steps, Step, Callout, Shot, Kbd } from './primitives.jsx'

function PromptCompare({ bad, good }) {
  return (
    <div className="rounded-r2 border border-line bg-paper overflow-hidden">
      <div className="bg-[#FCE9E7] text-[#B4281E] px-4 py-2 text-[11.5px] font-bold tracking-[.08em] uppercase">Before · 아쉬운 질문</div>
      <div className="px-4 py-3 text-[14px] text-inksoft">{bad}</div>
      <div className="bg-teal-soft text-teal px-4 py-2 text-[11.5px] font-bold tracking-[.08em] uppercase border-t border-line">After · 좋은 질문</div>
      <div className="px-4 py-3 text-[14px] text-ink leading-relaxed">{good}</div>
    </div>
  )
}

export default function Basics() {
  return (
    <>
      <Section
        id="basics-files"
        tone="teal"
        eyebrow="STEP 1 · 파일·이미지"
        title="자료를 채팅창에 넣기"
        desc="문서 요약·데이터 정리·이미지 설명 — 파일을 대화창에 그냥 끌어다 놓으면 끝입니다."
      >
        <Steps>
          <Step n="1" title="드래그 & 드롭으로 파일 올리기">
            <p>PDF, Word, PPT, Excel, CSV, 이미지(PNG/JPG) 모두 지원합니다. 탐색기에서 파일을 집어 채팅창 위로 가져가면 <b>"Drop files here to add to chat"</b> 안내가 뜨는데, 그 위에서 손을 놓으면 끝.</p>
            <Shot
              src="/images/basics/drag-drop.png"
              alt="파일 탐색기에서 Claude 채팅창으로 파일을 드래그하는 모습"
              caption="파일이 채팅창 위에 오면 'Drop files here to add to chat' 영역이 나타납니다."
            />
          </Step>
          <Step n="2" title={<span>스크린샷은 <Kbd>Ctrl</Kbd>+<Kbd>V</Kbd> 로 바로 붙여넣기</span>}>
            <p>Windows <Kbd>Win</Kbd>+<Kbd>Shift</Kbd>+<Kbd>S</Kbd> / macOS <Kbd>⌘</Kbd>+<Kbd>Shift</Kbd>+<Kbd>4</Kbd> 로 캡처한 뒤 채팅창에 그대로 붙여넣으세요. 에러창·대시보드·디자인 시안처럼 <b>화면으로 물어볼 때</b> 제일 편해요.</p>
          </Step>
          <Step n="3" title="이럴 때 써보세요">
            <ul className="list-disc pl-5 space-y-1">
              <li>"이 PDF 3장짜리로 핵심만 요약해줘"</li>
              <li>"엑셀의 B열 기준으로 그룹별 합계 내줘"</li>
              <li>"이 스크린샷에 뜬 에러 원인이 뭐야?"</li>
              <li>"이미지 속 표를 그대로 엑셀에 붙여넣을 수 있게 옮겨줘"</li>
            </ul>
          </Step>
          <Step n="4" title="크기 제한">
            <p>파일 하나당 최대 <b>30MB</b>, PDF는 <b>100페이지</b> 이내를 권장해요. 더 크면 필요한 부분만 잘라서 올려주세요.</p>
          </Step>
        </Steps>
      </Section>

      <Section
        id="basics-prompt"
        tone="orange"
        eyebrow="STEP 2 · 프롬프트"
        title="잘 물어보는 법"
        desc="같은 Claude라도 질문에 따라 결과물 품질이 크게 달라집니다. 핵심은 '맥락 + 형식 + 제약' 세 가지."
      >
        <div className="grid gap-4 mb-5">
          <PromptCompare
            bad="이메일 써줘"
            good={<>"거래처 A에 <b>납기 2주 지연 사과 메일</b>. 정중한 톤, 이유는 '부품 수급 문제', <b>300자 이내</b>, 마지막엔 대안 일정 제안."</>}
          />
          <PromptCompare
            bad="회의록 요약"
            good={<>"첨부 회의록에서 <b>결정사항·담당자·기한</b> 3열짜리 표로 정리하고, 미결 이슈는 아래에 별도 리스트로."</>}
          />
          <PromptCompare
            bad="마케팅 아이디어 줘"
            good={<>"30대 여성 화장품 SNS 캠페인 아이디어 5개. 각각 <b>타깃 인사이트 → 후킹 카피 → 기대효과 1줄</b> 형식. B2C 감성 톤."</>}
          />
        </div>

        <Callout tone="info">
          막막할 땐 <b>"역할 → 목적 → 형식 → 제약"</b> 순서로 써보세요.<br />
          예: "너는 <b>인사담당자야</b> → <b>신입 채용공고</b> 써줘 → <b>JD는 불릿 5개</b>로 → <b>전체 200자 이내</b>"
        </Callout>
      </Section>

      <Section
        id="basics-search"
        tone="teal"
        eyebrow="STEP 3 · 최신 정보 & 결과물"
        title="웹 검색과 Artifacts"
        desc="Claude는 학습 시점 이후 소식은 모릅니다. 최신 정보가 필요할 땐 웹 검색을 켜세요."
      >
        <Steps>
          <Step n="1" title="웹 검색 켜기 (Web search)">
            <p>채팅창 왼쪽 하단의 <b>+</b> 버튼을 누르면 도구 메뉴가 열립니다. <b>Web search</b>를 클릭해 체크(✓)가 생기면 활성화 — Claude가 실시간으로 웹을 찾아 답합니다. 뉴스·제품 최신가·최신 정책을 물을 땐 필수.</p>
            <Shot
              src="/images/basics/web-search-toggle.png"
              alt="채팅창 하단 + 버튼 → Web search 토글"
              caption="① + 버튼 클릭 → ② Web search 체크. Research·Connectors·Plugins도 같은 메뉴에서 켤 수 있어요."
            />
          </Step>
          <Step n="2" title="Artifacts — 결과물을 옆창에 띄우기">
            <p>표·슬라이드·차트·간단한 웹페이지·긴 문서 같은 <b>덩치 있는 결과물</b>은 Claude가 대화 옆의 별도 창(Artifact 패널)에 띄워줍니다. 수정할 부분만 말하면 버전 관리도 자동이에요.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>"5장짜리 사업계획서 초안, Artifact로 만들어줘"</li>
              <li>"지난 3개월 매출을 차트로 그려줘"</li>
              <li>"이 브랜드로 간단한 랜딩페이지 HTML 하나 뽑아줘"</li>
            </ul>
          </Step>
          <Step n="3" title="대화가 길어지면 — 새 채팅 시작">
            <p>한 채팅에 너무 많은 주제를 섞으면 답이 점점 흐릿해집니다. 주제가 바뀌면 <b>새 채팅</b>을 여는 게 훨씬 정확해요. 이어서 하고 싶으면 이전 결과 요약을 한 줄 붙여주세요.</p>
          </Step>
        </Steps>
      </Section>

      <Section
        id="basics-projects"
        tone="orange"
        eyebrow="STEP 4 · 프로젝트"
        title="자주 하는 업무는 Projects에 저장"
        desc="'회의록 요약기', '기획안 검토기' 같은 전용 Claude를 만들어두면, 매번 설명 없이 파일만 올리면 됩니다."
      >
        <Steps>
          <Step n="1" title="새 Project 만들기">
            <p>왼쪽 사이드바에서 <b>① Projects</b> 메뉴 클릭 → 우측 상단의 <b>② New project</b> 버튼을 누르고, 이름과 한 줄 설명을 적으면 바로 생성됩니다.</p>
            <Shot
              src="/images/basics/projects-page.png"
              alt="좌측 Projects 메뉴와 우측 New project 버튼"
              caption="① 좌측 Projects 탭 → ② 우측 상단 New project 버튼"
            />
          </Step>
          <Step n="2" title="참고자료 올려두기 (Project knowledge)">
            <p>회사 가이드라인, 브랜드 톤 문서, 계약서 양식, 자주 쓰는 용어집을 Project에 올려두세요. 이 안의 모든 대화가 자동으로 이 자료를 참고합니다.</p>
          </Step>
          <Step n="3" title="Custom instructions로 말투·형식 지정">
            <p>예: "답변은 항상 한국어, 마크다운 표 선호. 불확실한 건 추측하지 말고 '확인 필요'라고 써."</p>
            <p>이렇게 한 번 적어두면 매번 반복해서 말할 필요가 없어져요.</p>
          </Step>
          <Step n="4" title="팀원과 공유 (Team 플랜)">
            <p>Team 플랜이면 Project를 팀원과 공유 가능. 공통 가이드라인은 한 번 세팅하고 같이 쓰기.</p>
          </Step>
        </Steps>

        <Callout tone="info">
          <b>Project 아이디어</b> — 회의록 3줄 요약기 · 이메일 톤 변환기(친근 → 정중) · 카피라이팅 A/B/C안 생성기 · 엑셀 데이터 인사이트 봇 · 경쟁사 자료 스크랩 정리봇
        </Callout>
      </Section>
    </>
  )
}
