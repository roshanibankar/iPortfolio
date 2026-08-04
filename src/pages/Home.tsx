import Typewriter from "../components/Typewriter";
import "../index.css";

type Props = {
  darkMode: boolean;
};

export default function Home({ darkMode }: Props) {
  const dynamicPhrases = [
    "Roshani Bankar",
    "an engineer & an architectural designer ",
    "a content writer",
    "a video editor, an artist, a cat lover, a travel enthusiast",
  ];

  // Icon paths based on dark mode
  const icons = {
    github: darkMode ? "/iPortfolio/logos/github-white.png" : "/iPortfolio/logos/github.svg",
    youtube: darkMode ? "/iPortfolio/logos/youtube-app-white.png" : "/iPortfolio/logos/youtube.svg",
    instagram: darkMode ? "/iPortfolio/logos/insta-white.png" : "/iPortfolio/logos/instagram.svg",
    email: darkMode ? "/iPortfolio/logos/email-white-icon.png" : "/iPortfolio/logos/email.png",
  };

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <h1 style={{ fontWeight: 700, textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
            Hello, I am{" "}
            <span className="typewriter-line" style={{ fontWeight: 900 }}>
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
            <h2><strong>Hi there!</strong></h2>
            <p>
              My name is Roshani Bankar. I am currently working on avionics projects. 
              I have a strong passion for building architecture, landscape and urban planning projects. 
              I am a final-year undergrad and have previously worked on robotics SLAM and avionics research. 
              And if you plan to build structures and circuits that merge art & tech then we should definitely connect!
            </p>

            <p><strong>Currently, I am:</strong></p>
            <ul>
              <li>Working on avionics hardware and software </li>
              <li>Competing at architectural competitions</li>
              <p>


              </p>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="body-right">
            <h2>Links</h2>
            <div className="contact-icons">
              <a href="https://github.com/roshanibankar" target="_blank" rel="noopener noreferrer">
                <img src={icons.github} alt="GitHub logo" />
              </a>
              <a href="https://www.youtube.com/@RoshLogs" target="_blank" rel="noopener noreferrer">
                <img src={icons.youtube} alt="YouTube logo" />
              </a>
              <a href="https://www.instagram.com/roshanibankar._" target="_blank" rel="noopener noreferrer">
                <img src={icons.instagram} alt="Instagram logo" />
              </a>
            </div>

            <h2>Contact</h2>
            <div className="contact-icons">
              <img src={icons.email} alt="Email logo" />
              <p>roshanibankar11@gmail.com</p>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: "20px 0", marginTop: "100px" }} className="home-body">
        <p>reality is a draft until i design it :)) </p>
        <p>&copy; Roshani Bankar 2026</p>
      </footer>
      <footer>
        <div className="footer-wave">
          <img src="/iPortfolio/logos/footer-wavez.svg" alt="decorative wave" />
        </div>
      </footer> 
    </>
  );
}
