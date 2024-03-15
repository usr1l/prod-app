'use client';

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginFormModal, SignupFormModal } from '.';
import { useModal } from '@context/Modal';
import Button from '@components/Button';

function RegisterModal({ signUp }) {
  const [ showLoginForm, setShowLoginForm ] = React.useState(signUp ? false : true);
  const { closeModal, modalRef, modalContent } = useModal();

  const handleShowLoginForm = () => setShowLoginForm(true);
  const handleShowSignUpForm = () => setShowLoginForm(false);


  return (
    <div className='w-[max(60vw,960px)] h-auto bg-white flex'>
      <div className='w-1/2'>
        <AnimatePresence>
          {showLoginForm ? (
            <motion.img className='w-full' src='/login.png' />
          ) : (
            <motion.img className='w-full' src='/signup.png' />
          )}
        </AnimatePresence>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center h-full p-8 box-border' >
        <FontAwesomeIcon className='absolute top-6 right-6 hover:cursor-pointer' icon={faX} onClick={closeModal} />
        <h1 className='flex w-[200px] justify-between self-start pl-4'>
          <Button containerClass={`${showLoginForm ? 'text-gray-400' : 'border-b-2 border-t-2 border-transparent border-b-black rounded-none'}`} buttonText={'Sign Up'} onClick={handleShowSignUpForm} />
          <Button containerClass={`${showLoginForm ? 'border-b-2 border-t-2 border-transparent border-b-black rounded-none' : 'text-gray-400'}`} buttonText={'Login'} onClick={handleShowLoginForm} />
        </h1>
        {showLoginForm ? (
          <LoginFormModal />
        ) : (
          <SignupFormModal />
        )}
      </div>
    </div>
  )
};

export default RegisterModal;
