"use server";

import { BlockNoteEditor } from "@blocknote/core";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function CreatePost(prevState: string | undefined,formData: FormData) {
  console.log(formData);
  const url = "http://localhost:8000/articles/create";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFtZ2FkIEViYWlkIDIiLCJzdWIiOiI2YzRiNmIzMS0xOTI0LTRkODUtOTczMC0zNzI3ODIzOWQ2MDciLCJpYXQiOjE3MjQ5OTYwMzMsImV4cCI6MTcyNTAxNDAzM30.Iu7qhvz1gMvcjuN0DAxQQoJygHt4vb1hJbVrGWK9SLU";
  let postRes: post;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify("post"),
    });

    if (response.ok) {
      postRes = await response.json();
    } else {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
    return {
      msg: error,
    };
  }
  console.log(postRes.id);
  revalidatePath("/");
  revalidatePath(`/author/${postRes.user.id}/home`);
  redirect(`/story/${postRes.id}`);
}
export async function handelpuplish(
  prevState: string | undefined,
  formdata: FormData
) {
  const createPost: CreatePost_Type = {
    titile: "new stuff neded",
    slug: "any",
    content: "post.content",
    description: "post.description",
  };
  console.log(createPost);
}

