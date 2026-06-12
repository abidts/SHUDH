import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import CategoryTicker from '../components/CategoryTicker.jsx'
import CategoryShowcase from '../components/CategoryShowcase.jsx'
import Stats from '../components/Stats.jsx'
import Newsletter from '../components/Newsletter.jsx'

// Lean landing page. Products, About, Recipes and Contact each live on their
// own dedicated route.
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CategoryTicker />
      <CategoryShowcase />
      <Stats />
      <Newsletter />
    </main>
  )
}
