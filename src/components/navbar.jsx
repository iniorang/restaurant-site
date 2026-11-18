import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const baseLink = "px-3 py-2 rounded-md text-md font-medium transition-colors hover:text-apple-red-hover hover:cursor-pointer"
const inactiveLink = "hover:text-apple-red-hover"
const activeLink = "text-apple-red"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <nav className="bg-apple-cream fixed top-0 w-full z-20 py-3 shadow-xs">
        <div className="p-2 pr-2 lg:pr-0">
          <div className="flex h-16 items-center justify-between lg:justify-center">
            <div className="hidden justify-center gap-10 items-center lg:flex space-x-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : inactiveLink}`
                }
              >
                Home
              </NavLink>

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
            <div className="flex w-full items-center justify-between lg:hidden">
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                <img
                  src="/assets/img/logo2.png"
                  alt="Warung Hati"
                  className="object-fill h-18 w-auto"
                />
              </NavLink>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
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
      </nav>
      <aside
        id="mobile-navigation"
        className={`fixed top-[104px] bottom-0 right-0 w-full bg-apple-cream z-10 flex flex-col justify-center items-center space-y-6 px-6 text-center transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavLink
          onClick={() => setIsOpen(false)}
          to="/"
          end
          className={({ isActive }) =>
            `text-2xl ${baseLink} ${isActive ? activeLink : inactiveLink}`
          }
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          to="/aboutus"
          className={({ isActive }) =>
            `text-2xl ${baseLink} ${isActive ? activeLink : inactiveLink}`
          }
        >
          About Us
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          to="/menu"
          className={({ isActive }) =>
            `text-2xl ${baseLink} ${isActive ? activeLink : inactiveLink}`
          }
        >
          Menu
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          to="/mealplans"
          className={({ isActive }) =>
            `text-2xl ${baseLink} ${isActive ? activeLink : inactiveLink}`
          }
        >
          Meal Plans
        </NavLink>
      </aside>
    </header>
  )
}