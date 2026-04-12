import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Comment.css";
import ReplyForm from "./ReplyForm.jsx";
import Modal from "./Modal";
import CommentActions from "./CommentActions.jsx";

import plusIcon from "../assets/icons/icon-plus.svg";
import minusIcon from "../assets/icons/icon-minus.svg";

function Comment({
  content,
  user,
  currentUser,
  createdAt,
  avatar,
  replies = [],
  addReply,
  commentId,
  updateComment,
  deleteComment,
  updateScore,
  score,
  depth = 0,
}) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const [showModal, setShowModal] = useState(false);

  const isCurrentUser = user?.username === currentUser.username;

  useEffect(() => {
    if (!showModal) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal]);

  useEffect(() => {
    if (!showModal) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  console.log(avatar)

  return (
    <div className="comment">

      <div className="comment-layout">

        <div className="comment-main">

          <div className="comment-header">
            <div className="comment-header-left">
              <img src={avatar}
                alt={user?.username}
                className="comment-avatar" />

              <div className="comment-user-info">
                <strong className="comment-username">{user?.username}</strong>

                {isCurrentUser && (
                  <span className="comment-you">you</span>
                )}
              </div>

              <span className="comment-time">{createdAt}</span>
            </div>

            <div className="comment-actions-desktop">
              <CommentActions
                isCurrentUser={isCurrentUser}
                onReply={() => setIsReplying(!isReplying)}
                onEdit={() => setIsEditing(!isEditing)}
                onDelete={() => setShowModal(true)}
              />
            </div>
          </div>

          {isEditing ? (
            <div className="comment-edit">
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <button
                className="reply-form__button"
                onClick={() => {
                  updateComment(commentId, editedContent);
                  setIsEditing(false);
                }}
              >
                Update
              </button>
            </div>
          ) : (
            <p className="comment-content">{content}</p>
          )}

          <div className="comment-footer">
            <div className="comment-score">
              <button onClick={() => updateScore(commentId, 1)}>
                <img src={plusIcon} alt="plus" />
              </button>

              <div>{score}</div>

              <button onClick={() => updateScore(commentId, -1)}>
                <img src={minusIcon} alt="minus" />
              </button>
            </div>

            <div className="comment-actions">
              <CommentActions
                isCurrentUser={isCurrentUser}
                onReply={() => setIsReplying(!isReplying)}
                onEdit={() => setIsEditing(!isEditing)}
                onDelete={() => setShowModal(true)}
              />
            </div>
          </div>

        </div>

      </div>

      {isReplying && (
        <ReplyForm
          isNested={depth > 0}
          currentUser={currentUser}
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            addReply(commentId, replyContent);
            setReplyContent("");
            setIsReplying(false);
          }}
          buttonText="Reply"
          placeholder={`Reply to ${user?.username}`}
        />
      )}

      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              depth={depth + 1}
              content={`@${reply.user?.username} ${reply.content}`}
              user={reply.user}
              currentUser={currentUser}
              createdAt={reply.createdAt}
              avatar={reply.user.image.png}
              replies={reply.replies || []}
              addReply={addReply}
              commentId={reply.id}
              deleteComment={deleteComment}
              updateComment={updateComment}
              updateScore={updateScore}
              score={reply.score}
            />
          ))}

        </div>
      )}

      {showModal && (
        <Modal
          onCancel={() => setShowModal(false)}
          onConfirm={() => {
            deleteComment(commentId);
            setShowModal(false);
          }}
        />
      )}

    </div>
  );

}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  user: PropTypes.object,
  currentUser: PropTypes.object.isRequired,
  createdAt: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  replies: PropTypes.array,
  addReply: PropTypes.func.isRequired,
  commentId: PropTypes.number.isRequired,
  deleteComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  depth: PropTypes.number,
};

export default Comment;