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
            <strong style={{ color: '#e2e8f0' }}>Disclaimer:</strong> Hi Tech Global Solutions is an independent technology consulting firm. We provide general advisory and technical support services. We are not affiliated with, authorized by, or sponsored by any specific telecommunications carrier, internet service provider, or hardware manufacturer.
          </div>
        )}

        <div className="footer-bottom">© 2024 Hi Tech Global Solutions. All rights reserved. Professional Canadian Tech Consulting.</div>
      </div>
    </footer>
  )
}

