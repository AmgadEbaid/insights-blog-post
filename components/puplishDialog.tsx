import React, { useActionState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreatePost, increment } from "@/lib/acthion";
import { useFormState } from "react-dom";



export default function PuplishDialog({post}:{post:CreatePost_Type}) {
    const [state, formAction,isPending] = useFormState(CreatePost, null);

  return (
    <Dialog>
      <DialogTrigger className="bg-green-700 text-white text-sm px-4 rounded-full">puplish</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                title
              </Label>
              <Input id="name" value={"post.titile"} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                description
              </Label>
              <Input id="username" value={"post.description"} className="col-span-3" />
            </div>
              <button type="submit" aria-disabled={isPending}>puplish</button>
          </div>
          <DialogFooter>
            <Button type="submit" aria-disabled={isPending}>puplish</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
