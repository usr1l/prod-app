'use client'

import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { faUser, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { thunkLogout } from "@lib/store/session";
import { useRouter } from "next/navigation";
import Button from "@components/Button";
import "@app/globals.css";

export default function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [ showMenu, setShowMenu ] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [ showMenu ]);

  const toGeneratePage = () => {
    router.push('/generate');
    setShowMenu(false);
  };

  const handleLogout = async (e) => {
    await dispatch(thunkLogout());
    router.push("/login");
    return;
  };

  const ulClassName = "flex flex-col absolute rounded-2xl top-28 right-6 z-20 box-border min-w-[300px] bg-white h-auto shadow-lg py-4 items-start border-gray-200 border-2";
  const modalButtonClass = "w-full my-2 items-center text-[1rem] text-gray-500";

  return (
    <div className="flex justify-center items-center">
      <button className="flex z-20 justify-center items-center p-2" onClick={openMenu} >
        <FontAwesomeIcon size="2x" icon={faUser} />
      </button>
      {user && showMenu && (
        <div className={ulClassName} ref={ulRef}>
          <div className="w-full h-full flex items-center py-3 border-b-gray-100 border-b-2">
            <FontAwesomeIcon size="3x" icon={faUser} className="mx-6" />
            <div className="flex flex-col">
              <div className="font-semibold text-[16px]">{user.username}</div>
              <div className="text-[12px]">{user.email}</div>
            </div>
          </div>
          <Button
            buttonClass={modalButtonClass}
            buttonText={'Generate'}
            fontAwesomeIcon={faCircleExclamation}
            imgClass={'mr-6 ml-2'}
            onClick={toGeneratePage}
          />
          <Button
            containerClass={'w-full flex items-center justify-center mt-4 text-purple-400'}
            buttonClass={'w-full text-[1rem]'}
            buttonText={'Logout'}
            onClick={handleLogout}
          />
        </div>
      )}
    </div>
  );
}
