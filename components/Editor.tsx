"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useActionState } from "react";
import { handelpuplish } from "@/lib/acthion";
import { useFormState } from "react-dom";
import PuplishDialog from "./puplishDialog";
import { json } from "stream/consumers";
import SavinDialog from "./savinDialog";


export default async function Editor({
  initialContent_,
}: {
  initialContent_?: any;
}) {
 

  const editor = useCreateBlockNote({
    initialContent: initialContent_
      ? initialContent_
      : [
          {
            type: "heading",
            content: "title new",
          },
          {
            type: "paragraph",
            content: "tell your story",
          },
        ],
    defaultStyles: false,
  });

  const content = await JSON.stringify(editor.document);
  const title: string = editor.document[0].content[0].text;
  let description: string;
 try{
 description = editor.document[1].content[0].text || "";
 }catch{
   description = "";
 }
  let post_: CreatePost_Type = {
    titile: title,
    content: content,
    description: description,
    slug: "any",
  };


  return (
    <div>
      <div className="flex justify-end">{initialContent_ && <SavinDialog post={post_}/> || <PuplishDialog post={post_}/>
 }
      </div>
      <BlockNoteView editor={editor} data-theming-css-variables-demo />
    </div>
  );
}
