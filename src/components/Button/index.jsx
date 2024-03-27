import React from 'react';
import OpenModalButton from './OpenModalButton';
import '@app/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  buttonText,
  type,
  onClick,
  disableButton,
  buttonClass,
  value,
  icon,
  alt,
  rightIcon,
  containerClass,
  imgClass,
  containerOnClick,
  fontAwesomeIcon
}) => {

  return (
    <div
      onClick={containerOnClick}
      className={`flex justify-center items-center ${containerClass} box-border`}>
      <button
        style={{
          transitionDuration: '0.3s',
          transformStyle: 'ease-in-out',
        }}
        className={`flex gap-1 justify-center box-border text-base rounded-xl text-center whitespace-nowrap ${buttonClass}`}
        onClick={onClick}
        type={type}
        disabled={disableButton || false}
        value={value}
      >
        {fontAwesomeIcon && (
          <FontAwesomeIcon icon={fontAwesomeIcon} size='1x' className={`${imgClass}`} />
        )}
        {icon && !rightIcon && (
          <img
            src={icon}
            className={`shrink-0 my-auto aspect-[0.74]] w-[11px] ${imgClass}`}
            alt={alt}
          />
        )}
        {buttonText && (
          <span className='grow'>
            {buttonText}
          </span>
        )}
        {icon && rightIcon && (
          <img
            src={icon}
            className={`shrink-0 my-auto aspect-[0.74]] w-[11px] ${imgClass}`}
            alt={alt}
          />
        )}
      </button>
    </div>
  )
};

export default Button;
export { OpenModalButton };
