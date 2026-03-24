import PropTypes from "prop-types";

function Comment({ content, username, createdAt, replies = [] }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <p>{content}</p>
      <small>{username || "Unknown"} • {createdAt || "Unknown date"}</small>

      {replies.length > 0 && (
        <div style={{ marginLeft: "20px", marginTop: "10px" }}>
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              content={reply.content}
              username={reply.user?.username || "Unknown"}
              createdAt={reply.createdAt}
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
  replies: PropTypes.array,
};

export default Comment;