import React from 'react';
import '@app/globals.css';

export default function Page({
  children
}) {
  return (
    <div className='page'>
      {children}
    </div>
  )
};
