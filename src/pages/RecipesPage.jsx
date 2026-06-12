import PageBanner from '../components/PageBanner.jsx'
import Recipes from '../components/Recipes.jsx'

export default function RecipesPage() {
  return (
    <main>
      <PageBanner
        title="Recipes For Your Soul"
        subtitle="The Kashmiri dishes our spices were made for."
      />
      <Recipes />
    </main>
  )
}
