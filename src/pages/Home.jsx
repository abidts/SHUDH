import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import CategoryTicker from '../components/CategoryTicker.jsx'
import Stats from '../components/Stats.jsx'
import BuyOnline from '../components/BuyOnline.jsx'
import About from '../components/About.jsx'
import Recipes from '../components/Recipes.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Contact from '../components/Contact.jsx'

// Home page intentionally omits the full Products listing — products live on
// their own /products page. The CategoryTicker acts as a teaser/link to it.
export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CategoryTicker />
      <Stats />
      <BuyOnline />
      <About />
      <Recipes />
      <Newsletter />
      <Contact />
    </main>
  )
}
