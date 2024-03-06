// import React from "react";
import Modal from "react-modal";

import css from "./ImageModal.module.css";

export default function ImageModal({ isOpen, onRequestClose, selectedImage }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      // style={customStyles}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName="Overlay"
    >
      {selectedImage && (
        <>
          <img
            className={css.modalImage}
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
          />
          <button className="modalCloseBtn" onClick={onRequestClose}>
            Close
          </button>
        </>
      )}
    </Modal>
  );
}
