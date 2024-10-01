import { signIn } from "@/auth";
export default function Google() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit"> Google</button>
    </form>
  );
}
