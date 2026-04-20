export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-5 sm:px-7 py-8 sm:py-10 pb-14 text-inkmuted text-[13px] flex flex-wrap justify-between items-center gap-3 border-t border-line mt-12">
      <div>© AX기획팀 · Claude 설치 가이드북</div>
      <div>
        문의: <a href="mailto:hth@ccfm.co.kr" className="text-inksoft no-underline border-b border-dashed border-linestrong hover:text-accent hover:border-accent">hth@ccfm.co.kr</a>
        &nbsp;·&nbsp;
        <a href="https://claude.com/download" target="_blank" rel="noopener noreferrer" className="text-inksoft no-underline border-b border-dashed border-linestrong hover:text-accent hover:border-accent">공식 다운로드</a>
      </div>
    </footer>
  )
}
