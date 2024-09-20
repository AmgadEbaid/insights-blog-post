"use client";
import { CreatePost, updatedPost } from "@/lib/acthion";
import { useActionState } from "react";

// this registers <Editor> as a Client Component

export default async function Editor({
  initialContent_,
}: {
  initialContent_?: singlePost;
}) {
  const [state, action, isPending] = useActionState(CreatePost, null);

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
          defaultValue={initialContent_?.titile}
        />
        <label htmlFor="title">description</label>
        <input
          className="w-full bg-gray-50 p-2 rounded-lg outline-none"
          type="text"
          name="description"
          id="description"
          placeholder="description"
          defaultValue={initialContent_?.description}
        />
        <label htmlFor="content">content</label>
        <textarea
          rows={12}
          name="content"
          id="content"
          placeholder="content"
          className="w-full bg-gray-50 p-2 rounded-lg outline-none"
          defaultValue={initialContent_?.content}
        ></textarea>
        <button
          type="submit"
          className="bg-green-700 rounded-full text-white text-sm px-2"
        >
          puplish
        </button>
      </form>
    </div>
  );
}
