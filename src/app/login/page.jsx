'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { thunkLogin } from '../../lib/store/index';
import { LoginFormModal, SignupFormModal } from '../../components/Modals';
import { FlashCard, TiltCard } from '../../components/Card';
import { useRouter } from 'next/navigation';
import '../globals.css';

function Login() {

  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated } = useSelector(state => state.session);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ showLoginForm, setShowLoginForm ] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoaded(false);
      router.push('/');
    } else setIsLoaded(true);
  }, [ isAuthenticated, router ]);

  const handleMouseClick = () => {
    dispatch(thunkLogin({ email: 'tony@app.io', password: 'tonyzheng' }))
      .then(() => { router.push('/') });
  };

  const showForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  // to use framer motion, specify key, exit and transition mode, such as the "layout" prop
  return (
    <>
      {isLoaded && (
        <main className='main bg-gray-500'>
          <section
            className='center box-border h-full w-96 bg-black left-0 top-0 bottom-0 mx-0 flex flex-col relative overflow-hidden'
          >
            <AnimatePresence mode='wait'>
              {showLoginForm ? (
                <LoginFormModal key='1' />
              ) : (
                <SignupFormModal key='2' />
              )}
            </AnimatePresence>
            <button className='modal-button my-4 bg-gray-300 hover:bg-white w-auto' onClick={handleMouseClick}>Demo User</button>
            <button className='self-end absolute bottom-0 pr-4 pb-4 text-gray-200 hover:text-gray-600 w-auto' onClick={showForm}>{showLoginForm ? 'Create an account' : 'Already a member? Sign in'}</button>
          </section>
          <div className='flex justify-center items-center box-border w-auto'>
            <TiltCard />
            <FlashCard front={'Front'} back={'Back'} />
          </div>
          <div className='center mt-12'>
          </div>
        </main>
      )}
    </>
  )
};

export default Login;
