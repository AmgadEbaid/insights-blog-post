import React from "react";
import Link from "next/link";
import SearchInput from "./searchInput";
import UserDropdown from "./user/dropdown";
import Google from "./user/google";

export default function Nav() {
  return (
    <header className="sticky left-0 top-0 flex justify-between lg:py-4 bg-white px-6 py-4">
      <div className="flex flex-row justify-center align-middle items-center">
        <Link href="/">
          <span className="mr-4 cursor-pointer text-center font-serif text-3xl font-bold tracking-tighter">
            Medium
          </span>
        </Link>

        <SearchInput />
      </div>

      <nav className="flex gap-5 items-center">
        <Link href={"/story/new"}>Write</Link>
        <Google />
        <UserDropdown />
      </nav>
    </header>
  );
}
