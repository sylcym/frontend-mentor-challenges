import { useState } from "react";
import PropTypes from "prop-types";
import { getAvatar } from "../utils/getAvatar.js";
import "./Comment.css";

function Comment({ content, username, createdAt, avatar, replies = [], addReply, commentId, updateComment, deleteComment, updateScore, score }) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  return (
    <div className="comment">
      <div className="comment-layout">

        <div className="comment-header">
          <div className="comment-user">
            <img src={avatar} alt={username} className="comment-avatar" />
            <strong className="comment-username">{username}</strong>
            <span className="comment-time">{createdAt}</span>
          </div>
        </div>

        <div className="comment-actions">
          <button onClick={() => setIsReplying(!isReplying)}>
            Reply
          </button>

          <button onClick={() => setIsEditing(!isEditing)}>
            Edit
          </button>

          <button onClick={() => deleteComment(commentId)}>
            Delete
          </button>
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
            <button onClick={() => updateScore(commentId, 1)}>+</button>
            <div>{score}</div>
            <button onClick={() => updateScore(commentId, -1)}>-</button>
          </div>
        </div>

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

        {replies.length > 0 && (
          <div className="replies">
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
  // <div className="comment">
  //   <div className="comment-body">

  //     {/* <div className="comment-score">
  //       <button onClick={() => updateScore(commentId, 1)}>+</button>

  //       <div>{score}</div>

  //       <button onClick={() => updateScore(commentId, -1)}>-</button>
  //     </div> */}

  //     <div className="comment-main">

  //       <div className="comment-header">
  //         <img
  //           src={avatar}
  //           alt={username}
  //           className="comment-avatar"
  //         />
  //         <strong className="comment-username">{username}</strong>
  //         <span className="comment-time">{createdAt}</span>
  //       </div>

  //       {isEditing ? (
  //         <div>
  //           <textarea
  //             value={editedContent}
  //             onChange={(e) => setEditedContent(e.target.value)}
  //           />
  //           <button
  //             onClick={() => {
  //               updateComment(commentId, editedContent);
  //               setIsEditing(false);
  //             }}
  //           >
  //             Save
  //           </button>
  //         </div>
  //       ) : (
  //         <p className="comment-content">{content}</p>
  //       )}

  //       <div className="comment-actions">
  //         <div className="comment-score">
  //           <button onClick={() => updateScore(commentId, 1)}>+</button>

  //           <div>{score}</div>

  //           <button onClick={() => updateScore(commentId, -1)}>-</button>
  //         </div>
  //         <button className="comment-btn" onClick={() => setIsReplying(!isReplying)}>
  //           Reply
  //         </button>

  //         {/* <button className="comment-btn delete" onClick={() => deleteComment(commentId)}>
  //           Delete
  //         </button>

  //         <button className="comment-btn" onClick={() => setIsEditing(!isEditing)}>
  //           Edit
  //         </button> */}
  //       </div>

  //       {isReplying && (
  //         <div style={{ marginTop: "10px" }}>
  //           <textarea
  //             placeholder={`Reply to ${username}`}
  //             value={replyContent}
  //             onChange={(e) => setReplyContent(e.target.value)}
  //           />
  //           <button
  //             onClick={() => {
  //               addReply(commentId, replyContent);
  //               setReplyContent("");
  //               setIsReplying(false);
  //             }}
  //           >
  //             Send Reply
  //           </button>
  //         </div>
  //       )}

  //       {replies.length > 0 && (
  //         <div style={{ marginLeft: "30px", marginTop: "10px" }}>
  //           {replies.map((reply) => (
  //             <Comment
  //               key={reply.id}
  //               content={reply.content}
  //               username={reply.user?.username || "Unknown"}
  //               createdAt={reply.createdAt}
  //               avatar={getAvatar(reply.user?.image?.png)}
  //               replies={reply.replies || []}
  //               addReply={addReply}
  //               commentId={reply.id}
  //               deleteComment={deleteComment}
  //               updateComment={updateComment}
  //               updateScore={updateScore}
  //               score={reply.score}
  //             />
  //           ))}
  //         </div>
  //       )}

  //     </div>
  //   </div>
  // </div>
  // );
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
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