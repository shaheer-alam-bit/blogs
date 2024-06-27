import "./App.css";
import Blog from "./components/Blog";

function App() {
  const blog_1 = {
    title: "Exploring the Wonders of AI",
    author: "Jane Doe",
    published_date: "2024-03-15",
    tags: ["AI", "Technology", "Future"],
    description:
      "A deep dive into the advancements and potential of artificial intelligence in various industries.",
  };

  const blog_2 = {
    title: "Healthy Eating: Tips and Recipes",
    author: "John Smith",
    published_date: "2024-05-20",
    tags: ["Health", "Nutrition", "Recipes"],
    description:
      "Discover easy and delicious recipes that promote a healthy lifestyle.",
  };

  const blog_3 = {
    title: "Travel Guide: Top Destinations for 2024",
    author: "Alice Johnson",
    published_date: "2024-01-10",
    tags: ["Travel", "Adventure", "Guide"],
    description:
      "An exciting guide to the must-visit travel destinations of 2024.",
  };

  const blog_4 = {
    title: "Mastering React: Best Practices",
    author: "Mike Brown",
    published_date: "2024-06-05",
    tags: ["React", "JavaScript", "Web Development"],
    description:
      "Learn the best practices for building efficient and scalable React applications.",
  };

  const blog_5 = {
    title: "The Future of Renewable Energy",
    author: "Emily White",
    published_date: "2024-02-25",
    tags: ["Renewable Energy", "Environment", "Sustainability"],
    description:
      "An insightful look into the latest trends and innovations in renewable energy.",
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          margin: "0px",
        }}
      >
        Blogs
      </h1>
        <Blog
          title={blog_1.title}
          author={blog_1.author}
          published_date={blog_1.published_date}
          tags={blog_1.tags}
          description={blog_1.description}
        />
        <Blog
          title={blog_2.title}
          author={blog_2.author}
          published_date={blog_2.published_date}
          tags={blog_2.tags}
          description={blog_2.description}
        />
        <Blog
          title={blog_3.title}
          author={blog_3.author}
          published_date={blog_3.published_date}
          tags={blog_3.tags}
          description={blog_3.description}
        />
        <Blog
          title={blog_4.title}
          author={blog_4.author}
          published_date={blog_4.published_date}
          tags={blog_4.tags}
          description={blog_4.description}
        />
        <Blog
          title={blog_5.title}
          author={blog_5.author}
          published_date={blog_5.published_date}
          tags={blog_5.tags}
          description={blog_5.description}
        />
      </div>
  );
}

export default App;
