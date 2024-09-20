import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";

// ...
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const res = await fetch("http://localhost:8000/auth/login", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 404) {
            return null;
          }
          const user:user = await res.json();
      
          return {
            name: user.User.username,
            email: user.User.email,
            token: user.access_token,
            Refresh_Token: user.refresh_token,
            expireIn: user.expiresIn,
            id:user.User.id
          } as User;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
});

interface user {
  User: {
    username: string;
    id: string;
    email: string;
    IsAdmin: boolean;
  };
  access_token: string;
  refresh_token: string;
  expiresIn: string;
}
