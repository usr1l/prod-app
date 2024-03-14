import React from 'react';
import '@app/globals.css';

export default function Page({
  children,
  className
}) {
  return (
    <div className={`page ${className}`}>
      {children}
    </div>
  )
};
