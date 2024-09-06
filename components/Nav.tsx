import React from "react";
import Link from "next/link";
import Sinout from "./sinout";
import { SignIn } from "./signin-button";

export default function Nav() {
  return (
    <header className="sticky left-0 top-0 flex justify-between bg-white px-5 py-2">
      <div>
        <Link href="/">
          <span className="mr-2 cursor-pointer text-center font-serif text-3xl font-bold tracking-tighter">
            Medium
          </span>
        </Link>

        <input
          type="search"
          className="hidden rounded-full bg-gray-50 p-1.5 px-5 text-sm outline-none sm:inline-block"
          placeholder="Search"
        />
      </div>

      <nav className="flex gap-4 items-center">
        <Sinout/>
      <button className=" sm:hidden">🔍</button>
        <Link href={"/story/new"}>✍️Write</Link>
       
        <SignIn/>
      </nav>
    </header>
  );
}
