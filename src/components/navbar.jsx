import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const baseLink = "site-nav__link"
const inactiveLink = ""
const activeLink = "is-active"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="site-nav">
        <div className="site-nav__inner">
          <div className="site-nav__desktop">
            <NavLink to="/" end className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}>
              Home
            </NavLink>
            <NavLink to="/aboutus" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}>
              About Us
            </NavLink>
            <NavLink to="/" aria-label="Warung Hati home">
              <img src="/assets/img/logo2.png" alt="Warung Hati" className="site-nav__logo" />
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}>
              Menu
            </NavLink>
            <NavLink to="/mealplans" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}>
              Meal Plans
            </NavLink>
            </div>

          <div className="site-nav__mobile-toggle">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="site-nav__menu-button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              type="button"
            >
              <svg className="site-nav__menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="site-nav__mobile-menu">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              end
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/aboutus"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/menu"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Menu
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/mealplans"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Meal Plans
            </NavLink>
          </div>
        )}
        </div>
      </nav>

    </header>
  )
}