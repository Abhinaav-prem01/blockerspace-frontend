function Post({ post, onLike }) {
  const storedUser = localStorage.getItem("currentUser");
const currentUser = storedUser ? JSON.parse(storedUser) : null;

if (!currentUser) return null;


  const alreadyLiked =
    post.likedBy.includes(currentUser.email);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: 10,
        marginBottom: 10,
      }}
    >
      <h4>{post.username}</h4>
      <p>{post.content}</p>

      <button onClick={onLike}>
        {alreadyLiked ? "💔 Unlike" : "❤️ Like"}{" "}
        ({post.likedBy.length})
      </button>
    </div>
  );
}

export default Post;



