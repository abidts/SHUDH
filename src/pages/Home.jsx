import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import CategoryTicker from '../components/CategoryTicker.jsx'
import Stats from '../components/Stats.jsx'
import Newsletter from '../components/Newsletter.jsx'

// Lean landing page. Products, About, Recipes, Buy Online and Contact each
// live on their own dedicated route.
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CategoryTicker />
      <Stats />
      <Newsletter />
    </main>
  )
}
