import { Link } from 'react-router-dom'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'

export default function SwitchingGuide() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="container">
          <h1>Switching Providers: What to Check First</h1>
          <p>Timing, contracts, number transfers, and steps for a smooth change.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2>Before You Switch</h2>
          <p>
            Switching mobile or internet providers can save money or get you better features, but
            timing matters. Start by reviewing your current contract. Note the end date, any device
            balance owing, and the cancellation terms. Cancelling before the contract ends can trigger
            fees that offset your savings.
          </p>

          <h2>Key Checklist</h2>
          <h3>Contract and Device Balance</h3>
          <p>
            If you financed a phone, you typically owe the remaining device balance when you cancel.
            Get the exact payoff amount in writing before you commit to a new provider.
          </p>

          <h3>Number Transfer (Porting)</h3>
          <p>
            In most cases you can keep your phone number when switching mobile providers. Do not cancel
            your old service before the transfer completes—cancelling first can cause you to lose the
            number. The new provider usually handles the port; confirm the process and timeline with them.
          </p>

          <h3>Timing and Overlap</h3>
          <p>
            Avoid gaps in service by overlapping briefly if possible. For home internet, schedule
            installation of the new service before cancelling the old one, especially if you work from home.
          </p>

          <h3>Final Bills and Equipment Returns</h3>
          <p>
            Return any rented equipment (modems, TV boxes) promptly to avoid non-return fees. Review
            your final bill for accuracy, including prorated charges.
          </p>

          <h2>Common Mistakes</h2>
          <ul>
            <li>Cancelling the old service before the number transfer is complete.</li>
            <li>Ignoring the device balance owing on a financed phone.</li>
            <li>Not confirming the new provider's coverage at your address.</li>
            <li>Overlooking installation timelines for home internet.</li>
          </ul>

          <p>
            Tarifino does not cancel services on your behalf. We provide information and optional
            referrals; you remain responsible for confirming and completing any provider changes.
          </p>

          <div style={{ marginTop: 32 }}>
            <Link to="/contact" className="btn btn-primary">Discuss Switching</Link>
            <span style={{ margin: '0 12px' }} />
            <Link to="/guides" className="btn">All Guides</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
