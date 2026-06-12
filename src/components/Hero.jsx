import { Link } from 'react-router-dom'
import { site, whatsappLink } from '../data/products.js'

export default function Hero() {
  return (
    <section id="home" className="hero text-center">
      <div className="container">
        <span className="hero-pill mb-3">📍 {site.city}</span>
        <h1 className="display-3 fw-bold mt-3">{site.name}</h1>
        <p className="lead fs-4 mt-3 mx-auto" style={{ maxWidth: 640 }}>
          {site.tagline}
        </p>
        <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
          <Link to="/products" className="btn btn-spice btn-lg">
            Explore Products
          </Link>
          <a
            className="btn btn-wa btn-lg"
            href={whatsappLink(`Hello ${site.name}, I'd like to place an enquiry.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
