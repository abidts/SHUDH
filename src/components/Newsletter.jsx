import { useState } from 'react'
import { site, whatsappLink } from '../data/products.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // No backend: open a WhatsApp message so the owner captures the lead.
    window.open(
      whatsappLink(`Hello ${site.name}, please add me to your updates: ${email}`),
      '_blank',
      'noopener,noreferrer',
    )
    setDone(true)
  }

  return (
    <section className="newsletter-band py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-1">Order online, the easy way</h2>
            <p className="mb-0 text-muted">
              Get your favourite Shudh Spices delivered to your doorstep — drop
              your email and we'll keep you posted on fresh stock and offers.
            </p>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="d-flex flex-wrap gap-2">
              <input
                type="email"
                className="form-control flex-grow-1"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ minWidth: 200 }}
              />
              <button type="submit" className="btn btn-spice">
                {done ? 'Thanks! ✓' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
