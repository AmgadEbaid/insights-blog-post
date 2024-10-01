import TabBar from "@/components/user/tapbar";
import { getUser } from "@/lib/user/data";
import { notFound } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const user = await getUser(params.id);

  if (!user) {
    return notFound();
  }

  return (
    <div className="h-dvh px-6 pt-6 max-w-5xl mx-auto justify-evenly gap-20 sm:flex ">
      <div className="sm:w-4/6 ">
        <h1 className="hidden lg:block text-4xl font-bold my-6">
          {user.diplayname}
        </h1>
        <div className="flex justify-between my-4 lg:hidden items-start ">
          <div className="flex flex-row gap-6  ">
            <div>
              <img className="w-12 rounded-full" src={user.image} />
            </div>
            <div>
              <h1 className="font-semibold text-2xl">{user.diplayname}</h1>
              <p className="my-1 text-gray-500">hello there</p>
            </div>
          </div>
          <button className="text-2xl text-gray-500 ">...</button>
        </div>

        <TabBar  userId={user?.id as string} />
        {children}
      </div>
      <div className="w-2/6 lg:block hidden border-l border-slate-100 px-6">
        <div className="mx-6">
          <img src={user.image} className="rounded-full mb-6"></img>
          <h1 className="font-bold">{user.diplayname}</h1>
          <p className="my-2 text-gray-500">hello there</p>
          <button className="text-green-600  font-semibold text-sm my-2">
            Edite profile
          </button>
        </div>
      </div>
    </div>
  );
}
