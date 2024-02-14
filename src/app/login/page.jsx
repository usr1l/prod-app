'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { thunkLogin } from '@lib/store/session';
import { LoginFormModal, SignupFormModal } from '@components/Modals';
import '@app/globals.css';

function Login() {
  const dispatch = useDispatch();
  const handleMouseClick = (e) => {
    dispatch(thunkLogin({ email: 'tony@app.io', password: 'tonyzheng' }));
  };

  return (
    <main className='flex absolute inset-0 bg-gray-500 '>
      <section className='center box-border h-full w-96 bg-black relative left-0 top-0 bottom-0 mx-0'>
        <LoginFormModal />
        {/* <SignupFormModal /> */}
      </section>
      <div className='center w-64 justify-between'>
      </div>
      <div className='center mt-12'>
      </div>
    </main>
  )
};

export default Login;
