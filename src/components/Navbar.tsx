import { useState } from "react"
import { Link } from "react-router-dom"
import "../index.css"

type Props = {
  toggleDarkMode: () => void
  darkMode: boolean
}

export default function Navbar({ toggleDarkMode, darkMode }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Explicit functions instead of inline arrow handlers prevent unnecessary re-renders
  const handleLinkClick = () => setMenuOpen(false)
  const handleToggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <header className="navbar">

      {/* Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>|  Home</Link>
        <Link to="/writings" onClick={handleLinkClick}>|  Writings</Link>
        <Link to="/resume" onClick={handleLinkClick}> |   Resume</Link>
        <Link to="/backpacking" onClick={handleLinkClick}> |   Backpacking</Link>
        <Link to="/projects" onClick={handleLinkClick}> |   Projects</Link>
      </nav>

      {/* Right side controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>

        {/* Dark mode toggle */}
        <button className="dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? "𖤓" : "⏾"}
        </button>

        {/* Hamburger menu */}
        <div className="menu-toggle" onClick={handleToggleMenu}>
          {menuOpen ? "×" : "☰"}
        </div>

      </div>

    </header>
  )
}