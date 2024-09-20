'use client'

import { useCreateBlockNote } from '@blocknote/react';
import React from 'react'
import { ServerBlockNoteEditor } from "@blocknote/server-util";

export default async function PostContent({ postContent }: { postContent: any }) {
  const editor = useCreateBlockNote();
  const html = await editor.blocksToFullHTML(await JSON.parse(postContent));
  return (
    <div className="prose " dangerouslySetInnerHTML={{ __html: html }} />
)
}
