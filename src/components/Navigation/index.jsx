"use client";

import ProfileButton from './ProfileButton';
import SiteLogo from "@components/SiteLogo";
import BottomNav from "./BottomNav";
import SearchBar from "./SearchBar";
import Button from "@components/Button";
import '@app/globals.css';

export default function Navigation({ sessionUser }) {
  return (
    <nav
      className="flex w-auto items-center shadow-lg box-border justify-between sticky h-24 bg-white top-0 right-0 left-0 z-50 px-12"
    >
      <SiteLogo height={60} width={120} />
      <div
        className="h-full flex items-center box-border mr-auto ml-4"
      >
        <SearchBar placeholder={'Search'} icon={'/search.png'} containerClass={'w-96 mx-8'} />
        <Button buttonText={'Generate'} icon={'/sparkles.png'} buttonClass={'shadow-sm bg-zinc-900 text-white'} />
      </div>
      <div
        className="h-full flex items-center box-border">
        <Button buttonText={'Tools'} icon={'/arrowdown.png'} rightIcon={true} />
        <Button buttonText={'Community'} buttonClass={'mr-24 hover:border-bottom-blue-300'} />
        {sessionUser ? (
          <ProfileButton user={sessionUser} />
        ) : (
          <>
            <Button buttonText={'Login'} buttonClass={'hover:font-bold w-24'} />
            <Button buttonText={'Sign Up'} buttonClass={'bg-blue-300 text-black w-24 hover:bg-blue-400'} />
          </>
        )}
      </div>
    </nav>
  );
}

export { BottomNav }
