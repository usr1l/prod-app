'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLogin } from '../../lib/store/index';
import { FlipCard } from '../../components/Card';
import { useRouter } from 'next/navigation';
import Button, { OpenModalButton } from '@components/Button';
import Page from '@components/Page';
import Icon from '@components/Button/FlipIcon';
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

  const demoUser = () => {
    dispatch(thunkLogin({ email: 'tony@app.io', password: 'tonyzheng' }))
  };

  const showForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      {isLoaded && (
        <main
          className='w-auto flex flex-col mt-0 p-0 relative items-center'>
          <img
            src='/heroimage.png'
            className='absolute inset-0 min-h-[475px] min-w-[1000px] overflow-hidden'
          />
          <div
            className='w-auto flex flex-col justify-center items-center pt-20 z-10'
          >
            <div className="text-[max(6vw,3rem)] mb-6 mt-2">NODE</div>
            <h1 className="text-[max(4vw,2rem)] font-bold tracking-tighter text-center mb-2 ">
              The New Era of Learning: <br /> Personal, Powerful, and Purposeful
            </h1>
            <Button onClick={demoUser} containerClass={'h-[max(12vw,6rem)]'} buttonText={'Join Now'} buttonClass={'justify-center items-center px-9 py-3.5 text-[max(1vw,1.5rem)] text-center text-white rounded-3xl shadow-sm bg-site-black h-[max(3vw,2.5rem)] w-[max(18vw,6rem)]'} />
          </div>
          <Page className="text-left mt-40 relative w-[1140px] flex flex-col items-center justify-center z-10">
            <h2 className="text-[22px] leading-8 mb-4 px-20 w-[1010px] font-semibold">
              Transform your learning experience with NODE.
              Your education journey will be personalized with AI-driven tools, to align perfectly with your ambitions, learning pace, and style.
              Sign up now for immediate access to a platform that adapts to your need without traditional learning barriers and constraints.
            </h2>
            <div
              className='flex flex-col items-center w-full mt-12 px-20'
            >
              <FlipCard
                front={<img src='/flashcard-1.png' />}
                back={<img src='/flashcard-2.png' />}
                icon={<Icon containerClass='absolute bottom-16 right-20' icon={'/flipicon.png'} />}
              />
              <div className='flex w-full justify-center items-center'>
                <div
                  className='w-1/2 flex justify-center items-center'
                ><FlipCard
                    front={<img src='/flashcard-2f.png' />}
                    back={<img src='/flashcard-2b.png' />}
                    icon={<Icon containerClass='absolute bottom-16 right-20' icon={'/flipicon.png'} />}
                  />
                </div>
                <div
                  className='w-1/2 flex justify-center items-center'
                ><FlipCard
                    front={<img src='/flashcard-3f.png' />}
                    back={<img src='/flashcard-3b.png' />}
                    icon={<Icon containerClass='absolute bottom-16 right-20' icon={'/flipicon.png'} />}
                  />
                </div>
              </div>
              <FlipCard
                containerClass={'w-full'}
                front={<img src='/flashcard-4f.png' />}
                back={<img src='/flashcard-4b.png' />}
                icon={<Icon containerClass='absolute bottom-16 right-20' icon={'/flipicon.png'} />}
              />
            </div>
          </Page>
          <div className='w-full -mt-64 relative'>
            <img src='/homebottom.png' className='w-full' />
            <Button
              buttonText={'Join Now'}
              containerClass={'absolute left-[50%] top-[75%] translate-x-[-50%] translate-y-[-50%]'}
              buttonClass={'justify-center items-center px-9 py-3.5 text-[max(1vw,1.5rem)] text-center text-white rounded-3xl shadow-sm bg-site-black h-[max(3vw,2.5rem)] w-[max(18vw,6rem)]'}
              onClick={demoUser}
            />
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
  // <AnimatePresence mode='wait'>
  //   {showLoginForm ? (
  //     <LoginFormModal key='1' />
  //   ) : (
  //     <SignupFormModal key='2' />
  //   )}
  // </AnimatePresence>
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
