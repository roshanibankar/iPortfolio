import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../index.css";

// 👇 same parser
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

export default function WritingPage() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadWriting = async () => {
      if (!slug) return;

      const files = import.meta.glob("../writings/*.md", { as: "raw" });

      const match = Object.entries(files).find(([path]) =>
        path.includes(`${slug}.md`)
      );

      if (!match) {
        console.error("Not found:", slug);
        return;
      }

      const raw = await match[1]();
      const { data, content } = parseFrontmatter(raw);

      setTitle(data.title || "");
      setDate(data.date || "");
      setContent(content);
    };

    loadWriting();
  }, [slug]);

  return (
    <div className="writing-page-container">
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      <h1 className="writing-page-title">{title}</h1>

      {date && (
        <div className="writing-date">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      )}

      <div className="writing-page">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}