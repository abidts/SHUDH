import { Link } from 'react-router-dom'
import { homepage, whatsappLink, site } from '../data/products.js'

export default function Hero() {
  const { badge, headline, heroImages } = homepage

  return (
    <section id="home" className="hero-bold">
      {/* Decorative corner spice photos */}
      <img
        className="hero-spice hero-spice-left"
        src={heroImages.left}
        alt=""
        aria-hidden="true"
        loading="eager"
      />
      <img
        className="hero-spice hero-spice-right"
        src={heroImages.right}
        alt=""
        aria-hidden="true"
        loading="eager"
      />

      <div className="container hero-bold-inner text-center">
        <span className="hero-badge">{badge}</span>

        <h1 className="hero-headline">
          {headline.map((line) => (
            <span className="d-block" key={line}>
              {line}
            </span>
          ))}
        </h1>

        <div className="hero-cta">
          <Link to="/products" className="btn-shopnow">
            SHOP NOW <span aria-hidden="true">→</span>
          </Link>

          <span className="hero-cta-divider" aria-hidden="true" />

          <a
            className="btn-watch"
            href={whatsappLink(`Hello ${site.name}, I'd like to know your story.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="watch-play" aria-hidden="true">▶</span>
            <span className="watch-text">
              WATCH
              <br />
              OUR STORY
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
