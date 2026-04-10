
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

    setComments((prev) => [newItem, ...prev]);
    setNewComment("");
  };

  const addReplyRecursive = (commentsArray, parentId, newReply) => {
    return commentsArray.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply],
        };
      }

      return {
        ...comment,
        replies: addReplyRecursive(comment.replies || [], parentId, newReply),
      };
    });
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

    setComments((prev) =>
      addReplyRecursive(prev, parentId, newReply)
    );
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

    setComments((prev) => removeComment(prev));
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

    setComments((prev) => update(prev));
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

    setComments((prev) => update(prev));
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
            depth={0}
            content={comment.content}
            user={comment.user}
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

      <ReplyForm
        currentUser={data.currentUser}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          handleAddComment();
        }}
      />

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/sylcym/frontend-mentor-challenges/tree/main/interactive-comments/interactive-comments"
          target="_blank"
          rel="noreferrer"
        >
          Sylwia
        </a>
        .
      </div>
    </>
  );
}

export default App;
