import PropTypes from "prop-types";
import { getAvatar } from "../utils/getAvatar";
import "./ReplyForm.css";

function ReplyForm({
  currentUser,
  value,
  onChange,
  onSubmit,
  buttonText = "Send",
  placeholder = "Add a comment...",
  variant = "default",
}) {
  return (
    <form className={`reply-form ${variant === "nested" ? "reply-form--nested" : ""}`}
      onSubmit={onSubmit}>
      <img
        src={getAvatar(currentUser.image.png)}
        alt="current user"
        className="reply-form__avatar"
      />

      <textarea
        className="reply-form__textarea"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button
        className="reply-form__button"
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
  variant: PropTypes.oneOf(["default", "nested"]),
};

export default ReplyForm;