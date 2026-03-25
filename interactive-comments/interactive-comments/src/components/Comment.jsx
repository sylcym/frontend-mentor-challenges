import { useState } from "react";
import PropTypes from "prop-types";
import { getAvatar } from "../utils/getAvatar.js";

function Comment({ content, username, createdAt, avatar, replies = [], addReply, commentId }) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px 0" }}>
      {/* HEADER */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={avatar}
          alt={username}
          width="30"
          height="30"
          style={{ borderRadius: "50%" }}
        />
        <strong>{username}</strong>
        <span style={{ color: "gray" }}>{createdAt}</span>
      </div>

      {/* CONTENT */}
      <p style={{ marginTop: "10px" }}>{content}</p>

      {/* REPLY BUTTON */}
      <button onClick={() => setIsReplying(!isReplying)}>Reply</button>

      {/* REPLY INPUT */}
      {isReplying && (
        <div style={{ marginTop: "10px" }}>
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
        <div style={{ marginLeft: "30px", marginTop: "10px" }}>
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              content={reply.content}
              username={reply.user?.username || "Unknown"}
              createdAt={reply.createdAt}
              avatar={getAvatar(reply.user?.image?.png)}
              replies={reply.replies || []}
              addReply={addReply}
              commentId={reply.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  replies: PropTypes.array,
  addReply: PropTypes.func.isRequired,
  commentId: PropTypes.number.isRequired,
};

export default Comment;