import { Link } from 'react-router-dom'
import { categoryInfo, productsByCategory } from '../data/products.js'

export default function CategoryShowcase() {
  const groups = productsByCategory()

  return (
    <section className="category-showcase py-2">
      <div className="container">
        {groups.map(({ category, items }, i) => {
          const info = categoryInfo[category] || {}
          const emoji = info.emoji || items[0]?.emoji || '🌶️'
          const flip = i % 2 === 1 // alternate image side

          return (
            <div className="row align-items-center g-4 g-lg-5 showcase-row" key={category}>
              {/* Text column */}
              <div className={`col-lg-6 ${flip ? 'order-lg-2' : ''}`}>
                <span className="showcase-title">{category}</span>
                <p className="showcase-blurb mt-4">{info.blurb}</p>
                <Link to="/products" className="btn-viewmore mt-2">
                  View More
                </Link>
              </div>

              {/* Image column */}
              <div className={`col-lg-6 text-center ${flip ? 'order-lg-1' : ''}`}>
                <div className="showcase-image">
                  {info.image ? (
                    <img src={info.image} alt={category} loading="lazy" />
                  ) : (
                    <span className="showcase-emoji">{emoji}</span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
