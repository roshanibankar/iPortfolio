import Typewriter from "../components/Typewriter";
import "../index.css";

export default function Home() {
  const dynamicPhrases = [
    "Roshani Bankar",
    "an architectural designer and an engineer",
    "a content writer",
    "a video editor, an artist, a cat lover, a backpacking enthusiast",
  ];

  return (
    <>


      {/* Hero Section */}
<section className="home-hero">
  <div className="hero-content">
    <h1 style={{ fontWeight: 700, textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
      Hello, I am{" "}
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
        My name is Roshani Bankar. I am currently working on high-energy particle physics and avionics projects. 
        I have a strong passion for architecture and turning circuits into architectural projects. 
        I am a final-year undergrad and have previously worked on robotics SLAM and avionics research.      
      </p>

      <p><strong>Currently, I am:</strong></p>

      <ul>
        <li>Working on hyperspectral payload circuits that convert photons into actionable data </li>
        <li>Competing at architectural and urban planning projects</li>
        <li>Designing and curating the yearbook for my college friends</li>
      </ul>
    </div>

    {/* RIGHT SIDE */}
<div className="body-right">
  <h2>Links</h2>
  <div className="contact-icons">
    <a href="https://github.com/roshanibankar" target="_blank" rel="noopener noreferrer">
      <img src="/iPortfolio/logos/github.svg" alt="GitHub logo" />
    </a>
    <a href="https://www.youtube.com/@RoshLogs" target="_blank" rel="noopener noreferrer">
      <img src="/iPortfolio/logos/youtube.svg" alt="YouTube logo" />
    </a>
    <a href="https://www.instagram.com/roshanibankar._" target="_blank" rel="noopener noreferrer">
      <img src="/iPortfolio/logos/instagram.svg" alt="Instagram logo" />
    </a>
  </div>

  <h2>Contact</h2>
  <div className="contact-icons">
    <img src="/iPortfolio/logos/email.png" alt="Email logo" />
    <p>roshanibankar11@gmail.com</p>
  </div>
</div>

</div>
</main>


    </>
  );
}
