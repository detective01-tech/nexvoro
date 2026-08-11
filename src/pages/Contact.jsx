import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { PhoneIcon, ClockIcon, StoreIcon, SendIcon, ArrowIcon } from '../components/Icons.jsx'
import { HELPLINE_DISPLAY, HELPLINE_TEL, openPhoneDialer } from '../constants.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />

      <section className="page-hero">
        <div className="container">
          <h1>How Can We Help You Today?</h1>
          <p>
            Our Canadian technical support team is standing by to resolve your issues quickly and
            professionally.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="card" style={{ padding: 32 }}>
            <h2 style={{ fontSize: 22, marginBottom: 20 }}>Send us a message</h2>

            {submitted ? (
              <p style={{ color: 'var(--color-text-muted)' }}>
                Thanks — your message has been received. A HI TECH Solutions advisor will get back to
                you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" placeholder="John Doe" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="field">
                    <label htmlFor="issue">Issue Type</label>
                    <select id="issue" defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option>SIM &amp; Network</option>
                      <option>Billing</option>
                      <option>Devices</option>
                      <option>Account Security</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">How can we help?</label>
                  <textarea id="message" placeholder="Please describe your issue in detail..." required />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message <SendIcon width={16} height={16} />
                </button>
              </form>
            )}
          </div>

          <div>
            <div className="card">
              <div className="info-card">
                <div className="info-icon">
                  <PhoneIcon width={18} height={18} />
                </div>
                <div>
                  <h3>Helpline</h3>
                  <p>For immediate assistance, call our support line.</p>
                  <a href={HELPLINE_TEL} className="phone-link" onClick={(event) => { event.preventDefault(); openPhoneDialer(HELPLINE_TEL) }}>
                    {HELPLINE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div style={{ height: 16 }} />

            <div className="card">
              <div className="info-card" style={{ marginBottom: 0 }}>
                <div className="info-icon">
                  <ClockIcon width={18} height={18} />
                </div>
                <div>
                  <h3>Hours of Operation</h3>
                  <p style={{ marginBottom: 0 }}>
                    Monday - Friday: 8am - 8pm EST
                    <br />
                    Saturday: 9am - 5pm EST
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div style={{ height: 16 }} />

            <div className="card">
              <div className="info-card" style={{ marginBottom: 0 }}>
                <div className="info-icon">
                  <StoreIcon width={18} height={18} />
                </div>
                <div>
                  <h3>Our Stores</h3>
                  <p>Prefer in-person support? Visit one of our service centers.</p>
                  <a href="#locations" className="service-link">
                    Find a location <ArrowIcon width={14} height={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-band section-muted">
        <div className="container text-center">
          <h2 className="section-title">Need Immediate Assistance?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Our technicians are available to help you resolve critical issues right now.
          </p>
          <a href={HELPLINE_TEL} className="btn btn-primary" onClick={(event) => { event.preventDefault(); openPhoneDialer(HELPLINE_TEL) }}>
            <PhoneIcon width={18} height={18} /> Call Now
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
