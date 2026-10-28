import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'

import MainPage from './pages/MainPage'
import MenuPage from './pages/menuPage'
import AboutPage from './pages/aboutPage'


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
