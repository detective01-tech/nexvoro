import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL, openPhoneDialer } from '../constants.js'

export default function Header({ variant = 'inner' }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleCallClick = (event) => {
    event.preventDefault()
    openPhoneDialer(PHONE_TEL)
  }
  const handleOpenSecurity = (e) => {
    e.preventDefault()
    window.dispatchEvent(new CustomEvent('open-security-manager'))
  }

  if (variant === 'home') {
    return (
      <>
        <div className="topbar">
          <div className="container">
            <div className="topbar-left">
              <div className="topbar-text">
                <span className="topbar-phone">Free helpline: <a href={PHONE_TEL}>{PHONE_DISPLAY}</a></span>
                <span className="topbar-tagline">Independent Canada Mobile &amp; Internet Support</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                type="button"
                onClick={handleOpenSecurity}
                style={securityBadgeStyle}
                title="Click to view real-time security management & path encryption status"
              >
                🔐 Encrypted Paths &amp; Route Guard
              </button>
              <a href={PHONE_TEL} className="topbar-cta" onClick={handleCallClick}>
                Call Now — No Wait
              </a>
            </div>
          </div>
        </div>
        <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
          <div className="container">
            <Link to="/" className="logo-stacked">
              HI TECH
              <span>SOLUTIONS</span>
            </Link>
            <div className="header-actions">
              <a href={PHONE_TEL} className="btn btn-primary" onClick={handleCallClick}>
                CALL NOW
              </a>
            </div>
          </div>
        </header>
      </>
    )
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          HI TECH Solutions
        </Link>
        <div className="header-actions">
          <button
            type="button"
            onClick={handleOpenSecurity}
            style={securityBadgeStyle}
            title="Click to view real-time security status"
          >
            🔐 Security
          </button>
          <a href={PHONE_TEL} className="btn btn-outline-navy btn-sm" onClick={handleCallClick}>
            Helpline
          </a>
          <a href={PHONE_TEL} className="btn btn-primary btn-sm" onClick={handleCallClick}>
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}

const securityBadgeStyle = {
  background: 'rgba(16, 185, 129, 0.15)',
  border: '1px solid rgba(16, 185, 129, 0.3)',
  color: '#10b981',
  borderRadius: '20px',
  padding: '4px 10px',
  fontSize: '0.75rem',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
}
