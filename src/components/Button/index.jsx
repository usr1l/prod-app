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
  alt
}) => {

  return (
    <div className='flex justify-center items-center'>
      <button
        className={`flex gap-1 justify-center px-4 py-2 text-base text-center whitespace-nowrap ${buttonClass}`}
        onClick={onClick}
        type={type}
        disabled={disableButton || false}
        value={value}
      >
        {icon && (
          <img
            loading="lazy"
            src={icon}
            className="shrink-0 my-auto aspect-[0.74]] w-[11px]"
            alt={alt}
          />
        )}
        <span className='grow'>
          {buttonText}
        </span>
      </button>
    </div>
  )
};

export default Button;
export { OpenModalButton };
