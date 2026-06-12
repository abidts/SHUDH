import { recipes, site, whatsappLink } from '../data/products.js'

export default function Recipes() {
  return (
    <section id="recipes" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold">Recipes For Your Soul</h2>
          <p className="text-muted mt-3">
            The dishes our spices were made for — straight from Kashmiri kitchens.
          </p>
        </div>
        <div className="row g-4">
          {recipes.map((r) => (
            <div className="col-sm-6 col-lg-4" key={r.name}>
              <div className="recipe-card h-100 d-flex align-items-start gap-3 p-4">
                <div className="recipe-emoji">{r.emoji}</div>
                <div>
                  <h3 className="h6 fw-bold mb-1">{r.name}</h3>
                  <p className="text-muted small mb-2">{r.note}</p>
                  <a
                    className="recipe-link"
                    href={whatsappLink(
                      `Hello ${site.name}, which spices do I need for ${r.name}?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask what you need →
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
