import React from "react";
import  { PostCard } from "./postCard";
import { fetchAllPosts, FetchAutherPosts } from "@/lib/data";

export default async function PostsList({ autherId }: { autherId?: string }) {
  let posts = await fetchAllPosts();
  if (autherId) {
    posts = await FetchAutherPosts(autherId);
  
  }
  return (
    <div>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
                <PostCard post={post}/>
            </div>
          );
        })}
    </div>
  );
}

