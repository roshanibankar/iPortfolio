import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

interface Writing {
  title: string;
  date: string;
  slug: string;
  type: string;
}

interface Star {
  id: number;       // unique key
  top: string;      // "50%"
  left: string;     // "20%"
  size: string;     // "1.5rem"
  delay: string;    // "2s" random animation delay
}

const STAR_COUNT = 30;

function generateStars(): Star[] {
  return Array.from({ length: STAR_COUNT }).map(() => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${1 + Math.random() * 2}rem`,
    delay: `${Math.random() * 4}s`,
  }));
}

export default function Writings() {
  const [writings, setWritings] = useState<Writing[]>([]);
  const [stars, setStars] = useState<Star[]>(() => generateStars());

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}writings/writings.json`)
      .then((res) => res.json())
      .then((data) => {
        data.sort(
          (a: Writing, b: Writing) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setWritings(data);
      })
      .catch((err) => console.error("Failed to load writings:", err));

    // Re-generate stars every 4 seconds (out-of-sync fade)
    const interval = setInterval(() => {
      setStars(generateStars());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="writings-orbit-wrapper">
      {/* Stars Layer */}
      <div className="star-layer">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              fontSize: star.size,
              animationDelay: star.delay,
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Orbit system */}
      <div className="orbit-system">
        <div className="orbit orbit-1"><div className="planet" /></div>
        <div className="orbit orbit-2"><div className="planet" /></div>
        <div className="orbit orbit-3"><div className="planet" /></div>
      </div>

      {/* Hero */}
      <section>
        <div className="hero-content">
          <h1 className="resume-heading">Writings</h1>
        </div>
      </section>

      {/* Writings List */}
      <div className="writings-list">
        {writings.map((writing) => (
          <div key={writing.slug}>
            <Link to={`/writings/${writing.slug}`} className="writing-link">
              {writing.title}
            </Link>
            <div className="writing-date">{writing.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}