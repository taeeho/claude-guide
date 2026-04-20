import { Section, Steps, Step, Callout, CodeBlock, CodeLine, Shot } from './primitives.jsx'

export default function Cowork() {
  return (
    <>
      <Section
        id="cowork-case1"
        tone="orange"
        eyebrow="CASE 1 · BIOS 가상화"
        title="VM이 막혔을 경우"
        desc="Claude Cowork는 Windows 가상화 기능(Hyper-V / SVM)이 켜져 있어야 동작합니다. BIOS에서 한 번 활성화하면 끝."
      >
        <Steps>
          <Step n="1" title={<>Powershell → <code className="bg-bgsoft border border-line px-1.5 rounded">systeminfo</code> → BIOS 펌웨어 가상화 켜져 있는지 확인</>}>
            <CodeBlock prompt="PS>" copyText="systeminfo">systeminfo</CodeBlock>
            <p>출력 맨 아래 <b>Hyper-V 요구 사항</b> 항목을 보세요.</p>
            <Shot
              src="/images/cowork/bios-systeminfo.png"
              alt="systeminfo 출력 - Hyper-V 요구 사항"
              caption="&quot;하이퍼바이저가 검색되었습니다&quot; = 활성화됨 / &quot;필요한 기능이 표시되지 않습니다&quot; = BIOS에서 켜야 함"
            />
          </Step>

          <Step n="2" title="Windows 설정 → 시스템 → 복구 → 고급 시작 옵션 → 지금 다시 시작">
            <Shot
              src="/images/cowork/settings-recovery.png"
              alt="Windows 설정 시스템 복구 고급 시작 옵션"
              caption="설정 → 시스템 → 복구 → 고급 시작 옵션의 [지금 다시 시작] 클릭"
            />
          </Step>

          <Step n="3" title="(파란 화면이 뜨면) 문제 해결 → 고급 옵션 → UEFI 펌웨어 설정 → 다시 시작">
            <Shot
              src="/images/cowork/uefi-option.png"
              alt="고급 옵션 화면 - UEFI 펌웨어 설정"
              caption="파란 고급 옵션 화면에서 [UEFI 펌웨어 설정] 선택"
            />
          </Step>

          <Step n="4" title="(부팅되면서 설정화면이 뜨면) F7 클릭 → Advanced 모드 → CPU Configuration → SVM Mode → Enabled → F10 → YES">
            <Shot
              src="/images/cowork/bios-advanced.png"
              alt="UEFI BIOS Advanced Mode"
              caption="F7로 Advanced Mode 진입. Advanced 탭에서 CPU Configuration 메뉴를 찾으세요."
            />
            <Shot
              src="/images/cowork/bios-svm.png"
              alt="CPU Configuration SVM Mode Enabled"
              caption="CPU Configuration → SVM Mode를 Enabled로 변경 후 F10 → YES"
            />
            <Callout tone="info">
              메인보드 제조사(ASUS / MSI / Gigabyte 등)에 따라 메뉴 이름이 약간 다를 수 있어요.
              Intel이면 <b>Intel VT-x / Virtualization Technology</b>, AMD면 <b>SVM Mode</b>를 찾으세요.
            </Callout>
          </Step>

          <Step n="5" title="재부팅 완료 → Claude Cowork 정상 실행">
            <p>BIOS 저장 후 자동 재부팅되면 Windows로 돌아옵니다. 이후 Claude Cowork 기능이 정상 동작합니다.</p>
          </Step>
        </Steps>
      </Section>

      <Section
        id="cowork-case2"
        tone="teal"
        eyebrow="CASE 2 · CLAUDE 재설치"
        title="VM은 작동하는데 COWORK 자체가 문제인 경우"
        desc="가상화는 이미 켜져 있는데 Cowork가 계속 에러를 내면 — 잔여 패키지 정리 후 재설치가 빠릅니다."
      >
        <Steps>
          <Step n="1" title="클리어 처리 (PowerShell 관리자 모드)">
            <p>PowerShell을 <b>관리자 권한</b>으로 열고 아래를 순서대로 실행:</p>
            <CodeBlock
              prompt="PS>"
              copyText={`Stop-Service vmms\nStop-Service vmcompute\ncompact /u /s "C:\\Users\\MKM10011\\AppData\\Local\\Packages"\nRemove-Item -Recurse -Force "C:\\Users\\MKM10011\\AppData\\Local\\Packages\\Claude_pzs8sxrjxfjjc"`}
            >
              <CodeLine prompt="PS>">Stop-Service vmms</CodeLine>
              <CodeLine prompt="PS>">Stop-Service vmcompute</CodeLine>
              <CodeLine prompt="PS>">compact /u /s &quot;C:\Users\MKM10011\AppData\Local\Packages&quot;</CodeLine>
              <CodeLine prompt="PS>">Remove-Item -Recurse -Force &quot;C:\Users\MKM10011\AppData\Local\Packages\Claude_pzs8sxrjxfjjc&quot;</CodeLine>
            </CodeBlock>
            <Callout tone="warn">
              <b><code className="bg-white/60 px-1.5 rounded">Users\MKM10011</code> 부분은 반드시 본인 사용자 이름으로 교체!</b>
              PowerShell에서 <code className="bg-white/60 px-1.5 rounded">cd ~</code> 를 치면 자신의 홈 경로가 나옵니다.
            </Callout>
            <Shot
              src="/images/cowork/powershell-cd.png"
              alt="PowerShell cd ~ 로 홈 경로 확인"
              caption="PowerShell에서 cd ~ 를 치면 \\Users\\본인이름\\ 이 표시됨"
            />
          </Step>

          <Step n="2" title="재부팅">
            <p>명령 실행 후 Windows를 한 번 재부팅합니다.</p>
          </Step>

          <Step n="3" title="Claude 재설치">
            <p>공식 다운로드 페이지에서 다시 설치:</p>
            <p><a href="https://claude.com/download" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">https://claude.com/download</a></p>
          </Step>

          <Step n="4" title="PowerShell 관리자 모드에서 서비스 복구">
            <CodeBlock
              prompt="PS>"
              copyText={`Set-Service vmms -StartupType Automatic\nStart-Service vmms\nSet-Service vmcompute -StartupType Automatic\nStart-Service vmcompute`}
            >
              <CodeLine prompt="PS>">Set-Service vmms -StartupType Automatic</CodeLine>
              <CodeLine prompt="PS>">Start-Service vmms</CodeLine>
              <CodeLine prompt="PS>">Set-Service vmcompute -StartupType Automatic</CodeLine>
              <CodeLine prompt="PS>">Start-Service vmcompute</CodeLine>
            </CodeBlock>
            <Callout tone="info">
              Case 1에서 멈춰둔 <code className="bg-white/60 px-1.5 rounded">vmms</code>·<code className="bg-white/60 px-1.5 rounded">vmcompute</code> 서비스를 자동 시작으로 되돌려 놓는 단계입니다. 빼먹으면 다음 부팅 때 Cowork가 다시 안 뜰 수 있어요.
            </Callout>
          </Step>
        </Steps>
      </Section>
    </>
  )
}
