import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import CategoryTicker from './components/CategoryTicker.jsx'
import Products from './components/Products.jsx'
import Stats from './components/Stats.jsx'
import BuyOnline from './components/BuyOnline.jsx'
import Recipes from './components/Recipes.jsx'
import About from './components/About.jsx'
import Newsletter from './components/Newsletter.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CategoryTicker />
        <Products />
        <Stats />
        <BuyOnline />
        <About />
        <Recipes />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
