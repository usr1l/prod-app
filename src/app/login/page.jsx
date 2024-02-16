'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { thunkLogin } from '@lib/store/session';
import { LoginFormModal, SignupFormModal } from '@components/Modals';
import { FlashCard, TiltCard } from '@components/Card';
import '@app/globals.css';

function Login() {

  const [ showLoginForm, setShowLoginForm ] = useState(true);

  const dispatch = useDispatch();
  const handleMouseClick = (e) => {
    dispatch(thunkLogin({ email: 'tony@app.io', password: 'tonyzheng' }));
  };

  const showForm = () => {
    setShowLoginForm(!showLoginForm);
  }

  return (
    <main className='main bg-gray-500'>
      <motion.section
        className='center box-border h-full w-96 bg-black left-0 top-0 bottom-0 mx-0 flex flex-col'
      >
        {showLoginForm ? <LoginFormModal /> : <SignupFormModal />}
        <button className='self-end pr-4' onClick={showForm}>{showLoginForm ? 'Create an account' : 'Already a member? Sign in'}</button>
      </motion.section>
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
