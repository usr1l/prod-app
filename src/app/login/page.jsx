'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { thunkLogin } from '@lib/store/session';
import { LoginFormModal, SignupFormModal } from '@components/Modals';
import { OpenModalButton } from '@components/Button';
import '@app/globals.css';

function Login() {
  const dispatch = useDispatch();
  const handleMouseClick = (e) => {
    dispatch(thunkLogin({ email: 'tony@app.io', password: 'tonyzheng' }));
  };

  return (
    <main className='page relative bg-gray-500 items-center'>
      <div className='center w-64 justify-between'>
        <OpenModalButton
          buttonText='Open Modal'
          modalComponent={<LoginFormModal />}
        />
        <OpenModalButton
          buttonText='Sign Up'
          modalComponent={<SignupFormModal />}
        />
      </div>
      <div className='center mt-12'>
        This
      </div>
    </main>
  )
};

export default Login;
