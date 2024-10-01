import { auth, signOut } from "@/auth";
import React from "react";

export default async function Sinout() {
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
