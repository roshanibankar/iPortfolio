import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/writings">Field Notes</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/backpacking">Backpacking</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
}
