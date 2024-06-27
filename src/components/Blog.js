const Blog = ({ title, author, published_date, tags, description }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(145deg, #f0f0f0, #fafafa)",
        border: "1px solid #ddd",
        borderRadius: "15px",
        padding: "25px",
        margin: "25px",
        maxWidth: "600px",
        boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease-in-out",
        alignItems: "center",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <h2 style={{ color: "#333", marginBottom: "15px", fontFamily: "'Arial', sans-serif", letterSpacing: "1px" }}>{title}</h2>
      <p style={{ fontStyle: "italic", color: "#777", marginBottom: "10px" }}>By: {author}</p>
      <p style={{ color: "#999", marginBottom: "15px" }}>Published Date: {published_date}</p>
      <div style={{ marginBottom: "15px" }}>
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              backgroundColor: "#007BFF",
              color: "#fff",
              padding: "7px 15px",
              borderRadius: "20px",
              marginRight: "7px",
              marginBottom: "7px",
              fontSize: "0.9em",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <p style={{ color: "#555", lineHeight: "1.8", fontFamily: "'Georgia', serif" }}>{description}</p>
    </div>
  );
};

export default Blog;
