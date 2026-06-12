import { useState } from 'react'
import { site, whatsappLink } from '../data/products.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const text = `Hello ${site.name}!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold">Get in Touch</h2>
          <p className="text-muted mt-3">
            Serving local buyers and wider orders with a quality-first approach.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="feature-card p-4">
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={update}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={update}
                  required
                />
              </div>
              <button type="submit" className="btn btn-spice">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="contact-info-card p-4 h-100">
              <h3 className="h5 fw-bold">{site.name}</h3>
              <p className="mb-4 opacity-75">
                For quick product checks, bulk discussions, and direct support.
              </p>
              <p className="mb-2">📍 {site.address}</p>
              <p className="mb-2">
                📞 <a href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`}>{site.phoneDisplay}</a>
              </p>
              <p className="mb-2">
                ✉️ <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <a
                className="btn btn-wa mt-3"
                href={whatsappLink(`Hello ${site.name}, I'd like to get in touch.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
