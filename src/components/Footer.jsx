import { Link } from 'react-router-dom'
import { site, whatsappLink } from '../data/products.js'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/recipes', label: 'Recipes' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className="footer-shudh py-4 text-center">
        <div className="container">
          <h3 className="h5 brand-font fw-bold mb-2">{site.name}</h3>
          <p className="mb-2 opacity-75">{site.city}</p>
          <div className="mb-3 d-flex flex-wrap justify-content-center">
            {pages.map((p) => (
              <Link key={p.to} to={p.to}>{p.label}</Link>
            ))}
          </div>
          <div className="mb-3">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a
              href={whatsappLink(`Hello ${site.name}!`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <p className="mb-0 small opacity-75">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </footer>
      <a
        className="wa-float"
        href={whatsappLink(`Hello ${site.name}!`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  )
}
