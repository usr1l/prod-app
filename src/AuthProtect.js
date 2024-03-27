'use client';

import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

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
