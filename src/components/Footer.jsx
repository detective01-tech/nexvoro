import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../constants.js'

export default function Footer({ showDisclaimer = false }) {
  const { pathname } = useLocation()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">Hi Tech Global Solutions</div>
          </div>
          <nav className="footer-nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={pathname === link.to ? { color: '#ffffff', fontWeight: 600 } : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {showDisclaimer && (
          <div className="footer-notice">
            <strong style={{ color: '#e2e8f0' }}>Important Notice:</strong> Hi Tech Global Solutions operates
            as a dedicated technology consulting and advisory service. All trademarks, service marks, and company names are the property of their respective owners. Our role is to offer general
            advisory services, configuration advice, and guidance to consumers. We aim to help you optimize setups independently or guide you toward
            the appropriate resources based on your needs.
          </div>
        )}

        <div className="footer-bottom">© 2024 Hi Tech Global Solutions. All rights reserved. Professional Canadian Tech Consulting.</div>
      </div>
    </footer>
  )
}

