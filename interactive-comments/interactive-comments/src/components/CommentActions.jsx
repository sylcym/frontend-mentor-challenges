import PropTypes from "prop-types";
import replyIcon from "../assets/images/icon-reply.svg";
import editIcon from "../assets/images/icon-edit.svg";
import deleteIcon from "../assets/images/icon-delete.svg";

function CommentActions({ isCurrentUser, onReply, onEdit, onDelete }) {
  return (
    <>
      {isCurrentUser ? (
        <>
          <button onClick={onEdit}>
            <img src={editIcon} alt="edit" />
            Edit
          </button>

          <button onClick={onDelete} className="delete">
            <img src={deleteIcon} alt="delete" />
            Delete
          </button>
        </>
      ) : (
        <button onClick={onReply}>
          <img src={replyIcon} alt="reply" />
          Reply
        </button>
      )}
    </>
  );
}

CommentActions.propTypes = {
  isCurrentUser: PropTypes.bool.isRequired,
  onReply: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CommentActions;