import { useState } from 'react'
import { productsByCategory, site, whatsappLink } from '../data/products.js'

function ProductCard({ p }) {
  return (
    <div className="product-card d-flex flex-column text-center overflow-hidden h-100">
      {p.image ? (
        <img src={p.image} alt={p.name} className="product-img" loading="lazy" />
      ) : (
        <div className="product-emoji-wrap">
          <span className="product-emoji">{p.emoji}</span>
        </div>
      )}
      <div className="p-4 d-flex flex-column flex-grow-1">
        {p.category && <span className="product-cat">{p.category}</span>}
        <h3 className="h5 fw-bold">{p.name}</h3>
        <p className="text-muted flex-grow-1">{p.blurb}</p>
        <div className="price-tag mb-3">Contact for price</div>
        <a
          className="btn btn-wa btn-sm"
          href={whatsappLink(
            `Hello ${site.name}, I'd like to enquire about "${p.name}". Please share price and availability.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Enquire Now
        </a>
      </div>
    </div>
  )
}

export default function Products() {
  const groups = productsByCategory()
  const [active, setActive] = useState('All')

  const visible = active === 'All' ? groups : groups.filter((g) => g.category === active)

  return (
    <section id="products" className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title fw-bold">Products You Will Love</h2>
          <p className="text-muted mt-3">
            For quick product checks, bulk discussions, and direct support.
          </p>
        </div>

        {/* Category filter chips */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button
            type="button"
            className={`cat-chip ${active === 'All' ? 'active' : ''}`}
            onClick={() => setActive('All')}
          >
            All categories
          </button>
          {groups.map((g) => (
            <button
              type="button"
              key={g.category}
              className={`cat-chip ${active === g.category ? 'active' : ''}`}
              onClick={() => setActive(g.category)}
            >
              {g.category}
            </button>
          ))}
        </div>

        {/* Grouped category blocks */}
        {visible.map((g) => (
          <div className="category-block mb-5" key={g.category}>
            <h3 className="category-heading">{g.category}</h3>
            <div className="row g-4">
              {g.items.map((p) => (
                <div className="col-sm-6 col-lg-4" key={p.name}>
                  <ProductCard p={p} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
