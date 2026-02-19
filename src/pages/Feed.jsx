import { useEffect, useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const token = localStorage.getItem("token");

  // Fetch posts
  const fetchPosts = async () => {
    try {
      const res = await fetch("https://blockerspace2.onrender.com/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create post
  const handlePost = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Login first!");
      return;
    }

    try {
      const res = await fetch("https://blockerspace2.onrender.com/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ content }),
      });

      if (res.ok) {
        setContent("");
        fetchPosts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Like post
  const handleLike = async (id) => {
    if (!token) {
      alert("Login first!");
      return;
    }

    try {
      const res = await fetch(
        `https://blockerspace2.onrender.com/api/posts/${id}/like`,
        {
          method: "PUT",
          headers: {
            Authorization: token,
          },
        }
      );

      if (res.ok) {
        fetchPosts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>BlockerSpace Feed</h2>

      <form onSubmit={handlePost}>
        <textarea
          placeholder="Write something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <br />
        <button type="submit">Post</button>
      </form>

      <hr />

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <p>{post.content}</p>
            <p>Likes: {post.likes}</p>
            <button onClick={() => handleLike(post._id)}>Like</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Feed;

