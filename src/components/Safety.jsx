import { Section, Steps, Step, Callout } from './primitives.jsx'

export default function Safety() {
  return (
    <Section
      id="safety"
      tone="orange"
      eyebrow="PART 4 · 안전 수칙"
      title="회사에서 Claude 쓸 때, 꼭 지킬 것"
      desc="AI는 편리하지만, 기업 환경에서는 '하지 말아야 할 것'을 먼저 알아두는 게 중요해요. 5가지만 지키면 됩니다."
    >
      <Steps>
        <Step n="1" title="회사 이메일(@ccfm.co.kr) 계정으로 로그인">
          <p>개인 계정으로 회사 자료를 다루면 대화 이력이 회사 관리 밖에 남고, <b>Team 플랜의 보안 혜택</b>도 받지 못합니다. 설치 직후 반드시 회사 이메일로 로그인했는지 다시 한 번 확인하세요.</p>
        </Step>

        <Step n="2" title="개인정보·기밀자료는 가명·더미로 바꿔서">
          <p>다음 같은 자료는 <b>원문 그대로 넣지 마세요.</b></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>주민번호·연락처·계좌번호 등 개인정보</li>
            <li>계약서·NDA 원문, 미공개 재무자료</li>
            <li>고객사 명단, 미공개 가격 정책</li>
          </ul>
          <p>꼭 필요하면 이름·금액 등을 <b>가명·더미 데이터</b>로 바꿔서 질문하세요. 예: "ABC社" → "거래처 A", "12,345,000원" → "약 1천만원".</p>
          <Callout tone="warn">
            회사 규정상 외부 유출 금지 자료는 <b>LLM에 입력하는 것 자체도 유출로 간주</b>될 수 있습니다. 애매하면 보안팀에 먼저 문의하세요.
          </Callout>
        </Step>

        <Step n="3" title="숫자·인용·링크·법조항은 반드시 원본에서 재확인">
          <p>AI는 종종 <b>그럴듯한 틀린 답</b>(환각·hallucination)을 합니다. 특히 아래는 그대로 믿지 말고 출처를 확인하세요.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>통계·수치 (출처 없는 건 지어냈을 확률 높음)</li>
            <li>법 조항·규정 번호</li>
            <li>URL (클릭해서 실제로 존재하는지)</li>
            <li>인용문·발언 (누가 언제 했다는 식)</li>
          </ul>
        </Step>

        <Step n="4" title="답변은 '초안'으로만 쓰고, 최종본은 본인이 검토">
          <p>메일·보고서·기획서를 Claude 답변 그대로 복사해 내보내지 마세요. 회사 톤·사실관계·맥락은 사람이 봐야 잡힙니다. <b>초안 작성 80% + 사람 검토 20%</b>가 안전한 비율이에요.</p>
        </Step>

        <Step n="5" title="Team 플랜이면 학습에 쓰이지 않음 — 안심 포인트">
          <p>회사가 쓰는 <b>Team 플랜은 대화 내용이 Anthropic 모델 학습에 쓰이지 않습니다.</b> 개인 Pro 계정과는 데이터 취급 방침이 달라요.</p>
          <Callout tone="info">
            단, <b>대화 이력 자체는 Claude 서버에 저장</b>되니 완전 오프라인은 아닙니다. 극도로 민감한 자료는 여전히 주의.
            그리고 이 혜택은 <b>회사 Team 계정으로 로그인했을 때만</b> 적용됩니다 (1번 항목과 연결).
          </Callout>
        </Step>
      </Steps>
    </Section>
  )
}
