import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { PhoneIcon, ArrowIcon } from '../components/Icons.jsx'
import { PHONE_DISPLAY, PHONE_TEL, openPhoneDialer } from '../constants.js'

const TRUST_ITEMS = [
  'Canadian Plan Information',
  'General Office Contact',
  'Practical Comparisons',
  'Clear, Practical Guidance',
  'Independent Advice',
  'Partner Relationships Disclosed',
]

const SERVICES = [
  {
    title: 'Mobile Plan Comparison',
    desc: 'Review mobile plan types, data allowances, contract terms, and pricing considerations for your household or business.',
    link: 'Compare mobile plans',
  },
  {
    title: 'SIM-Only Plan Options',
    desc: 'Explore SIM-only options and understand the trade-offs between monthly plans, data allowances, and contract lengths.',
    link: 'Explore SIM-only plans',
  },
  {
    title: 'Internet Plan Options',
    desc: 'Compare home internet and broadband plan features, availability questions, speeds, and monthly pricing information.',
    link: 'Compare internet plans',
  },
  {
    title: 'Plan Upgrades & Changes',
    desc: 'Understand common upgrade paths, switching considerations, and questions to ask before choosing a new plan.',
    link: 'Discuss plan options',
  },
  {
    title: 'Family & Multi-Line Plans',
    desc: 'Review the features and pricing factors that can matter when comparing mobile plans for more than one person.',
    link: 'Review family plans',
  },
  {
    title: 'Switching Provider Information',
    desc: 'Learn about common steps, timing, and questions to consider when comparing a move to another mobile or internet provider.',
    link: 'Discuss switching',
  },
  {
    title: 'Business Connectivity Options',
    desc: 'Explore questions to ask when comparing mobile and internet plans for a small business or professional team.',
    link: 'Review business plans',
  },
  {
    title: 'Partner Offers & Referrals',
    desc: 'When relevant, we can introduce partner services. We disclose partner relationships before you choose to continue.',
    link: 'Ask about referrals',
  },
]

const STEPS = [
  {
    number: '1',
    title: 'Call Our Consultation Line',
    desc: `Dial ${PHONE_DISPLAY} to discuss your question with an advisor. Phone charges may depend on your carrier and plan.`,
  },
  {
    number: '2',
    title: 'Speak to an Expert',
    desc: 'An advisor will ask a few questions about your usage, budget, and preferences.',
  },
  {
    number: '3',
    title: 'Choose Your Next Step',
    desc: "We'll explain practical next steps and, where relevant, connect you with a partner or provider resource.",
  },
]

export default function Home() {
  return (
    <>
      <Header variant="home" />

      <section className="hero-dark">
        <div className="container">
          <a
            href={PHONE_TEL}
            className="hero-badge"
            aria-label="Call live consultation now"
            onClick={(event) => {
              event.preventDefault();
              openPhoneDialer(PHONE_TEL);
            }}
          >
            <span className="hero-badge-dot" aria-hidden="true" />
            Live Consultation Available
          </a>
          <h1>Compare Canadian Mobile & Internet Plans</h1>
          <p>
            Understand your options for mobile, SIM-only, and home internet plans.<br/>
            Tarifino provides independent information and partner referrals for Canadian customers.
          </p>
          <a href={PHONE_TEL} className="btn btn-primary" onClick={(event) => { event.preventDefault(); openPhoneDialer(PHONE_TEL) }}>
            <PhoneIcon width={18} height={18} /> General Inquiries: {PHONE_DISPLAY}
          </a>
          <p className="hero-fineprint">
            Tarifino is independent and is not a network provider. We may receive commission from partners when you choose a referred plan or service. Any relevant relationship will be disclosed before a referral.
          </p>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container">
          {TRUST_ITEMS.map((item) => (
            <span className="trust-item" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Can We Help You With?</h2>
            <p className="section-subtitle">
              We explain plan features, pricing factors, and switching considerations so you can
              decide which option to explore.
            </p>
          </div>

          <div className="grid grid-4">
            {SERVICES.map((service) => (
              <div className="card service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href={PHONE_TEL} className="service-link" onClick={(event) => { event.preventDefault(); openPhoneDialer(PHONE_TEL) }}>
                  <PhoneIcon width={14} height={14} /> {service.link} <ArrowIcon width={14} height={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section steps-section section-muted">
        <div className="container">
          <h2 className="section-title">Explore Plans in 3 Simple Steps</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Share your preferences, review relevant information, and choose your next step.
          </p>

          <div className="grid grid-3">
            {STEPS.map((step) => (
              <div className="step" key={step.number}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <a href={PHONE_TEL} className="btn btn-primary" style={{ marginTop: 48 }} onClick={(event) => { event.preventDefault(); openPhoneDialer(PHONE_TEL) }}>
            <PhoneIcon width={18} height={18} /> General Inquiries: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <Footer showDisclaimer />
    </>
  )
}
