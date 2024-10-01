import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/auth";
import { SignIn } from "../signin-button";
import Link from "next/link";
import Sinout from "../sinout";

export default async function UserDropdown() {
  const session = await auth();
  const user = session?.user;

  if (!session) {
    return <SignIn />;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image as string} />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Link href={`/author/${user?.id}/home`}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-700">
          <Sinout></Sinout>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
