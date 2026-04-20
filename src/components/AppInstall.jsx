import { Section, Tabs, TabList, Tab, TabPane, OsBanner, Steps, Step, Callout, Shot } from './primitives.jsx'

export default function AppInstall() {
  return (
    <Section
      id="app"
      tone="orange"
      eyebrow="PART 1 · DESKTOP"
      title="Claude APP 설치"
      desc={<>
        브라우저 없이 데스크톱에서 바로 Claude와 대화할 수 있는 공식 앱입니다.{' '}
        <a href="https://claude.com/download" target="_blank" rel="noopener noreferrer" className="text-accent underline-offset-2 hover:underline font-medium">claude.com/download</a> 에서 받습니다.
      </>}
    >
      <Tabs initial="win">
        <TabList>
          <Tab id="win">Windows</Tab>
          <Tab id="mac">macOS</Tab>
        </TabList>

        <Shot
          src="/images/claude-download.png"
          alt="Claude Download 페이지 - Windows / macOS 다운로드 버튼"
          caption="claude.com/download — 본인 OS에 맞는 버튼을 누릅니다."
        />

        <TabPane id="win">
          <OsBanner>Windows 설치 순서</OsBanner>
          <Steps>
            <Step n="1" title="다운로드 페이지 열기">
              <p><a href="https://claude.com/download" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">claude.com/download</a> 접속 → 상단의 <b>“Download for Windows”</b> 버튼 클릭.</p>
              <p className="text-[13px] text-inkmuted">※ ARM 노트북(Surface 등) 사용자는 옆의 <b>Windows (arm64)</b> 버튼을 누르세요.</p>
            </Step>
            <Step n="2" title={<span><code className="bg-bgsoft border border-line px-1.5 rounded">.exe</code> 설치 파일 실행</span>}>
              <p>다운로드 폴더에서 받은 파일을 더블클릭합니다.</p>
            </Step>
            <Step n="3" title="설치 마법사 진행">
              <p><b>Next → Install → Finish</b> 순서로 기본값 그대로 진행하면 됩니다.</p>
            </Step>
            <Step n="4" title="실행 후 로그인">
              <p>설치가 끝나면 자동으로 Claude가 실행됩니다. Anthropic 계정(또는 Google)으로 로그인하면 끝.</p>
              <Callout tone="info">회사 계정으로 사용하시는 분은 <b>hth@ccfm.co.kr</b> 도메인 계정으로 로그인해주세요.</Callout>
            </Step>
          </Steps>
        </TabPane>

        <TabPane id="mac">
          <OsBanner>macOS 설치 순서</OsBanner>
          <Steps>
            <Step n="1" title="다운로드 페이지에서 macOS 선택">
              <p><a href="https://claude.com/download" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">claude.com/download</a> 의 <b>Get started → Desktop → macOS</b> 의 <b>Download</b> 버튼을 누릅니다.</p>
            </Step>
            <Step n="2" title={<span><code className="bg-bgsoft border border-line px-1.5 rounded">.dmg</code> 파일 다운로드</span>}>
              <p>받은 디스크 이미지를 더블클릭해서 엽니다.</p>
            </Step>
            <Step n="3" title="Applications 폴더로 드래그">
              <p>Claude 아이콘을 옆의 <b>Applications</b> 폴더로 끌어다 놓으면 설치가 끝납니다.</p>
            </Step>
            <Step n="4" title="실행 → 보안 경고 시 &ldquo;열기&rdquo; 클릭">
              <p>처음 실행할 땐 macOS 보안 경고가 한 번 뜹니다. <b>&ldquo;열기&rdquo;</b>를 누르고 Anthropic 계정으로 로그인.</p>
            </Step>
          </Steps>
        </TabPane>
      </Tabs>
    </Section>
  )
}
