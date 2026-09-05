import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { ShieldIcon, UsersIcon, AccessibilityIcon, PinIcon } from '../components/Icons.jsx'

const VALUES = [
  {
    icon: <ShieldIcon width={18} height={18} />,
    title: 'Reliability',
    desc: 'Consistent, dependable service you can count on, ensuring your systems are always operational.',
  },
  {
    icon: <UsersIcon width={18} height={18} />,
    title: 'Expertise',
    desc: 'Clear explanations that help people compare plan features and make informed choices.',
  },
  {
    icon: <AccessibilityIcon width={18} height={18} />,
    title: 'Accessibility',
    desc: 'Clear communication and solutions designed to be understood and used by everyone.',
  },
  {
    icon: <PinIcon width={18} height={18} />,
    title: 'Local Consulting',
    desc: 'Proudly Canadian, providing context-aware, community-focused tech consulting.',
  },
]

export default function About() {
  return (
    <>
      <Header />

      <section className="about-hero">
        <div className="container split">
          <div>
            <span className="eyebrow">About Us</span>
            <h1>
              Your Trusted <span className="accent">Canadian</span> Tech Partners
            </h1>
            <p>
              We are dedicated to providing reliable, accessible, and expert technology solutions
              tailored to the unique needs of Canadians. From local consulting to comprehensive
              enterprise services, we bridge the gap between complex tech and everyday
              functionality.
            </p>
            <a href="#team" className="btn btn-primary">
              Meet Our Team
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
            alt="Tarifino High Tech Limited team collaborating around a whiteboard"
          />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container text-center">
          <div className="mission-icon">
            <ShieldIcon width={20} height={20} />
          </div>
          <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle" style={{ maxWidth: 640, margin: '0 auto' }}>
            At Tarifino High Tech Limited, our goal is to make Canadian mobile and internet plan
            information easier to understand. We help people compare options, identify useful
            questions, and decide whether to explore a partner referral.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#EEF2F6' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our plan information and referral service.
            </p>
          </div>
          <div className="grid grid-4">
            {VALUES.map((value) => (
              <div className="card value-card" key={value.title}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Technology consultants meeting in an office"
          />
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Our Story
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 16, lineHeight: 1.7 }}>
                Tarifino High Tech Limited provides independent mobile and internet plan information
                for Canadians who need help understanding their options or deciding what to explore.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 16, lineHeight: 1.7 }}>
                We explain common mobile, SIM-only, broadband, and plan comparison questions in plain language.
                When a partner referral is relevant, we disclose that Tarifino may receive commission
                if you choose the referred service.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              We aim to provide clear information with the approachability of a helpful neighbor.
              Tarifino High Tech Limited is an independent advisory service.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
