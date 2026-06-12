import { retailers, site, whatsappLink } from '../data/products.js'

export default function BuyOnline() {
  return (
    <section id="buy" className="buy-online py-5">
      <div className="container text-center">
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {retailers.map((r) => (
            <a
              key={r.name}
              className="store-btn"
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="store-emoji">{r.emoji}</span>
              <span className="store-name">{r.name}</span>
            </a>
          ))}
          <a
            className="store-btn store-btn-wa"
            href={whatsappLink(`Hello ${site.name}, I'd like to order directly.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="store-emoji">💬</span>
            <span className="store-name">Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
