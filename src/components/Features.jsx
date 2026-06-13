import { Link } from 'react-router-dom'
import { homepage } from '../data/products.js'

// Hide a stock image gracefully if its URL ever 404s — the colored tone
// block behind it keeps the card looking intentional.
function hideOnError(e) {
  e.currentTarget.style.visibility = 'hidden'
}

export default function Features() {
  const { cards } = homepage

  return (
    <section className="flavor-cards">
      <div className="container">
        <div className="row g-3 g-lg-4">
          {cards.map((card) => (
            <div className="col-12 col-md-4" key={card.tone}>
              <div className={`flavor-card tone-${card.tone}`}>
                {/* Product spotlight card (orange) */}
                {card.kicker ? (
                  <>
                    <span className="card-kicker">{card.kicker}</span>
                    <h3 className="card-product-title">{card.title}</h3>
                    <div className="card-jar-wrap">
                      <img
                        className="card-jar"
                        src={card.jar}
                        alt={card.title}
                        loading="lazy"
                        onError={hideOnError}
                      />
                      {card.pill && <span className="card-pill pill-green">{card.pill}</span>}
                      {card.tag && <span className="card-pill pill-dark">{card.tag}</span>}
                    </div>
                    <Link to="/products" className="card-cta">
                      Shop Now <span aria-hidden="true">→</span>
                    </Link>
                  </>
                ) : (
                  /* Editorial cards (green / yellow) */
                  <>
                    <span className="card-label">{card.label}</span>
                    <div className="card-photo-wrap">
                      <img
                        className="card-photo"
                        src={card.image}
                        alt={card.heading}
                        loading="lazy"
                        onError={hideOnError}
                      />
                      {card.badge && <span className="card-pill pill-dark">{card.badge}</span>}
                    </div>
                    <h3 className="card-heading">{card.heading}</h3>
                    {card.jar && (
                      <img
                        className="card-jar-inline"
                        src={card.jar}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        onError={hideOnError}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
