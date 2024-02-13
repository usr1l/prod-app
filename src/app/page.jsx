'use client';

import Card, { FlashCard, TiltCard } from '@components/Card';
import OpenModalButton from '@components/OpenModalButton';
import LoginFormModal from '@components/SignupFormModal';
import { useDispatch } from 'react-redux';
import { thunkLogin } from '@lib/store/session';
import '@app/globals.css';

export default function Home() {
  const dispatch = useDispatch();
  const handleMouseClick = (e) => {
    dispatch(thunkLogin({ email: 'tony@app.io', password: 'tonyzheng' }));
  };
  return (
    <main className="relative w-auto h-screen flex flex-col justify-center items-center bg-grey-400 box-border tracking-wide">
      <div className='flex items-center'>
        <OpenModalButton
          buttonText='Open Modal'
          modalComponent={<LoginFormModal />}
        />
      </div>
    </main>
  );
};
