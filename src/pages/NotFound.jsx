import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="section text-center">
        <div className="container">
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>Page not found</h1>
          <p className="section-subtitle" style={{ marginBottom: 24 }}>
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
