import { auth, signOut } from "@/auth";
import React from "react";

export default async function Sinout() {
  const session = await auth();
  if (!session?.user) return null;
  console.log(session.user);
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}
