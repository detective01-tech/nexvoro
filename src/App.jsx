import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import SecurityGuard from './components/SecurityGuard.jsx'
import SecurityManager from './components/SecurityManager.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const [isSecurityManagerOpen, setIsSecurityManagerOpen] = useState(false)

  useEffect(() => {
    const handleOpenSecurity = () => setIsSecurityManagerOpen(true)
    window.addEventListener('open-security-manager', handleOpenSecurity)
    return () => window.removeEventListener('open-security-manager', handleOpenSecurity)
  }, [])

  return (
    <div className="app-shell">
      <ScrollToTop />
      <SecurityGuard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/sec/:token" element={null} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SecurityGuard>
      <SecurityManager
        isOpen={isSecurityManagerOpen}
        onClose={() => setIsSecurityManagerOpen(false)}
      />
    </div>
  )
}
