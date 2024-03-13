'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { thunkLogin } from '../../lib/store/index';
import { LoginFormModal, SignupFormModal } from '../../components/Modals';
import { FlashCard, TiltCard } from '../../components/Card';
import { useRouter } from 'next/navigation';
import '../globals.css';
import Button from '@components/Button';

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
  };

  const showForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      {isLoaded && (
        <main
          className='w-auto flex flex-col mt-0 p-0 relative'>
          <img
            loading='lazy'
            src='/heroimage.png'
            className='absolute inset-0 z-0 min-h-[400px] min-w-[1000px]'
          />
          <div
            className='w-auto z-10 flex flex-col justify-center items-center pt-16'
          >
            <div className="text-[max(6vw,3rem)] text-zinc-900 mb-4">NODE</div>
            <h1 className="text-[max(4vw,2rem)] font-bold tracking-tighter text-center text-zinc-900 mb-4">
              The New Era of Learning: <br /> Personal, Powerful, and Purposeful
            </h1>
            <Button buttonText={'Join Now'} containerClass={'h-[max(10vw,110px)]'} buttonClass={'justify-center items-center px-9 py-3.5 font-thin text-[max(1.5vw,20px)] text-center text-white rounded-3xl shadow-sm bg-zinc-900 h-[max(2.5vw,45px)] w-[max(12vw,150px)]'} />
          </div>
          <div className='flex items-center justify-center h-[80px] w-auto'>
            <section className="text-center z-10 mt-80">
              <h2 className="text-2xl font-semibold leading-8 text-zinc-900">
                Transform your learning experience with NODE.
              </h2>
              <p>
                Your education journey will be personalized with AI-driven tools, to align perfectly with your ambitions, learning pace, and style.
              </p>
              <p>
                Sign up now for immediate access to a platform that adapts to your need without traditional learning barriers and constraints.
              </p>
            </section>
          </div>
        </main>
      )}
    </>
  )
  // // to use framer motion, specify key, exit and transition mode, such as the "layout" prop
  // return (
  //       <main className='main bg-gray-500'>
  //         <section
  //           className='center box-border h-full w-96 bg-black left-0 top-0 bottom-0 mx-0 flex flex-col relative overflow-hidden'
  //         >
  //           <AnimatePresence mode='wait'>
  //             {showLoginForm ? (
  //               <LoginFormModal key='1' />
  //             ) : (
  //               <SignupFormModal key='2' />
  //             )}
  //           </AnimatePresence>
  //           <button className='modal-button my-4 bg-gray-300 hover:bg-white w-auto' onClick={handleMouseClick}>Demo User</button>
  //           <button className='self-end absolute bottom-0 pr-4 pb-4 text-gray-200 hover:text-gray-600 w-auto' onClick={showForm}>{showLoginForm ? 'Create an account' : 'Already a member? Sign in'}</button>
  //         </section>
  //         <div className='flex justify-center items-center box-border w-auto'>
  //           <TiltCard />
  //           <FlashCard front={'Front'} back={'Back'} />
  //         </div>
  //         <div className='center mt-12'>
  //         </div>
  //       </main>
  // )
};

export default Login;
