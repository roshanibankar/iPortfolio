import { useState } from "react"
import { Link } from "react-router-dom"
import "../index.css"

type Props = {
  toggleDarkMode: () => void
  darkMode: boolean
}

export default function Navbar({ toggleDarkMode, darkMode }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = () => setMenuOpen(false)
  const handleToggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <header className="navbar">

      {/* Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        
  <Link to="/" onClick={handleLinkClick} data-text="01 : Home"> Home </Link>
  <span className="nav-separator">|</span>

  <Link to="/projects" onClick={handleLinkClick} data-text="05 : Projects"> Projects</Link>
  <span className="nav-separator">|</span>

  <Link to="/resume" onClick={handleLinkClick} data-text="03 : Resume"> Resume</Link>
  <span className="nav-separator">|</span> 
  
  <Link to="/writings" onClick={handleLinkClick} data-text="02 : Writings"> Writings</Link>
  <span className="nav-separator">|</span> 
  
  <Link to="/travel" onClick={handleLinkClick} data-text="04 : Travel"> Travel</Link>
  
  
</nav>

      {/* Right side controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>

        {/* Dark mode toggle */}
        <button className="dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? "𖤓" : "☾"}
        </button>

        {/* Hamburger menu */}
        <div className="menu-toggle" onClick={handleToggleMenu}>
          {menuOpen ? "×" : "☰"}
        </div>

      </div>

    </header>
  )
}