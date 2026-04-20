import { Section, Steps, Step } from './primitives.jsx'

export default function Troubleshoot() {
  return (
    <Section
      id="troubleshoot"
      tone="teal"
      eyebrow="PART 4 · CHECKLIST"
      title="안 될 때 확인할 것"
      desc="설치 중 가장 자주 막히는 지점을 모았어요. 위에서 아래로 한 번씩 점검해보세요."
    >
      <Steps>
        <Step n="!" title={<span><code className="bg-bgsoft border border-line px-1.5 rounded">claude</code> 명령어가 인식되지 않아요</span>}>
          <p>거의 100% <b>새 터미널 창을 안 열어서</b> 생기는 문제입니다. 기존 창을 완전히 닫고 새 PowerShell / Terminal을 열어 다시 시도하세요.</p>
        </Step>
        <Step n="!" title={<span>Windows에서 <code className="bg-bgsoft border border-line px-1.5 rounded">git</code>이 안 잡혀요</span>}>
          <p>Git 설치 후에도 같은 PowerShell 창에서는 인식되지 않습니다. <b>새 창</b>을 열고 <code className="bg-bgsoft border border-line px-1.5 rounded">git -v</code> 를 다시 확인하세요.</p>
        </Step>
        <Step n="!" title={<span>로그인 후에도 “요금제 필요” 메시지가 떠요</span>}>
          <p>Claude Code는 무료 계정으로는 사용할 수 없습니다. <b>Pro / Max / Team / Enterprise</b> 요금제 계정인지 확인해주세요.</p>
        </Step>
        <Step n="!" title={<span>macOS에서 “확인되지 않은 개발자” 경고</span>}>
          <p>처음 한 번만 나옵니다. <b>시스템 설정 → 개인정보 보호 및 보안</b>에서 &ldquo;그래도 열기&rdquo;를 누르거나, 처음 실행 시 보안창의 <b>&ldquo;열기&rdquo;</b> 버튼을 클릭하세요.</p>
        </Step>
      </Steps>
    </Section>
  )
}
