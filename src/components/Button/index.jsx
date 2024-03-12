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
        className={`flex gap-1 justify-center px-4 py-2.5 text-base text-center text-white whitespace-nowrap rounded-3xl shadow-sm bg-zinc-900 ${buttonClass}`}
        onClick={onClick}
        type={type}
        disabled={disableButton || false}
        value={value}
      >
        <img
          loading="lazy"
          src={icon}
          className="shrink-0 my-auto aspect-[0.74] fill-white w-[11px]"
          alt={alt}
        />
        <span className='grow'>
          {buttonText}
        </span>
      </button>
    </div>
  )
};

export default Button;
export { OpenModalButton };
