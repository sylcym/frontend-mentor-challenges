import PropTypes from "prop-types";
import { getAvatar } from "../utils/getAvatar";

function ReplyForm({
  currentUser,
  value,
  onChange,
  onSubmit,
  buttonText = "Send",
  placeholder = "Add a comment...",
}) {
  return (
    <form className="reply-box" onSubmit={onSubmit}>
      <img
        src={getAvatar(currentUser.image.png)}
        alt="current user"
        className="app-avatar"
      />

      <textarea
        className="app-textarea"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button
        className="app-button"
        type="submit"
        disabled={!value.trim()}
      >
        {buttonText}
      </button>
    </form>
  );
}

ReplyForm.propTypes = {
  currentUser: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  placeholder: PropTypes.string,
};

export default ReplyForm;