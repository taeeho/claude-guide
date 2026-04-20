import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AppPage from './pages/AppPage.jsx'
import BasicsPage from './pages/BasicsPage.jsx'
import CodePage from './pages/CodePage.jsx'
import McpPage from './pages/McpPage.jsx'
import SafetyPage from './pages/SafetyPage.jsx'
import CoworkPage from './pages/CoworkPage.jsx'
import TroublePage from './pages/TroublePage.jsx'

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/basics" element={<BasicsPage />} />
        <Route path="/mcp" element={<McpPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/cowork" element={<CoworkPage />} />
        <Route path="/troubleshoot" element={<TroublePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
