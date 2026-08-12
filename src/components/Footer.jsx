import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../constants.js'

export default function Footer({ showDisclaimer = false }) {
  const { pathname } = useLocation()

  const handleOpenSecurity = (e) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-security-manager'))
  }

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
            <button
              type="button"
              onClick={handleOpenSecurity}
              style={footerSecurityBtnStyle}
              title="View Real-time Security Management"
            >
              🛡️ Security Status
            </button>
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

        <div className="footer-bottom">
          <span>© 2024 HI TECH Solutions. All rights reserved. Professional Canadian Tech Support.</span>
          <span style={{ marginLeft: '12px', color: '#10b981', cursor: 'pointer', fontSize: '0.8rem' }} onClick={handleOpenSecurity}>
            🔒 Real-Time Path Encryption Active
          </span>
        </div>
      </div>
    </footer>
  )
}

const footerSecurityBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#94a3b8',
  cursor: 'pointer',
  fontSize: '0.9rem',
  padding: 0,
  textDecoration: 'underline',
}

