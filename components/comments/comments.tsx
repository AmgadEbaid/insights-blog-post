import { fetchPostComments } from "@/lib/data";
import React from "react";
import SingleComment from "./SingleComment";

export default async function Comments({ postId }: { postId?: string }) {
  const comments: comment[] | undefined = await fetchPostComments(postId);


  return (
    <div>
      {comments?.length === 0 && "no comments posted yet"}
      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment.id}>
              <SingleComment comment={comment} />
            </div>
          );
        })}
    </div>
  );
}
