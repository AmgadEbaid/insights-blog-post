import React from "react";
import Link from "next/link";
import Sinout from "./sinout";
import { SignIn } from "./signin-button";
import { redirect } from "next/navigation";
import SearchInput from "./searchInput";

export default function Nav() {
  return (
    <header className="sticky left-0 top-0 flex justify-between bg-white px-5 py-2">
      <div className="flex flex-row justify-center align-middle items-center">
        <Link href="/">
          <span className="mr-4 cursor-pointer text-center font-serif text-3xl font-bold tracking-tighter">
            Medium
          </span>
        </Link>

        <SearchInput />
      </div>

      <nav className="flex gap-4 items-center">
        <Sinout />
        <button className=" sm:hidden">🔍</button>
        <Link href={"/story/new"}>✍️Write</Link>

        <SignIn />
      </nav>
    </header>
  );
}
