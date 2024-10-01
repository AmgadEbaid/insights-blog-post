import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import Google from "next-auth/providers/google";

import { z } from "zod";
import { oauthLogin } from "./lib/acthion";
import { localAuth } from "./lib/auth/acthion";
import { redirect } from "next/dist/server/api-utils";

// ...
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await localAuth(email, password);
            
          return user;
        }
      },
    }),
    Google,
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === "credentials") return true;
      const oauthUser: OauthUser = {
        diplayname: user.name as string,
        email: user.email as string,
        image: user.image as string,
        provider: account?.provider as string,
      };
      const _user: user = await oauthLogin(oauthUser);
      user.id = _user.id;
      user.IsAdmin = _user.IsAdmin;
      user.token = _user.access_token;
      user.Refresh_Token = _user.refresh_token;
      user.expireIn = _user.expiresIn;

      return true;
    },
    async jwt({ token, user }) {
        
      if (user) {
        token.user = user;
      }
      
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      console.log(session)
      return session;
    },
  },
});

interface user {
  username: string;
  id: string;
  email: string;
  image: string;
  IsAdmin: boolean;

  access_token: string;
  refresh_token: string;
  expiresIn: string;
}
