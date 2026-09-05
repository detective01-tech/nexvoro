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
  if (variant === 'home') {
    return (
      <>
        <div className="topbar">
          <div className="container">
            <div className="topbar-left">
              <div className="topbar-text">
                <span className="topbar-phone">Plan Information: <a href={PHONE_TEL}>{PHONE_DISPLAY}</a></span>
                <span className="topbar-tagline">Canada Mobile & Internet Plans</span>
                <span>Independent Referral Service</span>
              </div>
            </div>
          </div>
        </div>
        <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
          <div className="container">
            <Link to="/" className="logo-stacked">
              Nexvoro
              <span>High Tech Limited</span>
            </Link>
            <div className="header-actions">
              <a href={PHONE_TEL} className="btn btn-primary" onClick={handleCallClick}>
                Call Now 
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
        <Link to="/" className="logo-stacked">
          Nexvoro
          <span>High Tech Limited</span>
        </Link>
        <div className="header-actions">
          <a href={PHONE_TEL} className="btn btn-outline-navy btn-sm" onClick={handleCallClick}>
            Call Now
          </a>
        </div>
      </div>
    </header>
  )
}
