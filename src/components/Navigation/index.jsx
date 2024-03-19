"use client";

import { useRouter } from 'next/navigation';
import ProfileButton from './ProfileButton';
import SiteLogo from "@components/SiteLogo";
import BottomNav from "./BottomNav";
import SearchBar from "./SearchBar";
import Button, { OpenModalButton } from "@components/Button";
import { RegisterModal } from "@components/Modals";
import '@app/globals.css';

export default function Navigation({ sessionUser }) {
  const router = useRouter();
  return (
    <nav
      className="flex justify-between w-full shadow-lg box-border sticky h-24 bg-white top-0 right-0 left-0 z-40 px-12"
    >
      <SiteLogo height={60} width={120} />
      <div
        className="h-full flex items-center box-border mr-auto"
      >
        <SearchBar placeholder={'Search'} icon={'/search.png'} containerClass={'w-[max(30vw,16rem)]'} />
        <Button onClick={() => router.push('/user/generate')} buttonText={'Generate'} icon={'/sparkles.png'} buttonClass={'shadow-sm bg-zinc-900 text-white h-10 disabled:bg-zinc-500'} />
      </div>
      <div
        className="h-full flex items-center box-border">
        {sessionUser ? (
          <>
            {/* <Button buttonText={'Library'} containerClass={'mr-12 hidden border-box lg:flex h-full hover:text-blue-300 cursor-pointer'} />
            <Button buttonText={'Tools'} icon={'/arrowdown.png'} rightIcon={true} containerClass={'hidden lg:flex h-full hover:border-b-2 hover:border-blue-300 cursor-pointer'} />
            <Button buttonText={'Community'} containerClass={'mr-12 hidden border-box lg:flex h-full hover:text-blue-300 cursor-pointer'} /> */}
            <ProfileButton user={sessionUser} />
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText={'Login'}
              buttonClass={'hover:bg-zinc-200 w-24 mr-4'}
              modalComponent={<RegisterModal signUp={false} />}
            />
            <OpenModalButton
              buttonText={'Sign Up'}
              buttonClass={'bg-blue-300 w-24 hover:bg-blue-400 shadow-md'}
              modalComponent={<RegisterModal signUp={true} />}
            />
          </>
        )}
      </div>
    </nav>
  );
}

export { BottomNav }
