import { Link } from 'react-router-dom'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'

export default function InternetPlanGuide() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="container">
          <h1>How to Compare Home Internet Plans</h1>
          <p>Speeds, data limits, costs, and availability questions for Canadian broadband.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2>Connection Types</h2>
          <p>
            Home internet in Canada is delivered over several technologies. Fibre offers the highest
            speeds and symmetrical upload/download where available. Cable provides strong download
            speeds over existing TV infrastructure. DSL uses phone lines and is widely available but
            generally slower. Fixed wireless and satellite serve rural areas where wired options are limited.
          </p>
          <p>
            Availability depends on your address. A plan advertised nationally may not be offered at
            your specific location, so always confirm availability before comparing prices.
          </p>

          <h2>What to Compare</h2>
          <h3>Download and Upload Speeds</h3>
          <p>
            Advertised speeds are maximums under ideal conditions. For typical household use—streaming,
            video calls, and browsing—50 to 150 Mbps download is sufficient for most families. If you
            upload large files or run a home office with multiple video streams, pay attention to upload
            speed as well.
          </p>

          <h3>Data Limits</h3>
          <p>
            Many plans include unlimited data, but some have monthly caps with overage charges or
            throttled speeds after the limit. If you stream in 4K or have multiple heavy users,
            unlimited data is worth prioritizing.
          </p>

          <h3>Installation and Equipment</h3>
          <p>
            Check for installation fees, modem/router rental charges, and whether you can use your own
            equipment. These costs are often overlooked but can add $10 to $20 per month.
          </p>

          <h3>Contract Terms and Price Increases</h3>
          <p>
            As with mobile plans, verify whether the price is promotional and when it increases.
            Note the contract length and any early cancellation fees.
          </p>

          <h2>Questions to Ask</h2>
          <ul>
            <li>Is this speed available at my address, and is it fibre to the home?</li>
            <li>What is the total monthly cost including equipment rental and taxes?</li>
            <li>Is data truly unlimited, or is there a fair-use policy?</li>
            <li>What are the installation timelines and fees?</li>
            <li>Can I bundle with mobile service for a discount?</li>
          </ul>

          <p>
            Tarifino provides independent information and can introduce partner services where relevant.
            We disclose partner relationships before you choose to continue.
          </p>

          <div style={{ marginTop: 32 }}>
            <Link to="/contact" className="btn btn-primary">Discuss Internet Options</Link>
            <span style={{ margin: '0 12px' }} />
            <Link to="/guides" className="btn">All Guides</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
