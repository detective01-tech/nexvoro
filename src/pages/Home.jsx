import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { PhoneIcon, ArrowIcon } from '../components/Icons.jsx'
import { PHONE_DISPLAY, PHONE_TEL, openPhoneDialer } from '../constants.js'

const TRUST_ITEMS = [
  'Canada-Based Consulting Team',
  'General Office Contact',
  'Practical Recommendations',
  'Safe & Secure Service',
  'Highly Rated Advisors',
  '7 Days A Week',
]

const SERVICES = [
  {
    title: 'Device & Network Setup',
    desc: 'Guidance on hardware configuration, APN settings, and network onboarding for mobile devices and connected equipment.',
    link: 'Discuss setup needs',
  },
  {
    title: 'Network Configuration',
    desc: 'Advisory on connection settings, device configuration, and practical steps for improving your network experience.',
    link: 'Review network needs',
  },
  {
    title: 'Plan & Tariff Advisory',
    desc: 'Independent evaluation of mobile and data plans to help optimize your monthly technology costs and usage choices.',
    link: 'Review plan options',
  },
  {
    title: 'Plan Optimization',
    desc: 'Seeking better value? We offer independent advice on the latest mobile tariffs and data plans tailored to your usage habits.',
    link: 'Explore plans',
  },
  {
    title: 'Home & Office Network Planning',
    desc: 'Advisory on Wi-Fi coverage optimization, router placement, and network security for home and office environments.',
    link: 'Plan your network',
  },
  {
    title: 'Technology Migration Services',
    desc: 'Assistance with device data transfers, software updates, and migration planning when changing technology setups.',
    link: 'Plan a migration',
  },
  {
    title: 'New Device Setup',
    desc: 'Just got a new smartphone? Let us help you configure APN settings, transfer data, and set up voicemail quickly and easily.',
    link: 'Setup assistance',
  },
  {
    title: 'Technology Security Guidance',
    desc: 'General guidance on account protection, device security, and appropriate next steps when a device or account needs attention.',
    link: 'Discuss security needs',
  },
]

const STEPS = [
  {
    number: '1',
    title: 'Schedule a Consultation',
    desc: `Call our main office line at ${PHONE_DISPLAY} or send an online inquiry to discuss your technology requirements.`,
  },
  {
    number: '2',
    title: 'Consult a Specialist',
    desc: 'Speak with an IT specialist to review your technology requirements, setup questions, or planning needs.',
  },
  {
    number: '3',
    title: 'Receive Recommendations',
    desc: 'Get clear, actionable steps and expert advisory tailored to the technical challenges you describe.',
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
            Consultation By Appointment
          </a>
          <h1>Professional Technology &amp; Network Advisory Services</h1>
          <p>
            We provide independent consulting, device setup guidance, and IT optimization for
            Canadian individuals and small businesses.
          </p>
          <a href={PHONE_TEL} className="btn btn-primary" onClick={(event) => { event.preventDefault(); openPhoneDialer(PHONE_TEL) }}>
            <PhoneIcon width={18} height={18} /> General Inquiries: {PHONE_DISPLAY}
          </a>
          <p className="hero-fineprint">
            This is an independent advisory service. We may earn commission from partners.
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
            <h2 className="section-title">Advisory Services</h2>
            <p className="section-subtitle">
              Our independent consultants provide practical guidance for device setup, network
              planning, plan evaluation, and technology migration.
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
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 48px' }}>
            A straightforward consultation process for individuals and small businesses.
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
