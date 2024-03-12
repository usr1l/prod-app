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
      <label className={`modal-label ${modalStyles}`} htmlFor={labelFor}>{label}</label>
      {children}
      <div className={`modal-error-message ${errorStyles}`}>{error}</div>
    </>
  )
}

export default InputDiv;
