import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const GUIDES = [
  {
    to: '/guides/mobile-plan-guide',
    title: 'How to Compare Mobile Plans in Canada',
    desc: 'A practical walkthrough of plan types, data allowances, contract terms, and pricing factors to review before you choose.',
    readTime: '8 min read',
  },
  {
    to: '/guides/internet-plan-guide',
    title: 'How to Compare Home Internet Plans',
    desc: 'Understand speeds, data limits, installation costs, and availability questions for Canadian broadband options.',
    readTime: '7 min read',
  },
  {
    to: '/guides/switching-guide',
    title: 'Switching Providers: What to Check First',
    desc: 'Contract end dates, cancellation terms, number transfers, and timing considerations before you switch.',
    readTime: '6 min read',
  },
]

export default function Guides() {
  return (
    <>
      <Header />
      <section className="page-hero">
        <div className="container">
          <h1>Plan Guides</h1>
          <p>
            Detailed, practical guides to help you understand Canadian mobile and internet plan options.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {GUIDES.map((guide) => (
              <div className="card" key={guide.to}>
                <h3 style={{ marginBottom: 12 }}>{guide.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: 16 }}>{guide.desc}</p>
                <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 16 }}>{guide.readTime}</p>
                <Link to={guide.to} className="btn btn-primary">
                  Read Guide
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
