import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { PhoneIcon, ArrowIcon } from '../components/Icons.jsx'
import { PHONE_DISPLAY, PHONE_TEL, openPhoneDialer } from '../constants.js'

const TRUST_ITEMS = [
  'Canada-Based Consulting Team',
  'General Office Contact',
  'Practical Recommendations',
  'Clear, Practical Guidance',
  'Independent Advice',
  'Partner Relationships Disclosed',
]

const SERVICES = [
  {
    title: 'SIM Card Issues',
    desc: "SIM not working? Card not recognized? We'll walk you through SIM activation, replacement requests, and troubleshooting step by step.",
    link: 'Call for SIM help',
  },
  {
    title: 'Network & Signal Problems',
    desc: 'No signal, slow data, or dropped calls? Our team can diagnose network outages and signal issues and advise on the best next steps.',
    link: 'Fix network issues',
  },
  {
    title: 'Billing & Account Queries',
    desc: "Unexpected charges, billing errors, or account access problems? We'll help you understand your bills and guide you through disputes.",
    link: 'Billing help',
  },
  {
    title: 'Upgrades & New Plans',
    desc: 'Looking for a better deal? We explain available mobile and SIM-only plan options for your needs and budget.',
    link: 'Plan advice',
  },
  {
    title: 'Broadband & Internet Support',
    desc: 'Slow internet, router issues, or broadband faults? Our advisors can help diagnose your home internet problems and suggest solutions.',
    link: 'Broadband help',
  },
  {
    title: 'Number Porting & Transfers',
    desc: "Want to keep your number when switching providers? We'll guide you through the PAC code process and make switching hassle-free.",
    link: 'Port your number',
  },
  {
    title: 'Device Setup & Configuration',
    desc: 'New phone or device not set up correctly? We help with APN settings, data configuration, voicemail setup and more.',
    link: 'Setup help',
  },
  {
    title: 'Lost, Stolen & Blocked Phones',
    desc: "Phone lost or stolen? We'll advise you on what steps to take, including how to bar your device and protect your account.",
    link: 'Get urgent help',
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
    desc: 'A friendly, knowledgeable advisor will listen to your issue and ask a few simple questions to understand your situation.',
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
          <h1>Canada Mobile & Internet<br/>Support You Can Trust</h1>
          <p>
            Having trouble with your mobile, SIM card, or broadband?<br/>
            Our independent Canada experts are ready to help fast, friendly, and stress-free.
          </p>
          <a href={PHONE_TEL} className="btn btn-primary" onClick={(event) => { event.preventDefault(); openPhoneDialer(PHONE_TEL) }}>
            <PhoneIcon width={18} height={18} /> General Inquiries: {PHONE_DISPLAY}
          </a>
          <p className="hero-fineprint">
            Nexvoro is independent and is not a network provider. We may receive commission from partners when you choose a referred plan or service. Any relevant relationship will be disclosed before a referral.
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
              Our expert advisors handle all types of mobile and internet queries — whatever the
issue, we’ve got you covered.
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
          <h2 className="section-title">Get Help in 3 Simple Steps</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            No long waits, no complicated processes. Just fast, friendly support when you need it most.
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
