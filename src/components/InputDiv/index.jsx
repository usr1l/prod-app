import React from 'react';
import '@app/globals.css';

const InputDiv = ({
  children,
  errorStyles,
  modalStyles,
  label,
  labelFor,
  error
}) => {

  return (
    <>
      <div className='w-full flex justify-between items-center'>
        <label className={`modal-label ${modalStyles}`} htmlFor={labelFor}>{label}</label>
        <div className={`modal-error-message ${errorStyles}`}>{error}</div>
      </div>
      {children}
    </>
  )
}

export default InputDiv;
