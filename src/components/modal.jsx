import React from "react";

function Modal({ show, onHide, title, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button type="button" onClick={onHide} className="close-button">
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button onClick={onHide} className="close-modal-button">
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
