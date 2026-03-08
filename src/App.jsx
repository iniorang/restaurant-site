import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import MainPage from './pages/MainPage'
import Footer from './components/footer'

function AboutPage() {
  return (
    <main>
      <section className="page-section">
        <h1>About Us</h1>
        <p>
          In Bahasa, “Hati” means heart. We pour our hearts into every dish we create.
        </p>
      </section>
    </main>
  )
}

function MenuPage() {
  return (
    <main>
      <section className="page-section">
        <h1>Menu</h1>
        <p>Explore Warung Hati&apos;s greatest creations and signature dishes.</p>
      </section>
    </main>
  )
}

function MealPlansPage() {
  return (
    <main>
      <section className="page-section">
        <h1>Meal Plans</h1>
        <p>
          Selection of healthy meals to support immune system, stamina, and overall wellness.
        </p>
      </section>
    </main>
  )
}

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/mealplans" element={<MealPlansPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
