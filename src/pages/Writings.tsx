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
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
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

// 👇 frontmatter parser
function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { data: {}, content: raw };

  const frontmatter = match[1];
  const content = raw.slice(match[0].length);

  const data: Record<string, string> = {};
  frontmatter.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    data[key.trim()] = rest.join(":").trim();
  });

  return { data, content };
}

export default function Writings() {
  const [writings, setWritings] = useState<Writing[]>([]);
  const [stars, setStars] = useState<Star[]>(() => generateStars());

  useEffect(() => {
    const loadWritings = async () => {
      const files = import.meta.glob("../writings/*.md", { as: "raw" });

      const loaded: Writing[] = [];

      for (const path in files) {
        const raw = await files[path]();
        const { data } = parseFrontmatter(raw);

        const slug =
          path.split("/").pop()?.replace(".md", "") || "";

        loaded.push({
          title: data.title,
          date: data.date,
          type: data.type,
          slug,
        });
      }

      loaded.sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      );

      setWritings(loaded);
    };

    loadWritings();

    const interval = setInterval(() => {
      setStars(generateStars());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="writings-orbit-wrapper">
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

      <div className="orbit-system">
        <div className="orbit orbit-1"><div className="planet" /></div>
        <div className="orbit orbit-2"><div className="planet" /></div>
        <div className="orbit orbit-3"><div className="planet" /></div>
      </div>

      <section>
        <div className="hero-content">
          <h1 className="resume-heading">Writings</h1>
        </div>
      </section>

      <div className="writings-list">
        {writings.map((writing) => (
          <div key={writing.slug}>
            <Link to={`/writings/${writing.slug}`} className="writing-link">
              {writing.title}
            </Link>

            <div className="writing-date">
              {new Date(writing.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}