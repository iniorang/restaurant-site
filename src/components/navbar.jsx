import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const baseLink = "px-3 py-2 rounded-md text-md font-medium"
const inactiveLink = "hover:text-accent"
const activeLink = "text-accent-dark"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-background fixed top-0 w-full z-50 py-3 ">
        <div className="mx-auto px-2">
          <div className="flex h-16 items-center justify-between md:justify-center">
            <div className="flex items-center justify-between">
              {/* Desktop Menu links */}
              <div className="hidden justify-center gap-10 items-center md:flex space-x-2">
                <div>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `${baseLink} ${isActive ? activeLink : inactiveLink}`
                    }>
                    Home
                  </NavLink>
                </div>

                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : inactiveLink}`
                  }
                >
                  About Us
                </NavLink>
                <NavLink to="/">
                  <img
                    src="/assets/img/logo2.png"
                    alt="Warung Hati"
                    className="object-fill h-20 w-auto"
                  />
                </NavLink>

                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : inactiveLink}`
                  }
                >
                  Menu
                </NavLink>

                <NavLink
                  to="/mealplans"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : inactiveLink}`
                  }
                >
                  Meal Plans
                </NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              end
              className={({ isActive }) =>
                `block ${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/aboutus"
              className={({ isActive }) =>
                `block ${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/menu"
              className={({ isActive }) =>
                `block ${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Menu
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/mealplans"
              className={({ isActive }) =>
                `block ${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Meal Plans
            </NavLink>
          </div>
        )}
      </nav>

    </header>
  )
}