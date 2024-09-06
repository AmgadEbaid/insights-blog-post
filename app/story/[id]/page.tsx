import PostContent from "@/components/postContent";
import { fetchSinglePost } from "@/lib/data";
import { toReadableDate } from "@/lib/formatTime";
import Link from "next/link";
import React, { Suspense } from "react";
 

export async function generateStaticParams() {
  return [];
}

export default async function story({ params }: { params: { id: string } }) {
  let post = await fetchSinglePost(params.id);
  const date = toReadableDate(post?.created);
 
  return (
    <div className="mx-auto h-dvh  pt-12 font-marat-sans sm:max-w-2xl">
      <div className="pb-12">
        <h1 className="mb-2 text-4xl font-extrabold">{post?.titile}</h1>
        <p className="text-2xl text-gray-600">{post?.description}</p>
        <div className="my-8 flex gap-2">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7b/88/96/7b889674-041c-2151-e50c-571527712dba/pr_source.png/380x380cc.webp"
            alt=""
            className="w-12 rounded-full"
          />
          <div className="ml-2">
            <h1 className="text-sm text-black ">{post?.user.diplayname}</h1>
            <p className="text-sm text-gray-500">Published in . {date}</p>
          </div>
        </div>
        <div className="flex justify-between mt-12  gap-6 border-y border-slate-100 py-4">
          <div className="flex gap-6 ">
            <span>👋 4k</span>
            <span>🗨️ 4k</span>
          </div>
          <Link href={`/story/${post?.id}/edit`}>edit</Link>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
          {<PostContent postContent={post?.content}/>}
        </Suspense>
      <div className="flex justify-between mt-12">
        <div className="flex gap-6 ">
          <span>👋 4k</span>
          <span>🗨️ 4k</span>
        </div>
        <Link href={`/story/${post?.id}/edit`}>edit</Link>
      </div>
    </div>
  );
}
