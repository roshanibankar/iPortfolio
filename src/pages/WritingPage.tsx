import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../index.css";

interface Writing {
  title: string;
  date: string;
  slug: string;
  type: string;
}

export default function WritingPage() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadWriting = async () => {
      if (!slug) return;

      try {
        // Fetch metadata
        const metaRes = await fetch(`${import.meta.env.BASE_URL}writings/writings.json`);
        const data: Writing[] = await metaRes.json();
        const writing = data.find(w => w.slug === slug);
        if (writing) {
          setTitle(writing.title);
          setDate(writing.date);
        }

        // Fetch markdown content
        const mdRes = await fetch(`${import.meta.env.BASE_URL}writings/${slug}.md`);
        const md = await mdRes.text();
        setContent(md); // raw Markdown
      } catch (err) {
        console.error(err);
      }
    };

    loadWriting();
  }, [slug]);

  return (
    <div className="writing-page-container">
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>

      <h1 className="writing-page-title">{title}</h1>
      {date && <div className="writing-date">{date}</div>}

      {/* Markdown renders safely */}
      <div className="writing-page">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}