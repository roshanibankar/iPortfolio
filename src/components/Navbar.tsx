import { useState } from "react"
import { Link } from "react-router-dom"
import "../index.css"

type Props = {
  toggleDarkMode: () => void
  darkMode: boolean
}

export default function Navbar({ toggleDarkMode, darkMode }: Props) {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="navbar">

      {/* Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/writings" onClick={() => setMenuOpen(false)}>Writings</Link>
        <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
        <Link to="/backpacking" onClick={() => setMenuOpen(false)}>Backpacking</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
      </nav>

      {/* Right side controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>

        {/* Dark mode toggle */}
        <button className="dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Hamburger menu */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? "×" : "☰"}
        </div>

      </div>

    </header>
  )
}