import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  const session = await getSession();

  // check first if url starts with login, if it does\

  if (!session && !req.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [ '/((?!api|_next/static|_next/image|.*\\.png$).*)' ],
}
