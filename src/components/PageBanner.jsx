import { homepage } from '../data/products.js'

// Shared light banner header used at the top of every sub-page — matches the
// bold flavor-story home hero (cream backdrop, corner spice photos, western
// headline).
export default function PageBanner({ title, subtitle }) {
  return (
    <header className="page-banner-bold text-center">
      <img
        className="hero-spice hero-spice-left"
        src={homepage.heroImages.left}
        alt=""
        aria-hidden="true"
      />
      <img
        className="hero-spice hero-spice-right"
        src={homepage.heroImages.right}
        alt=""
        aria-hidden="true"
      />
      <div className="container page-banner-inner">
        <span className="hero-badge">{homepage.badge}</span>
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-sub">{subtitle}</p>}
      </div>
    </header>
  )
}
