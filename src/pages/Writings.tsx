import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

interface Writing {
  title: string;
  date: string;
  slug: string;
  type: string;
}

export default function Writings() {
  const [writings, setWritings] = useState<Writing[]>([]);

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
  }, []);

  return (
    <>
      {/* Hero Section */}
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
    </>
  );
}