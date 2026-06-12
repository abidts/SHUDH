import PageBanner from '../components/PageBanner.jsx'
import Products from '../components/Products.jsx'

export default function ProductsPage() {
  return (
    <main>
      <PageBanner
        title="Our Products"
        subtitle="Premium Kashmiri spices & dry fruits — browse by category."
      />
      <Products />
    </main>
  )
}
