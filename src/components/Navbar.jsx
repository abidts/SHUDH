import { site, whatsappLink } from '../data/products.js'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-shudh sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <span className="brand-logo">S</span>
          {site.name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#recipes">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a className="btn btn-spice btn-sm" href="#buy">
                Buy Online
              </a>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                className="btn btn-wa btn-sm"
                href={whatsappLink(`Hello ${site.name}, I'd like to know more about your products.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
