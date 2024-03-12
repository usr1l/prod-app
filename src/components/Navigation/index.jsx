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
      className="flex w-auto items-center shadow-lg box-border justify-between sticky h-20 bg-white top-0 right-0 left-0 z-50 border-b border-gray-400 px-6"
    >
      <SiteLogo />
      <SearchBar placeholder={'Search'} icon={'/search.png'} />
      <Button buttonText={'Generate'} icon={'/sparkles.png'} />
      {sessionUser && (
        <ProfileButton user={sessionUser} />
      )}
    </nav>
  );
}

export { BottomNav }
