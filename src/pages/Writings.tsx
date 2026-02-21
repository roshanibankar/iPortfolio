import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../index.css";

interface Writing {
  title: string;
  date: string;
  slug: string;
  type: string;
}

export default function Writings() {
  const [writings, setWritings] = useState<Writing[]>([]);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

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

  const openWriting = async (slug: string, title: string) => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}writings/${slug}.md`);
      const text = await res.text();
      setSelectedTitle(title);
      setSelectedContent(text);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Failed to load writing:", err);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="hero-content">
          <h1 className="resume-heading" >Writings</h1>
        </div>
      </section>

      {/* List or Content */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        {!selectedContent ? (
          writings.map((writing) => (
            <div key={writing.slug} style={{ marginBottom: "0.8rem" }}>
              <button
                onClick={() => openWriting(writing.slug, writing.title)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#1a4dff",
                  fontFamily: "'Ivy Mode', serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textAlign: "left",
                  letterSpacing: "0.1em",
                  wordSpacing: "0.2em",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {writing.title}
              </button>
              <div style={{ fontSize: "0.9rem", color: "#888" }}>{writing.date}</div>
            </div>
          ))
        ) : (
          <div>
            <button
              onClick={() => setSelectedContent(null)}
              style={{
                marginBottom: "1rem",
                background: "none",
                border: "none",
                color: "#1a4dff",
                fontWeight: 500,
                letterSpacing: "0.1em",
                wordSpacing: "0.2em",
                cursor: "pointer",
              }}
            >
              ← Back
            </button>
            <h2 className="writing-page-title">{selectedTitle}</h2>
             <div className="writing-page"><ReactMarkdown children={selectedContent} /></div>
          </div>
        )}
      </div>
    </>
  );
}