import "../index.css";

const blogPosts = [
  { title: "Blog1", link: "/iPortfolio/blog/maybe-i-found-him.md", date: "Feb 28, 2023" },
  { title: "Blog2", link: "/blog/backpacking-patagonia", date: "Jan 25, 2026" },
  { title: "Blog3", link: "/blog/ai-architecture", date: "Dec 10, 2025" },
];

export default function Blog() {
  return (
    <div className="blog-page">

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1 className="blog-heading">Blog & Poems</h1>
        </div>
      </section>

      {/* Blog List */}
      <main className="blog-list">
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-post">
            <a href={post.link} className="blog-title">{post.title}</a>
            <span className="blog-date">{post.date}</span>
          </article>
        ))}
      </main>

    </div>
  );
}
