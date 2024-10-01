"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function CreateComment(
  PostId: string,
  previousState: any,
  formData: FormData
) {
  const session = await auth();
  const token = session?.user.token;
  const comment: createComment = {
    body: formData.get("content") as string,
    articleId: PostId,
  };

  const url = `http://localhost:8000/comments`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(comment),
    });
    console.log(response)
    res.revalidate(`/story/${PostId}`);

    return response.json();
  } catch (error) {
    console.error(error);
  }
  revalidatePath(`/story/[${PostId}]`);

  
}
export async function editComment(PostId: string) {
  const session = await auth();
  const token = session?.user.token;

  const url = `http://localhost:8000/articles/isfavorited/${PostId}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteComment(PostId: string) {
  const session = await auth();
  const token = session?.user.token;

  const url = `http://localhost:8000/articles/isfavorited/${PostId}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
