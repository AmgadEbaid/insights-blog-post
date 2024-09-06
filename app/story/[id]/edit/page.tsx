import { fetchSinglePost } from "@/lib/data";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../../../../components/Editor"), {
  ssr: false,
});

import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  let post = await fetchSinglePost(params.id);
  return (
    <div className="h-dvh max-w-3xl mx-auto mt-6">
      <Editor initialContent_={JSON.parse(post!.content)} />
    </div>
  );
}
