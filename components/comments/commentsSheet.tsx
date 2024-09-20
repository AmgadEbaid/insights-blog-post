import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Suspense } from "react";
import Comments from "./comments";
import CommentForm from "./commentForm";
import { getCommentCount } from "@/lib/data";
import CommentCount from "./commentCount";

export default async function CommentsSheet({ postId }: { postId?: string }) {

  return (
    <Sheet>
      <SheetTrigger>🗨️<Suspense fallback={<div>...</div>}>{<CommentCount postId={postId}/>}</Suspense></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Comments {<Suspense fallback={<div>...</div>}>{<CommentCount postId={postId}/>}</Suspense>}</SheetTitle>
         
        </SheetHeader>
        <CommentForm postId={postId as string}/>
        <Suspense fallback={"loading..."}>

          {<Comments postId={postId}/>}
        </Suspense>
      </SheetContent>
    </Sheet>
  );
}
