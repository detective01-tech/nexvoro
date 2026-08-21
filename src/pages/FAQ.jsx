import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { SearchIcon, ChevronDownIcon } from '../components/Icons.jsx'

const CATEGORIES = [
  {
    title: 'SIM & Network',
    items: [
      { q: 'How do I activate my new SIM card?', a: 'Insert the SIM, then contact our office to discuss activation steps and network onboarding guidance.' },
      { q: 'Why is my data speed slow?', a: 'Slow data is usually caused by network congestion, a distant tower, or an outdated APN setting — we can check all three with you.' },
      { q: 'Does my plan include 5G?', a: '5G eligibility depends on your device and your carrier plan. Tell us your phone model and we’ll confirm eligibility.' },
    ],
  },
  {
    title: 'Billing',
    items: [
      { q: 'When is my bill due?', a: 'Billing dates vary by carrier and plan. We can help you locate your due date on your latest statement.' },
      { q: 'How do I set up auto-pay?', a: 'We can guide you through enabling auto-pay on your carrier’s app or website step by step.' },
      { q: 'What are these unexpected charges?', a: 'Unexpected charges are often overage fees, add-ons, or prorated changes — we’ll help you break down the line items.' },
    ],
  },
  {
    title: 'Devices',
    items: [
      { q: 'How do I upgrade my phone?', a: 'We’ll explain your upgrade eligibility, trade-in options, and help you compare current device offers.' },
      { q: 'What is the return policy for accessories?', a: 'Return windows vary by retailer; we can point you to the correct policy for where the accessory was purchased.' },
      { q: 'Can I bring my own device?', a: 'Most unlocked devices work across Canadian networks. We can confirm compatibility before you switch.' },
    ],
  },
  {
    title: 'Account Security',
    items: [
      { q: 'How do I reset my password?', a: 'We can walk you through your carrier’s official password reset flow safely, without ever asking for your password ourselves.' },
      { q: 'How do I enable Two-Factor Authentication (2FA)?', a: 'We’ll show you where to find 2FA settings in your account and how to set up an authenticator app or SMS codes.' },
      { q: 'I lost my phone, what should I do?', a: 'Call us right away — we’ll help you suspend service, locate the device if possible, and secure your account.' },
    ],
  },
]

function FaqCategory({ category }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="card">
      <div className="faq-category">
        <div className="faq-category-icon" />
        <h3>{category.title}</h3>
      </div>
      {category.items.map((item, i) => (
        <div key={item.q}>
          <div className="faq-item" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <span>{item.q}</span>
            <ChevronDownIcon
              width={16}
              height={16}
              style={{
                transition: 'transform 0.15s ease',
                transform: openIndex === i ? 'rotate(180deg)' : 'none',
                flexShrink: 0,
              }}
            />
          </div>
          {openIndex === i && (
            <p style={{ color: 'var(--color-text-muted)', fontSize: 14, paddingBottom: 14, margin: 0 }}>
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      <Header />

      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container text-center">
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>Frequently Asked Questions</h1>
          <p className="section-subtitle" style={{ maxWidth: 560, margin: '0 auto 32px' }}>
            Find answers to the most common questions about our technology consulting services, billing,
            and account management.
          </p>
          <div className="search-bar">
            <SearchIcon width={18} height={18} />
            <span>Search for answers...</span>
          </div>
        </div>
      </section>

      <section className="section section-muted" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="grid grid-2">
            {CATEGORIES.map((category) => (
              <FaqCategory category={category} key={category.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container text-center">
          <h2 className="section-title">Still have questions?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Our Canadian technology consulting team is ready to help you with anything else you need.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Consultants
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
