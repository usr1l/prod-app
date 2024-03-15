'use client';

import { useModal } from '@context/Modal';
import Button from '.';
import './button.css';

export default function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose,
  containerClass,
  alt,
  icon,
  rightIcon,
  imgClass,
  disableButton,
  buttonClass,
  type
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
    <Button
      buttonText={buttonText}
      containerClass={containerClass}
      onClick={onClick}
      alt={alt}
      icon={icon}
      rightIcon={rightIcon}
      imgClass={imgClass}
      disableButton={disableButton}
      type={type}
      buttonClass={buttonClass}
    />
  );
}
