import Products from '../components/Products.jsx'

export default function ProductsPage() {
  return (
    <main>
      <header className="page-banner text-center">
        <div className="container">
          <h1 className="fw-bold">Our Products</h1>
          <p className="lead mb-0">
            Premium Kashmiri spices &amp; dry fruits — browse by category.
          </p>
        </div>
      </header>
      <Products />
    </main>
  )
}
