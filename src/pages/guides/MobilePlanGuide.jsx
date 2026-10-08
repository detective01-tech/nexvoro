import { Link } from 'react-router-dom'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'

export default function MobilePlanGuide() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="container">
          <h1>How to Compare Mobile Plans in Canada</h1>
          <p>A practical guide to evaluating plan types, costs, and terms before you choose.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2>Understanding Plan Types</h2>
          <p>
            Canadian mobile plans generally fall into a few categories. Postpaid plans bill you monthly
            after usage and often include a device financing option. Prepaid plans require payment in
            advance and typically do not include a subsidized phone. SIM-only plans provide service
            without a new handset, which can lower your monthly cost if you already own a compatible device.
          </p>
          <p>
            When comparing, start by identifying which category fits your situation. If you need a new
            phone and prefer to spread the cost, a postpaid plan with device financing may make sense.
            If you own your phone outright and want flexibility, SIM-only or prepaid options are worth
            reviewing.
          </p>

          <h2>What to Compare</h2>
          <h3>Monthly Price and Total Cost</h3>
          <p>
            Look beyond the advertised monthly price. Check whether taxes are included, whether there is
            an activation fee, and whether the price is promotional (increasing after 3, 6, or 12 months).
            Calculate the total cost over the full contract term, including any device balance remaining
            if you cancel early.
          </p>

          <h3>Data Allowance and Overage</h3>
          <p>
            Review how much high-speed data is included and what happens when you exceed it. Some plans
            throttle speeds after the allowance, while others charge per gigabyte. If you regularly use
            mobile data for video or tethering, prioritize a higher allowance over a slightly lower price.
          </p>

          <h3>Contract Length and Cancellation</h3>
          <p>
            Note the contract term and the cost of ending it early. Device balances, cancellation fees,
            and notice periods can add up. If you value flexibility, a no-contract or month-to-month
            option may be better even if the monthly price is slightly higher.
          </p>

          <h3>Coverage and Roaming</h3>
          <p>
            Confirm coverage in the places you live, work, and travel. Roaming charges outside Canada
            can be significant; if you travel, look for plans that include US roaming or affordable
            add-ons.
          </p>

          <h2>Practical Steps</h2>
          <ol>
            <li>List your must-haves: data amount, new phone or BYOD, contract flexibility.</li>
            <li>Compare at least three options on total 24-month cost, not just monthly price.</li>
            <li>Read the fine print on promotions, activation fees, and cancellation terms.</li>
            <li>Confirm coverage and roaming details for your specific needs.</li>
            <li>Ask about partner referrals or current offers before you decide.</li>
          </ol>

          <p>
            Tarifino provides independent information to help you ask the right questions. We do not
            sell mobile service directly. If a partner referral is relevant, we disclose any commission
            before you choose to continue.
          </p>

          <div style={{ marginTop: 32 }}>
            <Link to="/contact" className="btn btn-primary">Discuss Plan Options</Link>
            <span style={{ margin: '0 12px' }} />
            <Link to="/guides" className="btn">All Guides</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
