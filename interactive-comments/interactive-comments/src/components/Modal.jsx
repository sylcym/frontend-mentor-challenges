import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import "./Modal.css";


function Modal({ onCancel, onConfirm }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll("button");

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    firstEl?.focus();

    const handleTab = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);

    return () => window.removeEventListener("keydown", handleTab);
  }, []);


  return (
    <div className="modal-overlay"
      onClick={onCancel}
    >
      <div className="modal"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} >
        <h3>Delete comment</h3>

        <p>
          Are you sure you want to delete this comment?
          This will remove the comment and can't be undone.
        </p>

        <div className="modal-actions">
          <button className="modal-cancel" onClick={onCancel}>
            NO, CANCEL
          </button>

          <button className="modal-delete" onClick={onConfirm}>
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default Modal;