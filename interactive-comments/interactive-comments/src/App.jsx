import data from "./data/data.json";
import Comment from "./components/Comment";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      {data.comments.map((comment) => (
        <Comment
          key={comment.id}
          content={comment.content}
          username={comment.user?.username || "Unknown"}
          createdAt={comment.createdAt}
          replies={comment.replies || []}
        />
      ))}
    </div>
  );
}

export default App;
