"use client"

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProfileButton from './ProfileButton';
import SiteLogo from "@components/SiteLogo";
import BottomNav from "./BottomNav";
import SearchBar from "./SearchBar";
import Button from "@components/Button";
import '@app/globals.css';

export default function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <nav
      className="flex w-auto items-center shadow-lg box-border justify-between sticky h-24 bg-white top-0 right-0 left-0 z-50 px-6"
    >
      <SiteLogo height={60} width={120} />
      <SearchBar placeholder={'Search'} icon={'/search.png'} />
      <Button buttonText={'Generate'} icon={'/sparkles.png'} buttonClass={'rounded-3xl shadow-sm bg-zinc-900 text-white'} />
      <Button buttonText={'Tools'} className={''} />
      <Button buttonText={'Community'} />
      <Button buttonText={'Login'} />
      <Button buttonText={'Sign Up'} />
      {sessionUser && (
        <ProfileButton user={sessionUser} />
      )}
    </nav>
  );
}

export { BottomNav }
