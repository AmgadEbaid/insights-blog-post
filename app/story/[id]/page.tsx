import { auth } from "@/auth";
import CommentsSheet from "@/components/comments/commentsSheet";
import LikeButton from "@/components/likeButton";
import PostContent from "@/components/postContent";
import PostDropdown from "@/components/PostDropdown";
import { getIslikedPost } from "@/lib/acthion";
import { fetchSinglePost } from "@/lib/data";
import { toReadableDate } from "@/lib/formatTime";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export async function generateStaticParams() {
  return [];
}

export default async function story({ params }: { params: { id: string } }) {
  const session = await auth();
  const currentUserId = session?.user.id;
  let post = await fetchSinglePost(params.id);
  console.log(post);
  const date = toReadableDate(post?.created);
  const Islikedpost = await getIslikedPost(post?.id as string);
  if (!post) {
    return notFound();
  }
  return (
    <div className="mx-auto h-dvh px-6  font-marat-sans sm:max-w-2xl">
      <div className="pb-12">
        <h1 className="mb-4 md:text-5xl text-3xl text-[#242424]  font-extrabold">
          {post?.titile}
        </h1>
        <p className="md:text-xl text-base text-[#6B6B6B]">
          {post?.description}
        </p>
        <div className="my-6 flex gap-2">
          <img src={post?.user.image} alt="" className="w-12 rounded-full" />
          <div className="ml-2">
            <h1 className="text-sm text-black ">{post?.user.diplayname}</h1>
            <p className="text-sm text-[#6B6B6B]">Published in . {date}</p>
          </div>
        </div>
        <div className="flex justify-between mt-6 items-center  gap-6 border-y border-[#f5f5f5] py-6">
          <div className="flex gap-6 items-center ">
            {
              <LikeButton
                post={post as post}
                isliked={Islikedpost as boolean}
              />
            }

            <CommentsSheet postId={post?.id} />
          </div>
          {currentUserId == post?.user.id && <PostDropdown postId={post?.id} />}
        </div>
      </div>
      {post?.content}

      <div className="flex justify-between mt-12 items-center">
        <div className="flex gap-6 ">
          {<LikeButton post={post as post} isliked={Islikedpost as boolean} />}
          <CommentsSheet postId={post?.id} />
        </div>
        {currentUserId == post?.user.id && <PostDropdown postId={post?.id} />}
      </div>
    </div>
  );
}
