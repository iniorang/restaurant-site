import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function HomePage() {
  return (
    <main>
      <section className="page-section">
        <h1>Warung Hati</h1>
        <p>
          The Authentic Indonesia’s Heritage Cuisine with Organic and Natural Ingredients.
        </p>
      </section>
    </main>
  )
}

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
      <header className="main-header">
        <nav className="nav-bar">
          <div className="nav-brand">Warung Hati</div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/mealplans">Meal Plans</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/mealplans" element={<MealPlansPage />} />
      </Routes>

      <footer className="main-footer">
        <p>© Warung Hati.</p>
      </footer>
    </div>
  )
}

export default App
