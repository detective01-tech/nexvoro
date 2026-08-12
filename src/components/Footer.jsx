import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../constants.js'

export default function Footer({ showDisclaimer = false }) {
  const { pathname } = useLocation()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">HI TECH Solutions</div>
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
            <strong style={{ color: '#e2e8f0' }}>Important Notice:</strong> HI TECH Solutions operates
            as an independent third-party tech support and advisory service. We are not officially
            affiliated with, endorsed by, or directly connected to major carriers like Rogers, Bell,
            Telus, Fido, Virgin Plus, or any specific network provider. Our role is to offer general
            support, troubleshooting advice, and guidance to consumers using any Canadian network or
            broadband service. We aim to help you resolve issues independently or guide you toward
            the appropriate official resources based on your provider.
          </div>
        )}

        <div className="footer-bottom">© 2024 HI TECH Solutions. All rights reserved. Professional Canadian Tech Support.</div>
      </div>
    </footer>
  )
}

