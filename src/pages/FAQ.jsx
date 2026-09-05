import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { SearchIcon, ChevronDownIcon } from '../components/Icons.jsx'

const CATEGORIES = [
  {
    title: 'Mobile Plans',
    items: [
      { q: 'What should I compare in a mobile plan?', a: 'Compare monthly price, data allowance, contract length, coverage information, roaming, and any activation or cancellation terms.' },
      { q: 'What is a SIM-only plan?', a: 'A SIM-only plan generally provides mobile service without a new handset. Compare the included data, contract terms, and total monthly cost before choosing.' },
      { q: 'Can you recommend a specific provider?', a: 'We provide independent information and may introduce partner services. Any relevant partner relationship and commission will be disclosed before you choose to continue.' },
    ],
  },
  {
    title: 'Plan Pricing',
    items: [
      { q: 'What costs should I check before choosing a plan?', a: 'Review the recurring monthly price, taxes, activation charges, equipment costs, early cancellation terms, and any promotional expiry date.' },
      { q: 'Are partner referrals free?', a: 'Nexvoro does not charge a separate referral fee unless clearly stated. We may receive commission from a partner if you choose an introduced plan or service.' },
      { q: 'Are advertised prices guaranteed?', a: 'Prices, availability, and eligibility are set by each provider and can change. Confirm the final offer and terms directly before purchasing.' },
    ],
  },
  {
    title: 'Internet Plans',
    items: [
      { q: 'What should I compare in a home internet plan?', a: 'Compare advertised speed, data limits, installation costs, equipment fees, contract terms, and availability at your address.' },
      { q: 'Can I compare broadband providers?', a: 'Yes. We can explain common plan features and connect you with a partner when you choose to explore a referral.' },
      { q: 'Does Nexvoro install internet service?', a: 'No. Nexvoro provides plan information and referrals. The selected provider is responsible for installation and service delivery.' },
    ],
  },
  {
    title: 'Switching Plans',
    items: [
      { q: 'What should I consider before switching providers?', a: 'Check contract end dates, cancellation terms, number transfer requirements, equipment returns, installation timing, and the final monthly price.' },
      { q: 'Can I keep my phone number?', a: 'Number-transfer eligibility and steps depend on the provider and plan. Confirm the process with the provider before cancelling your current service.' },
      { q: 'Does Nexvoro cancel my current service?', a: 'No. We provide information and optional referrals. You remain responsible for confirming and completing any provider changes.' },
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
            Find answers about mobile plans, SIM-only options, internet plans, switching, and partner referrals.
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
            Our Canadian plan information team can help you compare your next options.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Discuss Plan Options
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
