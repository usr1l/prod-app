import React, { Children } from 'react';
import '@app/globals.css';

const Button = ({
  children,
  type,
  onClick,
  disableButton,
  buttonClass,
  value
}) => {

  return (
    <div className='flex justify-center items-center'>
      <button
        className={`px-2 py-20 outline-none border-0 cursor-pointer ${buttonClass}`}
        onClick={onClick}
        type={type}
        disabled={disableButton || false}
        value={value}
      >
        {children}
      </button>
    </div>
  )
};

export default Button;
