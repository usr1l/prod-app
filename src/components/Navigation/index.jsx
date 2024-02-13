"use client"

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { thunkAuthenticate, thunkLogin, thunkTest } from "@lib/store/session";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProfileButton from './ProfileButton';
import SiteLogo from "@components/SiteLogo";
import '@app/globals.css';

export default function Navigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkAuthenticate())
  }, [ dispatch ]);

  const sessionUser = useSelector(state => state.session.user);

  return (
    <div
      className="flex sticky items-center justify-between h-20 bg-white top-0 right-0 left-0 z-50 w-auto border-b border-gray-400 box-border px-6 p-2"
    >
      <SiteLogo />
      {sessionUser && (
        <ProfileButton user={sessionUser} />
      )}
    </div>
  );
}
