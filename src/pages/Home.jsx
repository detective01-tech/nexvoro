import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { PhoneIcon, ArrowIcon } from '../components/Icons.jsx'
import { PHONE_DISPLAY, PHONE_TEL, openPhoneDialer } from '../constants.js'

const TRUST_ITEMS = [
  'Canada-Based Support Team',
  'Freephone 0800 Number',
  'Fast Response Times',
  'Safe & Secure Service',
  'Highly Rated Advisors',
  '7 Days A Week',
]

const SERVICES = [
  {
    title: 'SIM Troubleshooting',
    desc: 'Is your SIM card not registering? We can guide you through activation steps, arrange replacements, and troubleshoot connection errors.',
    link: 'Help with SIM issues',
  },
  {
    title: 'Reception & Network',
    desc: 'Experiencing dropped calls or poor data speeds? Let us check for local outages and help optimize your device’s connection settings.',
    link: 'Fix connectivity',
  },
  {
    title: 'Billing Support',
    desc: 'Confused by an unexpected bill? We can help you understand charges, manage your account, and navigate billing disputes.',
    link: 'Resolve billing',
  },
  {
    title: 'Plan Optimization',
    desc: 'Seeking better value? We offer independent advice on the latest mobile tariffs and data plans tailored to your usage habits.',
    link: 'Explore plans',
  },
  {
    title: 'Home Broadband Fixes',
    desc: 'Dealing with a sluggish Wi-Fi connection? Our experts assist in diagnosing router faults and improving your home network performance.',
    link: 'Broadband help',
  },
  {
    title: 'Switching Providers',
    desc: 'Want to keep your current phone number? We’ll simplify the porting process and ensure a smooth transition to your new network.',
    link: 'Transfer number',
  },
  {
    title: 'New Device Setup',
    desc: 'Just got a new smartphone? Let us help you configure APN settings, transfer data, and set up voicemail quickly and easily.',
    link: 'Setup assistance',
  },
  {
    title: 'Lost or Stolen Phones',
    desc: 'Missing device? We’ll advise on immediate steps to take, including how to block your handset and secure your personal account.',
    link: 'Urgent support',
  },
]

const STEPS = [
  {
    number: '1',
    title: 'Dial Our Helpline',
    desc: `Call ${PHONE_DISPLAY} — toll-free from any Canadian device. Connect instantly without automated hurdles.`,
  },
  {
    number: '2',
    title: 'Consult a Specialist',
    desc: 'A knowledgeable Canadian advisor will listen carefully to your issue and diagnose the root cause quickly.',
  },
  {
    number: '3',
    title: 'Issue Resolved',
    desc: 'We provide clear, step-by-step guidance. The majority of tech problems are fixed during the first conversation.',
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
            aria-label="Call live support now"
            onClick={(event) => {
              event.preventDefault();
              openPhoneDialer(PHONE_TEL);
            }}
          >
            <span className="hero-badge-dot" aria-hidden="true" />
            Live Support Available Now
          </a>
          <h1>Reliable Canada Mobile &amp; Internet Support</h1>
          <p>
            Experiencing issues with your smartphone, SIM, or home broadband? Our independent
            Canadian tech experts are standing by to provide fast, friendly, and hassle-free
            solutions.
          </p>
          <a href={PHONE_TEL} className="btn btn-primary" onClick={(event) => { event.preventDefault(); openPhoneDialer(PHONE_TEL) }}>
            <PhoneIcon width={18} height={18} /> Call Free: {PHONE_DISPLAY}
          </a>
          <p className="hero-fineprint">
            This is an independent support service. We may earn commission from partners. Calls
            are free from Canadian landlines and mobiles.
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
            <h2 className="section-title">How Can We Assist You?</h2>
            <p className="section-subtitle">
              Our dedicated advisors are equipped to handle a wide range of mobile and internet
              inquiries. Whatever the problem, we’re here to help.
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
          <h2 className="section-title">Get Help in 3 Easy Steps</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            Skip the long queues and confusing menus. Experience fast, direct support when it
            matters most.
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
            <PhoneIcon width={18} height={18} /> Call Free Now: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <Footer showDisclaimer />
    </>
  )
}
