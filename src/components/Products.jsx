import { products, site, whatsappLink } from '../data/products.js'

export default function Products() {
  return (
    <section id="products" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold">Our Products</h2>
          <p className="text-muted mt-3">
            For quick product checks, bulk discussions, and direct support.
          </p>
        </div>
        <div className="row g-4">
          {products.map((p) => (
            <div className="col-sm-6 col-lg-4" key={p.name}>
              <div className="product-card d-flex flex-column text-center overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="product-img" loading="lazy" />
                ) : (
                  <div className="product-emoji-wrap">
                    <span className="product-emoji">{p.emoji}</span>
                  </div>
                )}
                <div className="p-4 d-flex flex-column flex-grow-1">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
