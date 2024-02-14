'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import Card, { FlashCard, TiltCard } from '@components/Card';
import OpenModalButton from '@components/OpenModalButton';
import LoginFormModal from '@components/LoginFormModal';
import { thunkLogin } from '@lib/store/session';
import '@app/globals.css';

function Login() {

  const dispatch = useDispatch();
  const handleMouseClick = (e) => {
    dispatch(thunkLogin({ email: 'tony@app.io', password: 'tonyzheng' }));
  };

  return (
    <main className='relative w-auto h-screen flex flex-col bg-gray-500 justify-center items-center box-border'>
      <div className='flex justify-between gap-x-16 gap-y-16'>
        <TiltCard />
        <FlashCard front={'Front'} back={'Back'} />
      </div>
      <div className='flex items-center'>
        <OpenModalButton
          buttonText='Open Modal'
          modalComponent={<LoginFormModal />}
        />
      </div>
    </main>
  )
};

export default Login;
