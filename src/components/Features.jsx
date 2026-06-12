import { features } from '../data/products.js'

export default function Features() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {features.map((f) => (
            <div className="col-md-4" key={f.title}>
              <div className="feature-card p-4 text-center">
                <div style={{ fontSize: '2.4rem' }}>{f.icon}</div>
                <h3 className="h5 fw-bold mt-3">{f.title}</h3>
                <p className="text-muted mb-0 mt-2">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
