"use client";
import { likePost, unlikePost } from "@/lib/acthion";
import React, { useActionState } from "react";

export default function LikeButton({
  post,
  isliked,
}: {
  post: post;
  isliked: boolean;
}) {
  // this is madness i regret it but for now it works

  const likepostWithId = likePost.bind(null, post.id as string);

  const [state, likeActhion, isPending] = useActionState(likepostWithId, null);

  const unlikepostWithId = unlikePost.bind(null, post.id as string);

  const [state_, unlikeActhion, isPending_] = useActionState(
    unlikepostWithId,
    null
  );

  return (
    <form action={isliked ? unlikeActhion : likeActhion}>
      <button disabled={isPending && isPending_}>
       👍
        {post?.favoriteCount}
      </button>
    </form>
  );
}
