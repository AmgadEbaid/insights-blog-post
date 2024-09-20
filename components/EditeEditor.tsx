"use client";
import { CreatePost, updatedPost } from "@/lib/acthion";
import { useActionState } from "react";
import { string } from "zod";

// this registers <Editor> as a Client Component

export default async function EditeEditor({ post }: { post?: singlePost }) {
  const updatepostWithId = updatedPost.bind(null, post?.id as string);

  const [state, action, isPending] = useActionState(updatepostWithId, null);

  return (
    <div>
      <form action={action}>
        <label htmlFor="title"> title</label>
        <input
          className="w-full bg-gray-50 p-2 rounded-lg outline-none"
          type="text"
          name="title"
          id="title"
          placeholder="title"
          required
          defaultValue={post?.titile}
        />
        <label htmlFor="title">description</label>
        <input
          className="w-full bg-gray-50 p-2 rounded-lg outline-none"
          type="text"
          name="description"
          id="description"
          placeholder="description"
          defaultValue={post?.description}
        />
        <label htmlFor="content">content</label>
        <textarea
         rows={12}
          name="content"
          id="content"
          placeholder="content"
          className="w-full bg-gray-50 p-2 rounded-lg outline-none"
          defaultValue={post?.content}
        ></textarea>
        <button
          type="submit"
          className="bg-green-700 rounded-full text-white px-2 text-base"
        >
          save and puplish
        </button>
      </form>
    </div>
  );
}
