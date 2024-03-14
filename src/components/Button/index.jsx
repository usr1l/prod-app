import React from 'react';
import OpenModalButton from './OpenModalButton';
import '@app/globals.css';

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
  imgClass
}) => {

  return (
    <div className={`flex justify-center items-center ${containerClass}`}>
      <button
        className={`flex gap-1 justify-center box-border px-4 py-2 text-base rounded-3xl text-center whitespace-nowrap ${buttonClass}`}
        onClick={onClick}
        type={type}
        disabled={disableButton || false}
        value={value}
      >
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
