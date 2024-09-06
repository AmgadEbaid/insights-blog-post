import PostsList from "@/components/postsList";

export default function Home() {
  return (
    <main className=" h-dvh  pt-12 px-6  max-w-6xl mx-auto justify-evenly gap-20 sm:flex">
      <section className=" sm:w-4/6 ">
        <PostsList></PostsList>
      </section>
      <section className="w-2/6 sm:visible disabled:invisible border-l border-slate-100"></section>
    </main>
  );
}
