"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  let path = usePathname();
  path = path.split("/")[3];
  return (
    <div className="h-dvh px-6 pt-6 max-w-5xl mx-auto justify-evenly gap-20 sm:flex ">
      <div className="sm:w-4/6 mt-32">
        <div>hero</div>
        <div className="flex flex-row gap-3">
          <div className={path == "home" ? "border-b border-gray-800" : ""}>
            {" "}
            <Link href={`/author/${params.id}/home`}> home</Link>
          </div>
          <div className={path == "about" ? "border-b border-gray-800" : ""}>
            {" "}
            <Link href={`/author/${params.id}/about`}> about</Link>
          </div>
        </div>

        {children}
      </div>
      <div className="w-2/6 sm:visible disabled:invisible border-l border-slate-100 px-4"></div>
    </div>
  );
}
