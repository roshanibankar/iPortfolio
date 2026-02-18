import { Link } from "react-router-dom";
import "../index.css"; // optional if separating styles

export default function Home() {
  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <div className="brand">Poems</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/poems">Poems</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/backpacking">Backpacking</Link>
            <Link to="/projects">Projects</Link>
          </nav>
        </div>
      </header>

      <main>
        <h1>Welcome.</h1>
        <p>
          This is a quiet corner of the internet — a space for writing,
          wandering, and building.
        </p>

        <p>
          Here you'll find poems, long trails, unfinished ideas,
          and projects in progress.
        </p>
      </main>
    </>
  );
}
