import React from "react";
import { PostCard } from "./postCard";
import { fetchAllPosts, FetchAutherPosts } from "@/lib/data";
import { getUserFavoritesStories } from "@/lib/user/data";

export default async function PostsList({
  autherId,
  getUserFavorites,
}: {
  autherId?: string;
  getUserFavorites?: boolean;
}) {
  //this looks like a miss not gonna lie
  let posts = await fetchAllPosts();
  if (getUserFavorites) {
    posts = await getUserFavoritesStories(autherId as string);
  }
  if (autherId && !getUserFavorites) {
    posts = await FetchAutherPosts(autherId);
  }

  return (
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
  );
}
