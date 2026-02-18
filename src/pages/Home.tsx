import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import "../index.css";

export default function Home() {
  const dynamicPhrases = [
    "Roshani Bankar.",
    "an architectural designer and an engineer.",
    "a content writer.",
    "a video editor, an artist, cat lover, a backpacking enthusiast.",
  ];

  return (
    <>
      {/* Navbar overlay */}
      <header className="navbar">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/writings">Field Notes</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/backpacking">Backpacking</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>
            Hello, I am
            <span className="typewriter-line">
              <Typewriter
                texts={dynamicPhrases}
                typingSpeed={80}
                deletingSpeed={40}
                pauseTime={1500}
              />
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="home-body">
  <div className="body-grid">
    
    {/* LEFT SIDE */}
    <div className="body-left">
      <h2>Hi there!</h2>
      <p>
        My name is Roshani Bankar. I am currently working on architectural
        design projects and exploring urban planning and avionics. I have a
        strong passion for robotics, reinforcement learning, AI, books, music,
        backpacking and cats.
      </p>

      <p><strong>Currently, I am:</strong></p>

      <ul>
        <li>Working on architectural and urban planning projects</li>
        <li>Experimenting with AI and reinforcement learning applications</li>
        <li>Documenting and sharing ideas about design, tech, and travel</li>
      </ul>
    </div>

    {/* RIGHT SIDE */}
<div className="body-right">
  <h2>Links</h2>
  <div className="contact-icons">
    <a href="https://github.com/roshanibankar" target="_blank" rel="noopener noreferrer">
      <img src="/github.svg" alt="GitHub logo" />
    </a>
    <a href="https://www.youtube.com/@RoshLogs" target="_blank" rel="noopener noreferrer">
      <img src="/youtube.svg" alt="YouTube logo" />
    </a>
    <a href="https://www.instagram.com/roshanibankar._" target="_blank" rel="noopener noreferrer">
      <img src="/instagram.svg" alt="Instagram logo" />
    </a>
  </div>

  <h2>Contact</h2>
  <p>roshanibankar11@gmail.com</p>
</div>

  </div>
</main>


    </>
  );
}
