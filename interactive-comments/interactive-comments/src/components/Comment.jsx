import { useState } from "react";
import PropTypes from "prop-types";
import { getAvatar } from "../utils/getAvatar.js";
import "./Comment.css";

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
}) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const isCurrentUser = username === currentUser.username;

  return (
    <div className="comment">
      <div className="comment-layout">

        {/* HEADER */}
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

          {/* DESKTOP ACTIONS */}
          <div className="comment-actions-desktop">
            {isCurrentUser ? (
              <>
                <button onClick={() => setIsEditing(!isEditing)}>
                  <img src={editIcon} alt="edit" />
                  Edit
                </button>

                <button onClick={() => deleteComment(commentId)}>
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
          </div>
        </div>

        {/* CONTENT */}
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

        {/* FOOTER (MOBILE) */}
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

          {/* MOBILE ACTIONS */}
          <div className="comment-actions">
            {isCurrentUser ? (
              <>
                <button onClick={() => setIsEditing(!isEditing)}>
                  <img src={editIcon} alt="edit" />
                  Edit
                </button>

                <button onClick={() => deleteComment(commentId)}>
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
          </div>

        </div>

        {/* REPLY BOX */}
        {isReplying && (
          <div className="reply-box">
            <textarea
              placeholder={`Reply to ${username}`}
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
            />
            <button
              onClick={() => {
                addReply(commentId, replyContent);
                setReplyContent("");
                setIsReplying(false);
              }}
            >
              Send Reply
            </button>
          </div>
        )}

        {/* REPLIES */}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                key={reply.id}
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

      </div>
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
};

export default Comment;