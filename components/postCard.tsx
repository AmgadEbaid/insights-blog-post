import { FormatTime } from "@/lib/formatTime";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export function PostCard({ post }: { post: post }) {
  const dateObject = new Date(post.created);
  let CreatedTimeFormat = FormatTime(dateObject);
  return (
    <div>
      <div className=" my-8 pb-8 border-b border-gray-100 md">
        <Link href={`/story/${post.id}`}>
          <div className="cursor-pointer">
            <div className="flex gap-2 pb-4 ">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7b/88/96/7b889674-041c-2151-e50c-571527712dba/pr_source.png/380x380cc.webp"
                alt=""
                className="w-5 rounded-full"
              />
              
              <h1 className="text-sm text-black font-normal hover:underline  hover:underline-offset-1">
                {post.user.diplayname}
              </h1>
            
            </div>
            <div className="flex flex-row">
              <div className="w-3/4">
                <h1 className="mb-2 font-marat-sans text-black text-xl font-extrabold md:text-2xl">
                  {post.titile}
                </h1>
                <p className="font-marat-sans text-base leading-5 text-gray-500">
                  {post.description}
                </p>
              </div>
              <div className="w-1/4">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*yDsrgQLOIN6He3ge-oKIIg.png"
                  alt=""
                  className="aspect-video  object-cover "
                />
              </div>
            </div>
            <div className="flex justify-between pt-4">
              <div className="flex gap-2">
                <span>
                  ⭐
                  <span className="text-sm font-normal">
                    {CreatedTimeFormat}
                  </span>
                </span>
                <span>
                  👋
                  <span className="text-sm font-normal">
                    {post.favoriteCount}{" "}
                  </span>
                </span>
                <span>
                  🗨️<span className="text-sm font-normal">5</span>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
