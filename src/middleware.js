// import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export default function middleware(req, res) {
  // const session = getSession();
  // console.log("session=================", session);
  // console.log('cookie=================', req.cookies.get("session"))
  // // check first if url starts with login, if it does
  // // console.log("req.url", req.nextUrl.pathname)

  // // console.log('URL', new URL('/login', req.nextUrl.origin))
  // if (!session && !req.nextUrl.pathname.startsWith('/login')) {
  //   return NextResponse.redirect(new URL('/login', req.nextUrl.origin));
  //   // return NextResponse.next();
  // }
  return NextResponse.next();
}

// export const config = {
//   matcher: [ '/((?!api|_next/static|_next/image|.*\\.png$).*)' ],
// }
