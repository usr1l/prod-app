'use client'

import { useState, useEffect, useRef } from "react";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useDispatch } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@app/globals.css";

export default function ProfileButton({ user }) {
  const dispatch = useDispatch();
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

  const handleLogout = (e) => {
    e.preventDefault();
    // dispatch(logout());
  };

  // flex flex-col absolute t-100 r-40 box-border w-32
  // + (showMenu ? "" : " hidden")
  const ulClassName = "flex flex-col absolute rounded-2xl top-20 right-20 z-20 border-black border-3 w-72 h-auto min-h-36 bg-gray-500 p-4";
  const closeMenu = () => setShowMenu(false);

  return (
    <div className="flex justify-center items-center">
      <button className="flex z-20 justify-center items-center box-border p-2" onClick={openMenu} >
        <FontAwesomeIcon size="2x" icon={faUser} />
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </div>
    </div>
  );
}
