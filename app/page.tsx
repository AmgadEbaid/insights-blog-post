import PostsList from "@/components/postsList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className=" h-dvh   lg:px-6 md:px-16 px-6 max-w-6xl mx-auto justify-evenly gap-20 lg:flex">
      <section className=" lg:w-4/6 ">
        <Suspense fallback={<div className="m-auto">loading...</div>}>
        <PostsList></PostsList>
          </Suspense> 
      </section>
      <section className="w-2/6 lg:visible disabled:invisible border-l border-slate-100"></section>
    </main>
  );
}
