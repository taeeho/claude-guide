import { Section, Tabs, TabList, Tab, TabPane, OsBanner, Steps, Step, Callout, CodeBlock, CodeLine, Kbd, Shot } from './primitives.jsx'

export default function CodeInstall() {
  return (
    <Section
      id="code"
      tone="teal"
      eyebrow="PART 2 · CLI"
      title="Claude Code 설치"
      desc={<>
        터미널에서 Claude를 코딩 파트너로 부리는 CLI 도구입니다.
        설치 후엔 폴더로 들어가 <code className="bg-bgsoft border border-line px-1.5 rounded">claude</code> 한 줄이면 바로 시작돼요.
        <b> Pro / Max / Team / Enterprise 요금제 계정</b>이 필요합니다.
      </>}
    >
      <div className="mb-7">
        <Callout tone="warn">
          <b>이 페이지는 선택 사항입니다.</b> 웹페이지·자동화 스크립트를 <b>직접 만들려는 분</b>만 설치하세요.
          일반 업무(대화, 문서 요약, 메일 작성, 자료 조사)에는 <b>Claude 데스크톱 앱 하나로 충분</b>합니다 —
          <a href="#/app" className="text-accent font-medium hover:underline ml-1">앱 설치 페이지</a>로 돌아가셔도 됩니다.
        </Callout>
      </div>
      <Tabs initial="win">
        <TabList>
          <Tab id="win">Windows</Tab>
          <Tab id="mac">macOS</Tab>
        </TabList>

        <TabPane id="win">
          <OsBanner>Windows · PowerShell 기준</OsBanner>
          <Steps>
            <Step n="1" title="PowerShell 열기">
              <p><Kbd>시작</Kbd> 키 → <b>&ldquo;PowerShell&rdquo;</b> 입력 후 엔터.</p>
              <Callout tone="warn"><b>PowerShell</b> 이어야 합니다. CMD(명령 프롬프트) 아닙니다.</Callout>
              <p>먼저 Git이 깔려있는지 확인합니다:</p>
              <CodeBlock prompt="PS>" copyText="git -v">git -v</CodeBlock>
              <p className="text-[13px] text-inkmuted">버전이 출력되면 <b>3단계로 건너뛰기</b>, 안 나오면 2단계부터 진행하세요.</p>
            </Step>
            <Step n="2" title="Git 설치 (필요한 경우만)">
              <p><a href="https://git-scm.com/install/windows" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">git-scm.com/install/windows</a> 에서 <b>&ldquo;Click here to download&rdquo;</b>를 누르고 받은 설치파일을 실행합니다.</p>
              <Shot
                src="/images/git-download.png"
                alt="Git for Windows 다운로드 페이지"
                caption="Git for Windows — 빨간 박스 영역의 다운로드 링크 클릭"
              />
              <p>설치 마법사의 모든 옵션은 <b>전부 Default</b> 그대로 두고 <b>Next → Finish</b> 까지 진행하면 됩니다.</p>
            </Step>
            <Step n="3" title="Claude Code 설치 명령어 실행">
              <p>PowerShell에 아래 한 줄을 붙여넣고 엔터:</p>
              <CodeBlock prompt="PS>" copyText="irm https://claude.ai/install.ps1 | iex">
                irm https://claude.ai/install.ps1 | iex
              </CodeBlock>
            </Step>
            <Step n="4" title="새 PowerShell 창 열기">
              <p>기존 창을 닫고 새 PowerShell을 다시 엽니다. <b>PATH 환경변수가 새 창부터 적용</b>되기 때문에 이 단계를 거르면 다음 명령이 인식되지 않아요.</p>
            </Step>
            <Step n="5" title="설치 확인 & 실행">
              <CodeBlock prompt="PS>" copyText="claude -v">claude -v</CodeBlock>
              <p>버전이 뜨면 성공. 작업할 폴더로 이동해서 실행합니다:</p>
              <CodeBlock copyText={"cd C:\\작업할폴더경로\nclaude"}>
                <CodeLine prompt="PS>">cd C:\작업할폴더경로</CodeLine>
                <CodeLine prompt="PS>">claude</CodeLine>
              </CodeBlock>
              <ul className="list-disc pl-5 text-[14.5px] text-inksoft space-y-1">
                <li>첫 실행 시 <b>브라우저가 자동으로 열려</b> Anthropic 로그인 화면이 나옵니다.</li>
                <li>로그인이 끝나면 PowerShell로 돌아와서 바로 사용 가능.</li>
              </ul>
            </Step>
          </Steps>
        </TabPane>

        <TabPane id="mac">
          <OsBanner>macOS · Terminal 기준</OsBanner>
          <Steps>
            <Step n="1" title="터미널 열기">
              <p><Kbd>⌘ + Space</Kbd> → <b>&ldquo;terminal&rdquo;</b> 입력 → 엔터.</p>
            </Step>
            <Step n="2" title="설치 명령어 실행">
              <p>터미널에 아래 한 줄을 붙여넣고 엔터:</p>
              <CodeBlock copyText="curl -fsSL https://claude.ai/install.sh | bash">
                curl -fsSL https://claude.ai/install.sh | bash
              </CodeBlock>
            </Step>
            <Step n="3" title="새 터미널 창 열기">
              <p>설치 후엔 <b>반드시 새 창</b>을 열어야 <code className="bg-bgsoft border border-line px-1.5 rounded">claude</code> 명령이 인식됩니다 (PATH 반영).</p>
              <ul className="list-disc pl-5 text-[14.5px] text-inksoft"><li><Kbd>⌘ + N</Kbd> 또는 터미널 재시작</li></ul>
            </Step>
            <Step n="4" title="설치 확인">
              <CodeBlock copyText="claude -v">claude -v</CodeBlock>
              <p>버전이 뜨면 성공.</p>
            </Step>
            <Step n="5" title="실행">
              <CodeBlock copyText={"cd ~/작업할폴더경로\nclaude"}>
                <CodeLine>cd ~/작업할폴더경로</CodeLine>
                <CodeLine>claude</CodeLine>
              </CodeBlock>
              <ul className="list-disc pl-5 text-[14.5px] text-inksoft space-y-1">
                <li>첫 실행 시 브라우저가 자동으로 열립니다.</li>
                <li>Anthropic 계정으로 로그인 (Pro / Max / Team / Enterprise 필수).</li>
                <li>로그인이 끝나면 터미널로 돌아와서 바로 사용 가능.</li>
              </ul>
            </Step>
          </Steps>
        </TabPane>
      </Tabs>
    </Section>
  )
}
