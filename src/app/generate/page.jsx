'use client';

import AuthProtect from '@AuthProtect';
import React from 'react';


function Generate() {
  return (
    <div
      className='w-auto m-8 border-b-2 border-gray-300 shadow-md'
    >
      <h1
        className='h-[100px] w-auto mx-10 flex items-center font-bold'
      >MAGIC GENERATOR
        <div
          className='rounded-3xl bg-site-purple w-28 flex justify-center items-center mx-6 bg-opacity-20 text-[13px] font-normal'
        >Powered by AI</div>
      </h1>
      <div
        className='w-auto'
      ></div>
    </div>
  )
};


export default AuthProtect(Generate);
