import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import SecurityGuard from './components/SecurityGuard.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import Guides from './pages/Guides.jsx'
import MobilePlanGuide from './pages/guides/MobilePlanGuide.jsx'
import InternetPlanGuide from './pages/guides/InternetPlanGuide.jsx'
import SwitchingGuide from './pages/guides/SwitchingGuide.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
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
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/mobile-plan-guide" element={<MobilePlanGuide />} />
          <Route path="/guides/internet-plan-guide" element={<InternetPlanGuide />} />
          <Route path="/guides/switching-guide" element={<SwitchingGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SecurityGuard>
    </div>
  )
}
