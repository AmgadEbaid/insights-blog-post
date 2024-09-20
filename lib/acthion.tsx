"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function increment(previousState: any, formData: any) {
  console.log(" hello from form");
}
export async function CreatePost(previousState: any, formData: FormData) {
  const session = await auth();

  console.log(formData);
  const post: CreatePost_Type = {
    titile: formData.get("title") as string,
    description: formData.get("description") as string,
    content: formData.get("content") as string,
    slug: "any",
  };
  console.log(post);

  const url = "http://localhost:8000/articles/create";

  const token = session?.user.token;

  let postRes: post;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      postRes = await response.json();
    } else {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
    return;
  }
  console.log(postRes.id);
  revalidatePath("/");
  revalidatePath(`/author/${postRes.user.id}/home`);
  redirect(`/story/${postRes.id}`);
}

export async function updatedPost(
  PostId: string,
  previousState: any,
  formData: FormData
) {
  const session = await auth();

  const post: CreatePost_Type = {
    titile: formData.get("title") as string,
    description: formData.get("description") as string,
    content: formData.get("content") as string,
    slug: "any",
  };
  console.log("puplishing ");
  console.log(post);
  const url = `http://localhost:8000/articles/${PostId}`;

  const token = session?.user.token;

  let postRes: post;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });

    if (response.ok) {
      console.log("here we go again");
      postRes = await response.json();
    } else {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
    return;
  }
  console.log(postRes);
  revalidatePath("/");
  revalidatePath(`/author/${session?.user.id}/home`);
  revalidatePath(`/story/${PostId}`);
  redirect(`/story/${PostId}`);
}
export async function deletePost(PostId: string, previousState: any) {
  const session = await auth();

  const url = `http://localhost:8000/articles/${PostId}`;

  const token = session?.user.token;

  let postRes: post;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return;
  }
  revalidatePath("/");
  revalidatePath(`/author/${session?.user.id}/home`);
  revalidatePath(`/story/${PostId}`);
  redirect(`/`);
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

export async function likePost(postId: string) {
  const session = await auth();

  const url = `http://localhost:8000/articles/addfavorites/${postId}`;

  const token = session?.user.token;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return;
  }
  revalidatePath(`/story/${postId}`);
}
export async function unlikePost(postId: string) {
  const session = await auth();
  const url = `http://localhost:8000/articles/deletefavorites/${postId}`;

  const token = session?.user.token;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return;
  }
  revalidatePath(`/story/${postId}`);
}

export async function getIslikedPost(PostId: string) {
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
    return response.json() 
  } catch (error) {
   
    console.error(error);
  }
}



