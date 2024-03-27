'use client';

import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function AuthProtect(Component) {
  return function AuthProtect(props) {
    const auth = useSelector(state => state.session.isAuthenticated);


    useLayoutEffect(() => {
      if (!auth) {
        return redirect("/login");
      }
    }, []);


    return <Component {...props} />;
  };
}
