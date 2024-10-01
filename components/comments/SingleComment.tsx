import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FormatTime } from "@/lib/formatTime";

export default function SingleComment({ comment }: { comment: comment }) {
  const dateObject = new Date(comment.created);
  let CreatedTimeFormat = FormatTime(dateObject);
  return (
    <div className="py-10 border-t border-gray-100">
  <div className="flex justify-between items-center">
    <div className="flex gap-3 items-center">
      <div><img className="w-8 rounded-full" src="https://lh3.googleusercontent.com/a/ACg8ocLlIF1aCxgdaeUiIpJNgT6zvGhP3fQve8YmhiWhK69MWW4edVTj=s476-c-no" alt="" /></div>
      <div>
        <a className="text-sm text-[#242424] font-semibold">{comment.user.diplayname}</a>
        <p className="text-sm text-[#6B6B6B]">{CreatedTimeFormat}</p>
      </div>
    </div>
    <button className=" align-middle text-2xl">...</button>
  </div>
  <p className="pt-4 text-[#242424] text-sm pl-1">{comment.body}</p>
</div>
  );
}
