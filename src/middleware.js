export async function middleware(req) {
  // validate the user is authenticated
  // const verifiedToken = //check for auth
  // const { origin } = req.nextUrl;
  console.log("middleware", req);

  // redirect if the token is invalid
  // if (!verifiedToken) {
  // return NextResponse.redirect(`/login`);
  // }
}
