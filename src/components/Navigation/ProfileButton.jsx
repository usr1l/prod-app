'use client'

import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconLabel from "@components/IconLabel";
import { thunkLogout } from "@lib/store/session";
import { useRouter } from "next/navigation";
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

  const handleLogout = async (e) => {
    await dispatch(thunkLogout());
    router.push("/login");
    return;
  };
  //  + (showMenu ? "" : " hidden")
  const ulClassName = "flex flex-col absolute rounded-2xl top-28 right-6 z-20 box-border w-64 bg-white h-auto min-h-36 p-4 shadow-top-left-light";
  const closeMenu = () => setShowMenu(false);

  return (
    <div className="flex justify-center items-center">
      <button className="flex z-20 justify-center items-center box-border p-2" onClick={openMenu} >
        <FontAwesomeIcon size="2x" icon={faUser} />
      </button>
      {user && showMenu && (
        <div className={ulClassName} ref={ulRef}>
          <IconLabel labelText={user.firstname} />
          <IconLabel labelText={user.username} />
          <IconLabel labelText={user.email} />
          <div>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
}
