import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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

      {/* Hamburger for mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "×" : "☰"}
      </div>
    </header>
  );
}