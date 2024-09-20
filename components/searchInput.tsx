"use client";
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from "react";

export default function SearchInput() {
    const [searchTerm,setSearchTerm] =useState("")

    const router = useRouter()
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);


    const handleEnterKey = (e:any) => {
      
          e.preventDefault();
          params.set('query', searchTerm);

          console.log("something" + searchTerm);
          router.push(`/search?${params.toString()}`, { scroll: false })
 
    }
  return (
    <form onSubmit={(e:any)=>{handleEnterKey(e)}} >
      <input 
      value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
        type="search"
        className="hidden rounded-full bg-gray-50 py-3 px-6 text-sm outline-none sm:inline-block placeholder:text-gray-700"
        placeholder="Search"
      />
    </form>
  )
}
