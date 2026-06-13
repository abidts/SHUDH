import { recipes, site, whatsappLink } from '../data/products.js'

export default function Recipes() {
  return (
    <section id="recipes" className="py-5">
      <div className="container">
        <div className="row g-4">
          {recipes.map((r) => (
            <div className="col-sm-6 col-lg-4" key={r.name}>
              <div className="recipe-card h-100 d-flex flex-column overflow-hidden">
                <div className="recipe-thumb">
                  {r.image ? (
                    <img src={r.image} alt={r.name} loading="lazy" />
                  ) : (
                    <span className="recipe-emoji">{r.emoji}</span>
                  )}
                </div>
                <div className="d-flex flex-column flex-grow-1 p-4">
                  <h3 className="h6 fw-bold mb-1">{r.name}</h3>
                  <p className="text-muted small mb-2 flex-grow-1">{r.note}</p>
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
