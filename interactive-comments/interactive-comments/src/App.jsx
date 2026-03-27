import { useState, useEffect } from "react";
import data from "./data/data.json";
import Comment from "./components/Comment";
import { getAvatar } from "./utils/getAvatar.js";

function App() {
  // const [comments, setComments] = useState(data.comments);
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem("comments");
      return saved ? JSON.parse(saved) : data.comments;
    } catch (error) {
      return data.comments;
    }
  });
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newItem = {
      id: Date.now(),
      content: newComment,
      createdAt: "just now",
      score: 0,
      user: data.currentUser,
      replies: [],
    };

    setComments([newItem, ...comments]);
    setNewComment("");
  };

  const addReply = (parentId, replyContent) => {
    if (!replyContent.trim()) return;

    const newReply = {
      id: Date.now(),
      content: replyContent,
      createdAt: "just now",
      score: 0,
      user: data.currentUser,
      replies: [],
    };

    const updatedComments = comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }
      return comment;
    });

    setComments(updatedComments);
  };

  const deleteComment = (id) => {
    const removeComment = (commentsArray) => {
      return commentsArray
        .filter((comment) => comment.id !== id)
        .map((comment) => ({
          ...comment,
          replies: removeComment(comment.replies || []),
        }));
    };

    setComments(removeComment(comments));
  };


  const updateComment = (id, newContent) => {
    const update = (commentsArray) => {
      return commentsArray.map((comment) => {
        if (comment.id === id) {
          return { ...comment, content: newContent };
        }
        return {
          ...comment,
          replies: update(comment.replies || []),
        };
      });
    };

    setComments(update(comments));
  };

  const updateScore = (id, delta) => {
    const update = (arr) => {
      return arr.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            score: item.score + delta,
          };
        }

        return {
          ...item,
          replies: update(item.replies || []),
        };
      });
    };

    setComments(update(comments));
  };

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            content={comment.content}
            username={comment.user?.username || "Unknown"}
            createdAt={comment.createdAt}
            avatar={getAvatar(comment.user?.image?.png)}
            replies={comment.replies || []}
            addReply={addReply}
            commentId={comment.id}
            deleteComment={deleteComment}
            updateComment={updateComment}
            updateScore={updateScore}
            score={comment.score}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <textarea
          style={{ width: "100%", minHeight: "80px", marginBottom: "10px" }}
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleAddComment();
            }
          }}
        />
        <button
          onClick={handleAddComment}
          disabled={!newComment.trim()}
        >
          Send
        </button>
      </div>
    </>
  );
}

export default App;
