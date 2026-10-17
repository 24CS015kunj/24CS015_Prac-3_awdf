import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavBar({ darkMode, setDarkMode }) {
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Kunj Desai
        </Link>

        <nav className="nav-menu">
          <Link
            to="/"
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </nav>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  )
}

export default NavBar
