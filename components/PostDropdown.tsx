"use client";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deletePost } from "@/lib/acthion";
import Link from "next/link";
import { useActionState } from "react";

export default async function PostDropdown({
  postId,
}: {
  postId?: String;
}) {

  const deletepostWithId = deletePost.bind(null, postId as string);

  const [state, action, isPending] = useActionState(deletepostWithId, null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none text-2xl items-center text-gray-400 hover:text-black">
        ...
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={`/story/${postId}/edit`}>
          {" "}
          <DropdownMenuItem>Edit story</DropdownMenuItem>
        </Link>
        <form action={action}>
          <button type="submit" className="w-full" aria-disabled={isPending}>
            <DropdownMenuItem className="text-red-800" disabled={isPending}>
              Delete story
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
