import { stats } from '../data/products.js'

export default function Stats() {
  return (
    <section className="stats-band py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-white">Rooted in Kashmir</h2>
          <p className="text-white-50 mb-0">
            A taste of our valley — pure, honest, and made to be enjoyed.
          </p>
        </div>
        <div className="row g-4 text-center">
          {stats.map((s) => (
            <div className="col-6 col-lg-3" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
