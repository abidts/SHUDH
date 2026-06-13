import { aboutPoints, aboutStory, homepage, site } from '../data/products.js'

export default function About() {
  return (
    <section id="about" className="about py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="section-title fw-bold text-start">About {site.name}</h2>
            <p className="lead mt-4">
              Serving local buyers and wider orders with a quality-first approach.
            </p>
            {aboutStory.map((para) => (
              <p className="text-muted" key={para.slice(0, 24)}>
                {para}
              </p>
            ))}
            <div className="mt-4">
              {aboutPoints.map((point) => (
                <div className="about-point" key={point}>
                  <span className="tick">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="about-frame">
              <img src={homepage.aboutImage} alt="Kashmiri spices" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
