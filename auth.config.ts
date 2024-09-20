import type { NextAuthConfig } from 'next-auth';
import { tree } from 'next/dist/build/templates/app-page';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {

      const isLoggedIn = !!auth?.user;

      const isOnHome = nextUrl.pathname.startsWith('/story/new');
      if (isOnHome) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && nextUrl.pathname === '/login' ) {
        return Response.redirect(new URL('/', nextUrl));
      }
      if (nextUrl.searchParams.has('callbackUrl') && isLoggedIn) {
       let callbackUrl_ =  nextUrl.searchParams.get('callbackUrl')
       console.log(callbackUrl_)
        const callbackUrl = new URL(callbackUrl_ || '/' , nextUrl);
        return Response.redirect(callbackUrl);
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;