import PropTypes from "prop-types";
import { getAvatar } from "../utils/getAvatar.js";



function Comment({ content, username, createdAt, avatar, replies = [] }) {
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
};

export default Comment;