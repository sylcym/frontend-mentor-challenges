import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAvatar } from "../utils/getAvatar.js";
import "./Comment.css";
import ReplyForm from "./ReplyForm.jsx";
import Modal from "./Modal";
import CommentActions from "./CommentActions.jsx";

import replyIcon from "../assets/images/icon-reply.svg";
import editIcon from "../assets/images/icon-edit.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

function Comment({
  content,
  username,
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

  const isCurrentUser = username === currentUser.username;

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

  return (
    <div className="comment">

      <div className="comment-layout">

        <div className="comment-main">

          <div className="comment-header">
            <div className="comment-header-left">
              <img src={avatar} alt={username} className="comment-avatar" />

              <div className="comment-user-info">
                <strong className="comment-username">{username}</strong>

                {isCurrentUser && (
                  <span className="comment-you">you</span>
                )}
              </div>

              <span className="comment-time">{createdAt}</span>
            </div>

            {/* <div className="comment-actions-desktop">
              {isCurrentUser ? (
                <>
                  <button onClick={() => setIsEditing(!isEditing)}>
                    <img src={editIcon} alt="edit" />
                    Edit
                  </button>

                  <button onClick={() => setShowModal(true)}>
                    <img src={deleteIcon} alt="delete" />
                    Delete
                  </button>
                </>
              ) : (
                <button onClick={() => setIsReplying(!isReplying)}>
                  <img src={replyIcon} alt="reply" />
                  Reply
                </button>
              )}
            </div> */}
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
                onClick={() => {
                  updateComment(commentId, editedContent);
                  setIsEditing(false);
                }}
              >
                Save
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

            {/* <div className="comment-actions">
              {isCurrentUser ? (
                <>
                  <button onClick={() => setIsEditing(!isEditing)}>
                    <img src={editIcon} alt="edit" />
                    Edit
                  </button>

                  <button onClick={() => setShowModal(true)}>
                    <img src={deleteIcon} alt="delete" />
                    Delete
                  </button>
                </>
              ) : (
                <button onClick={() => setIsReplying(!isReplying)}>
                  <img src={replyIcon} alt="reply" />
                  Reply
                </button>
              )}
            </div> */}
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

      {/* ✅ REPLY FORM JEST NA ZEWNĄTRZ COMMENT-HEAD/MAIN */}
      {isReplying && (
        <ReplyForm
          isNested={depth > 0}
          currentUser={currentUser}
          value={replyContent}
          onChange={setReplyContent}
          onSubmit={(e) => {
            e.preventDefault();
            addReply(commentId, replyContent);
            setReplyContent("");
            setIsReplying(false);
          }}
          buttonText="Reply"
          placeholder={`Reply to ${username}`}
        />
      )}

      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              depth={depth + 1}
              content={`@${reply.user?.username} ${reply.content}`}
              username={reply.user?.username || "Unknown"}
              currentUser={currentUser}
              createdAt={reply.createdAt}
              avatar={getAvatar(reply.user?.image?.png)}
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
  username: PropTypes.string.isRequired,
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