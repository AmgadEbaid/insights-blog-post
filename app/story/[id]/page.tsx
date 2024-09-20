import { auth } from "@/auth";
import CommentsSheet from "@/components/comments/commentsSheet";
import LikeButton from "@/components/likeButton";
import PostContent from "@/components/postContent";
import PostDropdown from "@/components/PostDropdown";
import { getIslikedPost } from "@/lib/acthion";
import { fetchSinglePost } from "@/lib/data";
import { toReadableDate } from "@/lib/formatTime";
import React, { Suspense } from "react";

export async function generateStaticParams() {
  return [];
}

export default async function story({ params }: { params: { id: string } }) {
  const session = await auth();
  const currentUserId = session?.user.id;
  let post = await fetchSinglePost(params.id);
  const date = toReadableDate(post?.created);
  const Islikedpost = await getIslikedPost(post?.id as string);

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
        <div className="flex justify-between mt-6 items-center  gap-6 border-y border-slate-100 py-2">
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
