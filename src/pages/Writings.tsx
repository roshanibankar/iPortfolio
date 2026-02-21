import { useEffect, useState } from "react";
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

  const openWritingInNewTab = async (slug: string, title: string) => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}writings/${slug}.md`);
      const text = await res.text();

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = ""; // clean slate

      const newWindow = window.open("", "_blank");
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>${title}</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 2rem; max-width: 800px; margin: auto; line-height: 1.6; }
                h1, h2, h3 { color: #1a4dff; }
                a { color: #1a4dff; text-decoration: none; }
                pre { background: #f5f5f5; padding: 1rem; overflow-x: auto; }
                code { background: #eee; padding: 0.2rem 0.4rem; border-radius: 3px; }
              </style>
            </head>
            <body>
              <h1>${title}</h1>
              <div>${text
                .replace(/\n/g, "<br>") // simple line breaks
                .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // bold
                .replace(/\*(.*?)\*/g, "<i>$1</i>")}</div>
            </body>
          </html>
        `);
        newWindow.document.close();
      }
    } catch (err) {
      console.error("Failed to load writing:", err);
    }
  };

  return (
    <><>{/* Hero Section */}
      <section>
        <div className="hero-content">
          <h1 className="resume-heading">Writings</h1>
        </div>
      </section>
    </><div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        {writings.map((writing) => (
          <div key={writing.slug} style={{ marginBottom: "0.8rem" }}>
            <button
              onClick={() => openWritingInNewTab(writing.slug, writing.title)}
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
        ))}
      </div></>
  );
}