import React from 'react'
import '@app/globals.css';

function BottomNav({
  children,
}) {
  return (
    <div className='h-20 bg-black relative bottom-0 flex items-center mt-auto justify-center m-0'>
      <div className='flex justify-between w-10/12'>
        {children}
      </div>
    </div>
  );
};

export default BottomNav;
