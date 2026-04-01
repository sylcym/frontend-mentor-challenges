import { useState, useEffect } from "react";
import data from "./data/data.json";
import Comment from "./components/Comment";
import { getAvatar } from "./utils/getAvatar.js";
import "./App.css";
import ReplyForm from "./components/ReplyForm";


function App() {
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

    setComments(prev => [newItem, ...prev]);
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
      <div className="app-container">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            content={comment.content}
            username={comment.user?.username || "Unknown"}
            createdAt={comment.createdAt}
            currentUser={data.currentUser}
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
      {/* <form
        className="app-input"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddComment();
        }}
      > */}
      <ReplyForm
        currentUser={data.currentUser}
        value={newComment}
        onChange={setNewComment}
        onSubmit={(e) => {
          e.preventDefault();
          handleAddComment();
        }}
      />
      <img
        src={getAvatar(data.currentUser.image.png)}
        alt="current user"
        className="app-avatar"
      />

      <textarea
        id="new-comment"
        name="comment"
        className="app-textarea"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />

      <button
        className="app-button"
        type="submit"
        disabled={!newComment.trim()}
      >
        Send
      </button>
    </>
  );
}

export default App;
