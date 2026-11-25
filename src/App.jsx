import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'

import MainPage from './pages/MainPage'
import MenuPage from './pages/menuPage'
import AboutPage from './pages/aboutPage'
import PlansPage from './pages/plansPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/mealplans" element={<PlansPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
