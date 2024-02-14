'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { thunkLogin } from '@lib/store/session';
import { LoginFormModal, SignupFormModal } from '@components/Modals';
import { FlashCard, TiltCard } from '@components/Card';
import '@app/globals.css';

function Login() {
  const dispatch = useDispatch();
  const handleMouseClick = (e) => {
    dispatch(thunkLogin({ email: 'tony@app.io', password: 'tonyzheng' }));
  };

  return (
    <main className='main bg-gray-500'>
      <section className='center box-border h-full w-96 bg-black left-0 top-0 bottom-0 mx-0'>
        {/* <LoginFormModal /> */}
        <SignupFormModal />
      </section>
      <div className='flex justify-center items-center box-border w-auto'>
        <TiltCard />
        <FlashCard front={'Front'} back={'Back'} />
      </div>

      <div className='center mt-12'>
      </div>
    </main>
  )
};

export default Login;
