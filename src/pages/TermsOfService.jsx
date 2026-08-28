import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const SECTIONS = [
  {
    id: 'acceptance',
    number: 1,
    title: 'Acceptance of Terms',
    body: (
      <>
        <p>
          By accessing and using the services provided by Nexvoro High Tech Limited (&ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of
          Service. If you do not agree to these terms, please do not use our services.
        </p>
        <p>
          These terms apply to all users of our independent mobile and internet support services, whether
          accessed via our website, over the phone, or in person at our Canadian store
          locations.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    number: 2,
    title: 'Description of Services',
    body: (
      <>
        <p>
          Nexvoro High Tech Limited provides independent Canadian mobile and internet support services, including but not
          limited to SIM card troubleshooting, network and signal diagnostics, billing guidance, plan upgrades, broadband support, number porting, and device configuration.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of our services at any
          time without prior notice. We will not be liable to you or any third party for any
          modification or discontinuation of service.
        </p>
      </>
    ),
  },
  {
    id: 'responsibilities',
    number: 3,
    title: 'User Responsibilities',
    body: (
      <>
        <p>As a user of our services, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information when requesting support.</li>
          <li>Back up all data before submitting a device for inspection or service.</li>
          <li>Ensure you have the legal right to authorize adjustments or modifications to the devices you submit.</li>
          <li>Treat our staff and consultants with respect.</li>
        </ul>
        <div className="tos-callout">
          <strong>Important Note:</strong> Nexvoro High Tech Limited is not responsible for data loss. Data
          backup is strictly the responsibility of the user.
        </div>
      </>
    ),
  },
  {
    id: 'liability',
    number: 4,
    title: 'Limitation of Liability',
    body: (
      <>
        <p>
          To the fullest extent permitted by applicable Canadian law, Nexvoro High Tech Limited shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages,
          including but not limited to loss of profits, data, use, or goodwill, arising out of or
          in connection with our services.
        </p>
        <p>
          Our total liability for any claim arising out of these Terms shall not exceed the
          amount paid by you to us for the specific service giving rise to the claim in the
          twelve (12) months preceding the claim.
        </p>
      </>
    ),
  },
  {
    id: 'law',
    number: 5,
    title: 'Governing Law',
    body: (
      <>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the
          Province of Ontario and the federal laws of Canada applicable therein, without regard
          to its conflict of law provisions.
        </p>
        <p>
          Any dispute arising out of or relating to these Terms shall be resolved exclusively in
          the courts located in Toronto, Ontario.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    number: 6,
    title: 'Changes to Terms',
    body: (
      <>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any
          time. If a revision is material, we will provide at least 30 days&rsquo; notice prior to
          any new terms taking effect. What constitutes a material change will be determined at
          our sole discretion.
        </p>
        <p>
          By continuing to access or use our services after any revisions become effective, you
          agree to be bound by the revised terms.
        </p>
      </>
    ),
  },
]

export default function TermsOfService() {
  const [active, setActive] = useState('changes')

  return (
    <>
      <Header />

      <section className="page-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>
            Please read these terms carefully before using our independent mobile and internet support
            services. Last updated: October 2023.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container tos-layout">
          <aside className="tos-toc">
            <div className="tos-toc-label">CONTENTS</div>
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={active === section.id ? 'active' : ''}
                onClick={() => setActive(section.id)}
              >
                {section.number}. {section.title}
              </a>
            ))}
          </aside>

          <div>
            {SECTIONS.map((section) => (
              <div className="tos-section" id={section.id} key={section.id}>
                <div className="tos-section-header">
                  <span className="tos-badge">{section.number}</span>
                  <h2>{section.title}</h2>
                </div>
                {section.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
