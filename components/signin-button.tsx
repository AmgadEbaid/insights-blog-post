import { auth, signIn } from "@/auth"
import Link from "next/link";

 
export async function SignIn() {
    const session = await auth();
    if (session?.user) return null;
  return (
    <Link href={"/login"}>login⭐</Link>
  )
}