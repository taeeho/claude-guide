import { Section, Steps, Step, Callout } from './primitives.jsx'

/* ---------- 작은 helpers ---------- */

function Panel({ tone = 'rose', header, children }) {
  const toneMap = {
    rose:  'bg-[#FCE9E7] border-[#F0C2D1]',
    teal:  'bg-teal-soft border-[#B7DDD5]',
    blue:  'bg-[#EAF0FB] border-[#C2D3F0]',
    amber: 'bg-[#FDF3D8] border-[#EDDD8E]',
  }
  return (
    <div className={`rounded-r2 border p-4 sm:p-5 ${toneMap[tone]}`}>
      <div className="text-[13.5px] font-bold tracking-[-0.01em] mb-2 flex items-center gap-2">{header}</div>
      <div className="text-[13.5px] sm:text-[14px] text-ink leading-relaxed space-y-1.5">{children}</div>
    </div>
  )
}

function FeatureCard({ emoji, title, desc, note, noteTone = 'info' }) {
  return (
    <div className="bg-paper border border-line rounded-r2 p-4 sm:p-5 hover:border-linestrong hover:shadow-sm2 transition">
      <div className="text-[24px] mb-1.5">{emoji}</div>
      <h4 className="m-0 text-[15px] sm:text-[16px] font-bold mb-1">{title}</h4>
      <p className="m-0 text-[13px] text-inksoft leading-relaxed">{desc}</p>
      {note && (
        <div className={`mt-2 text-[12px] font-semibold ${noteTone === 'warn' ? 'text-[#B45309]' : 'text-teal'}`}>
          ※ {note}
        </div>
      )}
    </div>
  )
}

function FlowStep({ emoji, title, sub }) {
  return (
    <div className="flex-1 min-w-0 bg-paper border border-line rounded-r2 p-3 sm:p-4 text-center">
      <div className="text-[22px] sm:text-[26px] mb-1">{emoji}</div>
      <div className="text-[13px] sm:text-[13.5px] font-bold leading-tight">{title}</div>
      {sub && <div className="text-[11.5px] sm:text-[12px] text-inksoft mt-1 leading-snug">{sub}</div>}
    </div>
  )
}

function ChatBox({ rows }) {
  return (
    <div className="rounded-r2 border border-[#2a2a26] bg-[#1B1B19] p-3 sm:p-4 text-[13.5px] sm:text-[14px] leading-relaxed space-y-3">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-[52px_1fr] gap-3">
          <span className={`justify-self-start inline-block px-2 py-0.5 rounded text-[11.5px] font-bold ${r.who === '나' ? 'bg-[#0F766E] text-white' : 'bg-[#2563EB] text-white'}`}>
            {r.who}
          </span>
          <div className="text-[#F2EFE6] whitespace-pre-wrap break-words">{r.text}</div>
        </div>
      ))}
    </div>
  )
}

