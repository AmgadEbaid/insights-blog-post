import { auth } from "@/auth";
import EditeEditor from "@/components/EditeEditor";
import Editor from "@/components/Editor";
import { fetchSinglePost } from "@/lib/data";
import { redirect } from 'next/navigation'


import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const session = await auth();
  const userId = session?.user.id

  let post = await fetchSinglePost(params.id);
  if(userId !== post?.user.id){
    console.log(session,"sdfsdf", post?.user.id)

      redirect(`/story/${post?.id}`)
  }
  return (
    <div className="h-dvh max-w-3xl mx-auto mt-6">
      <EditeEditor post={post as singlePost} />
    </div>
  );
}
