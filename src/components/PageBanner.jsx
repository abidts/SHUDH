// Shared red banner header used at the top of every sub-page.
export default function PageBanner({ title, subtitle }) {
  return (
    <header className="page-banner text-center">
      <div className="container">
        <h1 className="fw-bold">{title}</h1>
        {subtitle && <p className="lead mb-0">{subtitle}</p>}
      </div>
    </header>
  )
}
