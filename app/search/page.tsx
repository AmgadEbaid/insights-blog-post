import { PostCard } from "@/components/postCard";
import PostsList from "@/components/postsList";
import { fetchSearchPosts } from "@/lib/data";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
    // to do susspense
  const posts = await fetchSearchPosts(searchParams?.query as string);
  return (
    <main className=" h-dvh  pt-12 px-6  max-w-6xl mx-auto justify-evenly gap-20 sm:flex">
      <section className=" sm:w-4/6 ">
      <div>
        <h1 className="text-2xl"> search for {searchParams?.query}</h1>
        <div>{posts?.length==0 && " no posts yet "}</div>
      <div>
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            );
          })}
      </div>
    </div>
      </section>
      <section className="w-2/6 sm:visible disabled:invisible border-l border-slate-100"></section>
    </main>
   
  );
}
