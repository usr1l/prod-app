'use client';

import { useModal } from '@context/Modal';
import './open-modal-button.css'

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  modalCSSClass,
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose,
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
    <button
      className={modalCSSClass ? modalCSSClass : "modal-button"}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default OpenModalButton;