function CaseCard({ eyebrow, title, scene, beforeTitle, beforeItems, afterTitle, afterItems, prompt }) {
  return (
    <div className="bg-paper border border-line rounded-r2 p-4 sm:p-5 flex flex-col gap-3">
      <div>
        <span className="inline-block text-[11px] font-bold tracking-[.08em] uppercase text-accent bg-accentsoft px-2 py-0.5 rounded">{eyebrow}</span>
        <h3 className="mt-2 mb-1 text-[17px] sm:text-[18px] font-bold tracking-[-0.01em]">{title}</h3>
        <p className="m-0 text-[13px] text-inksoft">{scene}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-3 rounded-r2 bg-[#FCE9E7] border border-[#F0C2D1]">
          <div className="text-[11.5px] font-bold text-[#B4281E] uppercase tracking-[.06em] mb-1.5">{beforeTitle}</div>
          <ul className="list-disc pl-4 text-[13px] text-inksoft space-y-0.5 m-0">
            {beforeItems.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </div>
        <div className="p-3 rounded-r2 bg-teal-soft border border-[#B7DDD5]">
          <div className="text-[11.5px] font-bold text-teal uppercase tracking-[.06em] mb-1.5">{afterTitle}</div>
          <ul className="list-disc pl-4 text-[13px] text-ink space-y-0.5 m-0">
            {afterItems.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <div className="text-[12px] font-bold text-inksoft mb-1.5">📝 이렇게 지시하면 돼요</div>
        <div className="rounded-r2 border border-[#2a2a26] bg-[#1B1B19] text-[#F2EFE6] px-3.5 py-3 text-[13px] leading-relaxed whitespace-pre-wrap">{prompt}</div>
      </div>
    </div>
  )
}

/* ---------- 본문 ---------- */

const features = [
  { emoji: '📁', title: '로컬 파일 접근', desc: '허용한 폴더의 파일을 직접 읽고 쓰고 생성 (엑셀·워드·PPT·마크다운 등).' },
  { emoji: '🗂️', title: '프로젝트(Projects)', desc: '업무별 지침·파일·맥락을 저장하는 워크스페이스. 한 번 설정하면 계속 재사용.' },
  { emoji: '⏰', title: '예약 실행(Scheduled)', desc: '"매주 월요일 오전 8시" 같은 반복 작업을 자동으로 돌립니다.', note: 'PC가 켜져 있어야 함', noteTone: 'warn' },
  { emoji: '🖥️', title: 'Computer Use', desc: '화면을 직접 보고 앱을 조작 (마우스 클릭·키보드 입력).', note: '설정에서 별도 활성화', noteTone: 'warn' },
  { emoji: '🔌', title: 'MCP 커넥터', desc: '슬랙·Gmail·노션·드라이브 등 외부 서비스를 붙여 쓸 수 있어요.', note: '커넥터 추가 설정 필요', noteTone: 'warn' },
  { emoji: '🔒', title: 'VM 격리 실행', desc: '안전한 가상환경 안에서 코드 실행·파일 처리. 내 PC에 직접 영향 없음.' },
]

const promptRules = [
  { rule: '구체적으로', bad: '"데이터 정리해줘"', good: '"근태.csv에서 부서별 인원수를 표로 만들어줘"' },
  { rule: '결과물 지정', bad: '"리포트 만들어줘"', good: '"엑셀로 저장해줘" · "마크다운으로 정리해줘"' },
  { rule: '파일 경로 명시', bad: '"그 파일 열어봐"', good: '"작업폴더/4월_근태.csv 를 읽어서 분석해줘"' },
  { rule: '단계 나누기', bad: '"다 해줘"', good: '"1) 시트에서 읽고 2) 정리하고 3) 엑셀로 저장"' },
]

const savingRows = [
  { task: '월간 데이터 정리 → 엑셀', before: '~2시간', after: '~10분', save: '92%', needs: '❌ 불필요 (CSV)' },
  { task: '신규 인원 온보딩 서류 세트', before: '~1시간', after: '~5분', save: '92%', needs: '❌ 불필요' },
  { task: '사내 공지 작성 (3종 변환)', before: '~40분', after: '~5분', save: '87%', needs: '❌ 불필요' },
  { task: '정기 평가 알림 → 슬랙 전송', before: '~1시간', after: '자동', save: '99%', needs: '✅ Slack' },
]

export default function CoworkGuide() {
  return (
    <>
      {/* 1. 비교 */}
      <Section
        id="cg-vs"
        tone="teal"
        eyebrow="1 · 무엇이 다른가요"
        title="웹채팅 vs Cowork"
        desc="같은 Claude 같지만 쓰임새가 완전히 달라요. 웹은 '대화', Cowork는 '실행'까지."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Panel tone="rose" header={<>💬 <span>Claude 웹채팅 (claude.ai)</span></>}>
            <div>⭕ 파일 업로드 → 분석·요약 가능</div>
            <div>❌ 결과는 텍스트 → 복사·붙여넣기 필요</div>
            <div>❌ 내 PC 파일에 직접 접근 불가</div>
            <div>❌ 대화 끝나면 맥락도 끝</div>
            <div>❌ 외부 도구 연결 불가</div>
          </Panel>
          <Panel tone="teal" header={<>✨ <span>Claude Cowork</span></>}>
            <div>✅ 내 PC 폴더에 직접 읽기/쓰기 (파일 생성)</div>
            <div>✅ 프로젝트별 지침·맥락 기억 (누적)</div>
            <div>✅ 예약 실행 · 반복 자동화 가능</div>
            <div>✅ 코드 실행 환경 내장 (VM 샌드박스)</div>
            <div>✅ 커넥터 추가 시 외부 도구 연동 가능</div>
          </Panel>
        </div>

        <div className="mt-5">
          <Callout tone="info">
            <b>핵심 차이</b> — 웹채팅은 "대화"가 끝, Cowork는 "실행"까지. 결과가 <b>실제 파일로 내 PC에 남습니다.</b>
          </Callout>
        </div>

        {/* 비유 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-bgsoft border border-line rounded-r2 p-5 text-center">
            <div className="text-[36px] mb-1">📞</div>
            <div className="font-bold mb-1">웹채팅 = 전화만 받는 비서</div>
            <div className="text-[13px] text-inksoft">파일은 읽어주지만 결과는 말로만.</div>
          </div>
          <div className="bg-teal-soft border border-[#B7DDD5] rounded-r2 p-5 text-center">
            <div className="text-[36px] mb-1">🧑‍💼</div>
            <div className="font-bold mb-1">Cowork = 옆자리에 앉아 일하는 비서</div>
            <div className="text-[13px] text-ink">내 PC 폴더를 열고 파일을 만들고, 커넥터 연결 시 시트·슬랙까지 처리.</div>
          </div>
        </div>
      </Section>

      {/* 2. 핵심 기능 6 */}
      <Section
        id="cg-features"
        tone="orange"
        eyebrow="2 · 핵심 기능"
        title="Cowork만 되는 것 6가지"
        desc="웹채팅에는 없는 기능들. 이 중 하나라도 필요하면 Cowork로 넘어오면 됩니다."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
        <div className="mt-5">
          <Callout tone="warn">
            슬랙·Gmail·노션 등 <b>외부 서비스 연동은 MCP 커넥터를 추가 설정해야</b> 가능합니다. 기본 상태에서는 로컬 파일 작업만 돼요.
          </Callout>
        </div>
      </Section>

      {/* 3. 기본 vs 커넥터 */}
      <Section
        id="cg-capability"
        tone="teal"
        eyebrow="3 · 어디까지 되나요"
        title="기본 기능 vs 커넥터 연결 시"
        desc="대부분의 반복 업무는 기본 기능만으로도 처리 가능. 외부 서비스 자동화가 필요할 때만 커넥터를 추가하세요."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Panel tone="teal" header={<>🟢 <span>기본 (설정 없이 바로)</span></>}>
            <div>✅ 허용한 폴더의 파일 읽기/쓰기/생성</div>
            <div>✅ 엑셀·워드·PPT·마크다운 산출물 생성</div>
            <div>✅ CSV 분석 → 정리 → 새 파일로 저장</div>
            <div>✅ 프로젝트 지침 설정 · 맥락 기억</div>
            <div>✅ 코드 실행 (데이터 가공·차트 생성)</div>
            <div>✅ 예약 실행 · 반복 자동화</div>
          </Panel>
          <Panel tone="amber" header={<>🔌 <span>커넥터 추가 시 확장</span></>}>
            <div>🔗 슬랙 메시지 읽기/전송</div>
            <div>🔗 Gmail 읽기/발송</div>
            <div>🔗 구글 캘린더 일정 조회/생성</div>
            <div>🔗 구글 드라이브 파일 관리</div>
            <div>🔗 노션 페이지 읽기/수정</div>
            <div>🔗 Canva · Mermaid (시각화)</div>
          </Panel>
        </div>
        <div className="mt-5">
          <Callout tone="info">
            커넥터 없이도 <b>대부분의 반복 업무는 처리 가능</b>합니다 — "CSV 다운로드 → Cowork에서 분석 → 결과 파일 생성" 흐름.
          </Callout>
        </div>
      </Section>

      {/* 4. 시작하기 */}
      <Section
        id="cg-start"
        tone="orange"
        eyebrow="4 · 시작하기"
        title="프로젝트 만들기 (5단계)"
        desc="한 번 세팅해두면 매번 설명할 필요 없이 같은 맥락으로 일을 맡길 수 있어요."
      >
        <Steps>
          <Step n="1" title={<>Claude 데스크톱 앱 실행 → 상단에서 <code className="bg-bgsoft border border-line px-1.5 rounded">Cowork</code> 모드 선택</>}>
            <p>웹 (claude.ai) 이 아닌 <b>데스크톱 앱</b>에서만 Cowork를 사용할 수 있어요.</p>
          </Step>
          <Step n="2" title={<>"+ 새 프로젝트" 클릭 → 프로젝트 이름 입력</>}>
            <p>예: "월간 데이터 정리", "팀 공지 작성", "신규 인원 준비"</p>
          </Step>
          <Step n="3" title="작업 폴더 지정 — Cowork가 접근할 폴더 허용">
            <p>Cowork는 <b>허용한 폴더 안에서만</b> 파일을 읽고 씁니다 (최소 권한 원칙).</p>
          </Step>
          <Step n="4" title={<>"지침" 칸에 나만의 규칙 작성</>}>
            <p>이 프로젝트에서 AI가 <b>항상 지켜야 할 기준</b>을 한 번만 적어두면, 이후엔 매번 설명할 필요 없어요.</p>
            <Callout tone="info">
              <b>지침 예시</b> — "지각 기준은 09:10 이후 출근 / 슬랙 공유 시 표 형식 사용 / 급여 정보는 절대 외부에 공유 안 함"
            </Callout>
          </Step>
          <Step n="5" title={<>"만들기" 클릭 → 프로젝트 생성 완료</>} />
        </Steps>
      </Section>

      {/* 5. 사용 흐름 */}
      <Section
        id="cg-flow"
        tone="teal"
        eyebrow="5 · 사용 흐름"
        title="실제로 이렇게 써요"
        desc="파일로 내려받은 데이터를 Cowork가 분석·정리해서 결과 파일을 다시 내 폴더에 저장해주는 흐름."
      >
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch">
          <FlowStep emoji="📊" title="구글시트" sub="CSV 다운로드" />
          <div className="hidden sm:flex items-center text-inkmuted text-[20px]">→</div>
          <FlowStep emoji="📁" title="작업 폴더에 저장" sub="Cowork가 접근할 폴더" />
          <div className="hidden sm:flex items-center text-inkmuted text-[20px]">→</div>
          <FlowStep emoji="🤖" title="Cowork가 분석/정리" sub="지시대로 처리" />
          <div className="hidden sm:flex items-center text-inkmuted text-[20px]">→</div>
          <FlowStep emoji="📋" title="결과 파일 생성" sub="엑셀·워드·마크다운" />
        </div>

        <div className="mt-5">
          <ChatBox
            rows={[
              { who: '나', text: '작업 폴더에 4월_근태.csv 넣어뒀어. 이 파일에서 지각 3회 이상인 직원을\n부서별로 정리해서 엑셀 파일로 만들어줘. 슬랙에 복붙할 수 있게 깔끔하게!' },
              { who: 'Cowork', text: 'CSV 파일을 분석했어요. 지각 3회 이상인 직원 5명을 부서별로 정리해\n📊 근태_지각현황_202604.xlsx 파일로 저장했습니다. 작업 폴더에서 확인해 주세요!' },
            ]}
          />
        </div>

        <div className="mt-4">
          <Callout tone="info">
            <b>결과가 실제 파일로 내 폴더에 저장</b>돼요 — 텍스트 복사가 아니라 바로 쓸 수 있는 엑셀·워드 파일.
          </Callout>
        </div>
      </Section>

      {/* 6. 지시문 팁 */}
      <Section
        id="cg-prompt"
        tone="orange"
        eyebrow="6 · 지시문 작성 팁"
        title="이렇게 말하면 더 정확해요"
        desc={<>"지시문(프롬프트)" = AI에게 보내는 업무 요청 메시지. <b>구체적으로 쓸수록 정확한 결과</b>가 나옵니다.</>}
      >
        <div className="flex flex-col gap-3">
          {promptRules.map((r) => (
            <div key={r.rule} className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-2 md:gap-4 p-3 sm:p-4 border border-line rounded-r2 bg-paper">
              <div className="font-bold text-[14.5px] text-ink">{r.rule}</div>
              <div className="text-[13.5px]">
                <div className="text-[11px] font-bold text-[#B4281E] uppercase tracking-[.06em] mb-0.5">❌ 이렇게 하지 마세요</div>
                <div className="text-inksoft">{r.bad}</div>
              </div>
              <div className="text-[13.5px]">
                <div className="text-[11px] font-bold text-teal uppercase tracking-[.06em] mb-0.5">✅ 이렇게 해보세요</div>
                <div className="text-ink">{r.good}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Callout tone="info">
            처음엔 어렵게 느껴져도, <b>2~3번 써보면 감이 옵니다.</b> 자주 쓰는 지시문은 프로젝트 지침에 저장해두면 더 편해요.
          </Callout>
        </div>
      </Section>

      {/* 7. 활용 3가지 */}
      <Section
        id="cg-cases"
        tone="teal"
        eyebrow="7 · 활용 예시"
        title="실제 업무 3가지"
        desc="그대로 써먹을 수 있는 프롬프트 포함. 본인 업무에 맞게 '근태'를 '매출'·'재고'·'이슈 리스트'로 바꿔 적용하세요."
      >
        <div className="flex flex-col gap-5">
          <CaseCard
            eyebrow="활용 ① 데이터 정리 & 분석"
            title="월간 데이터 리포트 자동화"
            scene="매월 초, 흩어진 데이터를 정리해서 리포트를 만들어야 할 때."
            beforeTitle="기존 · ~2시간"
            beforeItems={['시트에서 부서별로 필터', '지각/조퇴/결근 수동 집계', '표 형식으로 정리', '슬랙에 복붙 + 포맷 수정']}
            afterTitle="Cowork · ~10분"
            afterItems={['구글시트 → CSV 다운로드 → 작업 폴더', '"부서별로 정리해서 엑셀로 저장" 지시', '결과 파일 확인 → 슬랙에 공유']}
            prompt={`이 파일이 4월 근태 데이터야. 여기서 지각이 3번 이상인 사람을 부서별로 정리해줘.
엑셀 파일로 저장해주고, 슬랙에 바로 복사할 수 있게 요약 표도 같이 만들어줘.`}
          />

          <CaseCard
            eyebrow="활용 ② 일괄 서류 생성"
            title="신규 인원 온보딩 체크리스트"
            scene="새로 오는 사람마다 환영 메일·장비 목록·체크리스트를 만들어야 할 때."
            beforeTitle="기존 · ~30분 / 1명"
            beforeItems={['입사자 정보 시트에서 확인', '체크리스트 양식 복사', '부서·직무별로 항목 수정', '입사 안내 메시지 작성']}
            afterTitle="Cowork · ~5분"
            afterItems={['명단 파일을 작업 폴더에 넣기', '"이 사람들 온보딩 서류 만들어줘" 지시', '사람별로 서류 자동 완성', '프린트해서 바로 쓸 수 있는 상태']}
            prompt={`4월에 입사하는 사람 3명이야 (이름/부서/직급/입사일은 파일에 있어).
각 사람별로 ① 환영 메일 ② 장비 지급 목록 ③ 첫 주 OT 일정표 만들어줘.
개발팀은 노트북+모니터, 마케팅팀은 노트북+태블릿으로 장비 구분해줘.`}
          />

          <CaseCard
            eyebrow="활용 ③ 공지 작성"
            title="사내 공지 초안 자동 생성"
            scene="휴무일·제도 변경·교육 안내 등 사내 공지를 써야 할 때."
            beforeTitle="기존 · ~40분"
            beforeItems={['과거 공지 찾아보기', '톤 맞춰 본문 작성', '수신자별(정규직·계약직 등) 다시 쓰기', '슬랙 포맷 맞춰 재편집']}
            afterTitle="Cowork · ~5분"
            afterItems={['지시 한 번 → 공지 초안 파일로 저장', '톤·형식·내용 자동 조정', '수신자별 3종 변환도 한 번에', '파일 열어 확인 후 슬랙에 붙여넣기']}
            prompt={`5월 1일 근로자의 날 휴무 안내 공지 작성해줘.
친근하지만 공식적인 해요체로 쓰고, 연차 사용 팁 (4/30 쓰면 4일 연휴!)이랑
긴급 연락처도 넣어줘. 슬랙에 바로 올릴 수 있게 만들어줘.`}
          />
        </div>
      </Section>

      {/* 8. 커넥터 자동화 */}
      <Section
        id="cg-connectors"
        tone="orange"
        eyebrow="8 · 한 단계 더"
        title="커넥터 연결 시 가능한 자동화"
        desc="로컬 파일 작업만으로 부족할 때, 커넥터를 붙이면 외부 서비스까지 한 번에 처리됩니다."
      >
        <div className="mb-5">
          <Callout tone="warn">아래 기능은 <b>MCP 커넥터 설정을 완료한 후</b>에만 가능합니다.</Callout>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-paper border border-line rounded-r2 p-4 sm:p-5">
            <div className="text-[22px] mb-1.5">📋</div>
            <h4 className="m-0 text-[16px] font-bold mb-2">정기 평가 자동 알림</h4>
            <p className="text-[13.5px] text-inksoft mb-2 m-0">수습·정기 점검 종료 <b>2주 전에 자동으로:</b></p>
            <ol className="list-decimal pl-5 text-[13.5px] text-ink space-y-0.5 m-0">
              <li>작업 폴더의 대상자 명단 CSV 자동 탐색</li>
              <li>평가서 초안 파일 생성</li>
              <li>담당자에게 슬랙 DM으로 알림</li>
            </ol>
            <div className="mt-3 text-[12.5px] text-inkmuted">필요 커넥터: <b className="text-ink">Slack</b> (파일은 로컬 CSV)</div>
          </div>
          <div className="bg-paper border border-line rounded-r2 p-4 sm:p-5">
            <div className="text-[22px] mb-1.5">🚪</div>
            <h4 className="m-0 text-[16px] font-bold mb-2">퇴사·이관 처리 자동화</h4>
            <p className="text-[13.5px] text-inksoft mb-2 m-0">퇴사·부서 이동 확정 시 <b>자동으로:</b></p>
            <ol className="list-decimal pl-5 text-[13.5px] text-ink space-y-0.5 m-0">
              <li>직무별 체크리스트 생성</li>
              <li>IT팀·총무팀에 슬랙 DM 요청</li>
              <li>대상자에게 안내 메시지 발송</li>
            </ol>
            <div className="mt-3 text-[12.5px] text-inkmuted">필요 커넥터: <b className="text-ink">Slack + Gmail</b></div>
          </div>
        </div>
      </Section>

      {/* 9. 시간 절약 표 */}
      <Section
        id="cg-saving"
        tone="teal"
        eyebrow="9 · 얼마나 빨라져요"
        title="Cowork 도입 시 평균 시간 절약"
        desc="반복 업무에서 절약되는 시간 = 판단이 필요한 핵심 업무에 집중할 시간."
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-bgsoft">
                <th className="text-left font-bold p-2.5 sm:p-3 border-b border-line">업무</th>
                <th className="text-left font-bold p-2.5 sm:p-3 border-b border-line text-[#B4281E]">기존</th>
                <th className="text-left font-bold p-2.5 sm:p-3 border-b border-line text-teal">Cowork</th>
                <th className="text-left font-bold p-2.5 sm:p-3 border-b border-line">절약</th>
                <th className="text-left font-bold p-2.5 sm:p-3 border-b border-line">커넥터</th>
              </tr>
            </thead>
            <tbody>
              {savingRows.map((r) => (
                <tr key={r.task} className="border-b border-line">
                  <td className="p-2.5 sm:p-3">{r.task}</td>
                  <td className="p-2.5 sm:p-3 font-semibold text-[#B4281E]">{r.before}</td>
                  <td className="p-2.5 sm:p-3 font-semibold text-teal">{r.after}</td>
                  <td className="p-2.5 sm:p-3">
                    <span className="inline-block bg-teal-soft text-teal font-bold px-2 py-0.5 rounded text-[12.5px]">{r.save}</span>
                  </td>
                  <td className="p-2.5 sm:p-3 text-[12.5px]">{r.needs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <Callout tone="info">
            <b>"수집 → 정리 → 전달"은 Cowork에게 맡기고, 사람은 "판단"에 집중하세요.</b>
          </Callout>
        </div>
      </Section>

      {/* 10. 주의사항 & 팁 */}
      <Section
        id="cg-tips"
        tone="orange"
        eyebrow="10 · 주의사항 & 팁"
        title="잘 쓰기 위한 체크리스트"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h4 className="text-[14px] font-bold text-[#B4281E] mb-2 flex items-center gap-2">⚠️ 이것만 주의하세요</h4>
            <div className="flex flex-col gap-2.5">
              <div className="p-3 rounded-r2 border border-[#F0C2D1] bg-[#FCE9E7]">
                <b>급여·평가 등 최민감 정보는 Cowork 처리 범위에서 제외하세요.</b>
                <div className="text-[13px] text-inksoft mt-1">정보보안팀과 사전 협의 후 허용 범위를 확정해야 해요.</div>
              </div>
              <div className="p-3 rounded-r2 border border-[#F0C2D1] bg-[#FCE9E7]">
                <b>금액·날짜는 반드시 사람 눈으로 재확인하세요.</b>
                <div className="text-[13px] text-inksoft mt-1">AI가 수치를 잘못 읽거나 계산 실수를 할 수 있어요.</div>
              </div>
              <div className="p-3 rounded-r2 border border-[#F0C2D1] bg-[#FCE9E7]">
                <b>예약 실행 시 PC가 켜져 있어야 합니다.</b>
                <div className="text-[13px] text-inksoft mt-1">Cowork는 클라우드가 아닌 내 PC에서 돌아가는 도구예요.</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-teal mb-2 flex items-center gap-2">💡 이렇게 하면 더 잘 써요</h4>
            <div className="flex flex-col gap-2.5">
              <div className="p-3 rounded-r2 border border-[#B7DDD5] bg-teal-soft">
                <b>프로젝트 지침을 꼼꼼히 적어두면</b>
                <div className="text-[13px] text-inksoft mt-1">짧은 지시문으로도 정확한 결과를 받을 수 있어요.</div>
              </div>
              <div className="p-3 rounded-r2 border border-[#B7DDD5] bg-teal-soft">
                <b>작업 폴더에 템플릿·규정 파일을 넣어두세요.</b>
                <div className="text-[13px] text-inksoft mt-1">Cowork가 규정을 참고해서 작업해줘요.</div>
              </div>
              <div className="p-3 rounded-r2 border border-[#B7DDD5] bg-teal-soft">
                <b>처음엔 간단한 업무부터 시작하세요.</b>
                <div className="text-[13px] text-inksoft mt-1">2~3번 써보면 금방 감이 옵니다.</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
