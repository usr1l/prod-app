'use client';

import AuthProtect from '@AuthProtect';
import React from 'react';
import '@app/globals.css';
import Button from '@components/Button';

function Generate() {
  const navButtonClass = 'px-0 text-[16px]';
  const navContainerClass = 'mr-4 underline px-0';
  return (
    <>
      <div
        className='w-auto m-4 border-b-2 border-gray-300 shadow-md min-w-[1200px]'
      >
        <h1
          className='h-[100px] w-auto px-10 flex items-center font-bold shadow-lg'
        >MAGIC GENERATOR
          <div
            className='rounded-3xl bg-site-purple w-28 flex justify-center items-center mx-6 bg-opacity-20 text-[13px] font-normal'
          >Powered by AI</div>
        </h1>
        <div
          className='w-auto border-black px-16 py-8 flex box-border'
        >
          <div className='w-[60%]'>

            <h1 className='font-bold text-[26px]'>Customize study sets in an instant</h1>
            <h2 className='text-[20px]'>Upload notes, slides, readings or recordings</h2>
            <nav className='w-auto flex mt-4'>
              <Button
                buttonText={'Paste Text'}
                buttonClass={navButtonClass}
                containerClass={navContainerClass}
              />
              <Button
                buttonText={'Upload File from PC'}
                buttonClass={navButtonClass}
                containerClass={navContainerClass}
              />
            </nav>
          </div>
          <div className='w-[40%] flex flex-col'>

          </div>
        </div>
      </div>
    </>
  )
};


export default AuthProtect(Generate);
