import { Link } from 'react-router-dom'
import { categoryInfo, productsByCategory } from '../data/products.js'

// Build one visual tile per category: a representative image (a product photo
// if any, else the category's showcase image) or an emoji fallback, plus count.
function categoryTiles() {
  return productsByCategory().map(({ category, items }) => {
    const withImage = items.find((p) => p.image)
    return {
      category,
      image: withImage ? withImage.image : categoryInfo[category]?.image || '',
      emoji: items[0]?.emoji || '🌶️',
      count: items.length,
    }
  })
}

function Tile({ t, ariaHidden }) {
  return (
    <Link
      className="ticker-tile"
      to="/products"
      aria-hidden={ariaHidden || undefined}
      tabIndex={ariaHidden ? -1 : 0}
    >
      <div className="ticker-thumb">
        {t.image ? (
          <img src={t.image} alt={t.category} loading="lazy" />
        ) : (
          <span className="ticker-emoji">{t.emoji}</span>
        )}
      </div>
      <div className="ticker-meta">
        <span className="ticker-name">{t.category}</span>
        <span className="ticker-count">
          {t.count} {t.count === 1 ? 'product' : 'products'}
        </span>
      </div>
    </Link>
  )
}

export default function CategoryTicker() {
  const tiles = categoryTiles()

  return (
    <section className="ticker-section py-5">
      <div className="container text-center mb-4">
        <h2 className="section-title fw-bold">Shudh Specialities</h2>
      </div>
      <div className="ticker" aria-label="Product categories">
        {/* Track is duplicated so the scroll loops seamlessly. */}
        <div className="ticker-track">
          {tiles.map((t) => (
            <Tile t={t} key={t.category} />
          ))}
          {tiles.map((t) => (
            <Tile t={t} key={`dup-${t.category}`} ariaHidden />
          ))}
        </div>
      </div>
    </section>
  )
}
