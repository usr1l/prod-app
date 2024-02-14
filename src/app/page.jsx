'use client';

import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import Card, { FlashCard, TiltCard } from '@components/Card';
import OpenModalButton from '@components/OpenModalButton';
import LoginFormModal from '@components/LoginFormModal';
import { thunkLogin } from '@lib/store/session';
import '@app/globals.css';

export default function HomePage() {
  const user = useSelector((state) => state.session.user);
  if (!user) {
    redirect('/login');
  };

  return (
    <main className="relative w-auto h-screen flex flex-col justify-center items-center bg-grey-400 box-border">
    </main>
  );
};
