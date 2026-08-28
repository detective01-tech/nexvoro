import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../constants.js'

export default function Footer({ showDisclaimer = false }) {
  const { pathname } = useLocation()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">Nexvoro High Tech Limited</div>
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
            <strong style={{ color: '#e2e8f0' }}>Important Disclaimer</strong> Compare Before You Buy is a completely independent third-party mobile and internet support service. We are not affiliated with, endorsed by, or connected to Virgin Mobile, Cogeco Windsor, Telus Home Services, Public Mobile Canada, Virgin Plus, Bell Fibe TV, or any other network provider. We provide general mobile and internet support guidance for customers on any Canada network. We can advise you on how to resolve issues and direct you to the right resources, regardless of which network or broadband provider you use.
          </div>
        )}

        <div className="footer-bottom">© 2024 Nexvoro High Tech Limited. </div>
      </div>
    </footer>
  )
}

