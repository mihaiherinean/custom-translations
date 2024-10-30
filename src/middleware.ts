import { getSession } from '@auth0/nextjs-auth0/edge';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Retrieve the session
  const session = await getSession(req, res);
  console.log('hello');

  // Check if the session exists and if the user is authenticated
  if (session?.user) {
    // Set a cookie based on user information
    res.cookies.set('hl', session.user.language || 'en'); // Default to 'en' if language is undefined
  } else {
  ;
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'], // Match all pages except for specific paths
};
