"use client";

import { CreateComment } from "@/lib/comments/acthion";
import React, { useActionState } from "react";
import { Button } from "../ui/button";
export default function CommentForm({ postId }: { postId: string }) {
  const createCommentwithId = CreateComment.bind(null, postId as string);

  const [state, action, isPending] = useActionState(createCommentwithId, null);
  return (
    <div className="pt-6 mt-4 mb-6 pb-4 px-4 shadow-lg">
      <div className="flex flex-row gap-4 py-4 items-center">
        <div className="w-12 rounded-full">
          <img
            className="rounded-full"
            src="https://lh3.googleusercontent.com/a/ACg8ocLlIF1aCxgdaeUiIpJNgT6zvGhP3fQve8YmhiWhK69MWW4edVTj=s476-c-no"
            alt=""
          />
        </div>
        <h1 className="justify-items-center text-center">amgad ebaid</h1>
      </div>
      <form action={action}>
        <textarea
          name="content"
          id="content"
          cols={30}
          rows={4}
          placeholder="what are your thoghts?"
          className="resize-none outline-none placeholder:text-[#8b8b8b]"
        ></textarea>
        <div className="">
          <div className="flex justify-end">
            <Button
              disabled={isPending}
              type="submit"
              className="bg-green-700 rounded-full text-white text-sm px-4 hover:bg-green-600 "
            >
              puplish
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
