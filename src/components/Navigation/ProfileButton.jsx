'use client'

import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OpenModalButton from "../Button/OpenModalButton";
import LoginFormModal from "../Modals/LoginFormModal";
import SignupFormModal from "../Modals/SignupFormModal";
import IconLabel from "@components/IconLabel";
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
    dispatch(thunkLo);
  };
  //  + (showMenu ? "" : " hidden")
  const ulClassName = "flex flex-col absolute top-24 right-4 z-20 border-black border-3 box-border w-64 bg-white h-auto min-h-36 p-4 shadow-top-left-light";
  const closeMenu = () => setShowMenu(false);

  return (
    <div className="flex justify-center items-center">
      <button className="flex z-20 justify-center items-center box-border p-2" onClick={openMenu} >
        <FontAwesomeIcon size="2x" icon={faUser} />
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <div>
            <IconLabel labelText={user.firstname} />
            <IconLabel labelText={user.username} />
            <IconLabel labelText={user.email} />
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
