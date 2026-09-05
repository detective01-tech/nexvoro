import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <section className="section legal-page" style={{ paddingBottom: 100 }}>
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last Updated: August 15, 2026</p>

          <div className="legal-card">
            <h2>1. Introduction &amp; General Information</h2>
            <p>
              At Tarifino High Tech Limited (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we treat your privacy and transparency with the highest priority.
              This Privacy Policy details how we collect, use, store, protect, and share your personal data when you access our website, review mobile and internet plan information, request a partner referral, or contact our office.
            </p>
            <p>
              By accessing or using our services, you consent to the data practices described in this Privacy Policy in compliance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information to provide plan information, respond to inquiries, and improve user experiences:</p>
            <ul>
              <li>
                <strong>Personal Identification Information:</strong> Voluntarily provided details such as your full name, phone number, email address, and postal code when you request plan information, a partner referral, or contact our advisory team.
              </li>
              <li>
                <strong>Technical &amp; Usage Diagnostics:</strong> Automatically collected information including your Internet Protocol (IP) address, browser type and version, device identifier, time zone, referral links, and page visit duration.
              </li>
              <li>
                <strong>Communication Logs:</strong> Summaries of phone consultations or consulting inquiries to ensure quality assurance, service fulfillment, and advisory accuracy.
              </li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>Collected information is used for legitimate plan information and referral purposes:</p>
            <ul>
              <li>To provide independent mobile and internet plan information.</li>
              <li>To connect you with a partner when you request or choose to explore a referral.</li>
              <li>To evaluate website usability, detect security vulnerabilities, and enhance site speed and functionality.</li>
              <li>To respond promptly to customer service requests, inquiries, and feedback.</li>
              <li>To comply with regulatory, tax, and legal requirements.</li>
            </ul>

            <h2>4. Advertising &amp; Google Ads Disclosure</h2>
            <p>
              We utilize advertising services, including Google Ads, to promote our independent tech advisory services online.
            </p>
            <ul>
              <li>
                <strong>Advertising Cookies &amp; Remarketing:</strong> Vendors, including Google, use cookies or unique device identifiers to serve ads based on prior visits to our website.
              </li>
              <li>
                <strong>Google Analytics &amp; Tag Manager:</strong> We use web analytics tools to measure audience interactions and campaign effectiveness. Google Analytics processes anonymized IP addresses and user engagement metrics.
              </li>
              <li>
                <strong>Opt-Out Options:</strong> Visitors may opt out of personalized Google advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> or opting out of cookie usage via the <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-Out Page</a>.
              </li>
            </ul>

            <h2>5. Dedicated Service &amp; Commission Disclosure</h2>
            <p>
              Tarifino High Tech Limited provides independent mobile and internet plan information and referrals. We do not represent network providers or official technical-support departments. All trademarks and brand names belong to their respective owners. We may receive compensation or affiliate commission from a service partner if you choose to explore or purchase a plan or service introduced during a consultation. Relevant partner relationships will be disclosed before a referral.
            </p>

            <h2>6. Cookies &amp; Tracking Technologies</h2>
            <p>
              Our website uses essential, preference, and analytical cookies. Essential cookies ensure core functionality, security, and page loading speed. You can manage or disable cookie preferences directly within your web browser settings; however, disabling certain cookies may affect page functionality.
            </p>

            <h2>7. Information Sharing &amp; Disclosure</h2>
            <p>
              We do not sell, trade, or rent personal data to third parties. We may disclose your information strictly under the following limited circumstances:
            </p>
            <ul>
              <li><strong>Trusted Service Providers:</strong> Secure vendors assisting in website hosting, phone infrastructure, or analytics under strict non-disclosure obligations.</li>
              <li><strong>Legal Compliance:</strong> When mandated by applicable laws, subpoenas, court orders, or governmental requests to protect rights, property, or safety.</li>
            </ul>

            <h2>8. Data Security &amp; Retention</h2>
            <p>
              We employ industry-standard administrative, technical, and physical security safeguards (including HTTPS/TLS encryption) to prevent unauthorized access, disclosure, or alteration of personal data. Data is retained only as long as necessary to fulfill support purposes or meet legal retention requirements.
            </p>

            <h2>9. Your Canadian Privacy Rights (PIPEDA)</h2>
            <p>Under PIPEDA and applicable Canadian laws, you maintain the following rights regarding your personal data:</p>
            <ul>
              <li>The right to request access to the personal data we hold about you.</li>
              <li>The right to request correction or updating of inaccurate personal information.</li>
              <li>The right to withdraw consent for processing or request data deletion, subject to legal obligations.</li>
            </ul>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our privacy representative:
            </p>
            <p style={{ marginTop: 10 }}>
                <strong>Tarifino High Tech Limited Privacy Office</strong><br />
              Email: privacy@tarifino.tech<br />
              Office Line: 877 627 8313<br />
              Location: Canada
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

