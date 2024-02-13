'use client';

import Card, { FlashCard, TiltCard } from '@components/Card';
import OpenModalButton from '@components/OpenModalButton';
import LoginFormModal from '@components/SignupFormModal';
import '@app/globals.css';
import { useDispatch } from 'react-redux';
import { thunkLogin } from '@lib/store/session';

export default function Home() {
  const dispatch = useDispatch();
  const handleMouseClick = (e) => {
    dispatch(thunkLogin({ email: 'tony@app.io', password: 'tonyzheng' }));
  };
  return (
    <main className="relative flex flex-col items-center bg-sage border-8 border-red-900">
      <div className='flex items-center'>
        <FlashCard front='Front' back='Back' />
      </div>
      <div>
        <TiltCard />
      </div>
      <OpenModalButton
        buttonText='Open Modal'
        modalComponent={<LoginFormModal />}
      />
      <button onClick={handleMouseClick}>This is a button</button>
    </main>
  );
}
