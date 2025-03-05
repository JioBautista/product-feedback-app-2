import Image from "next/image";
import updateUpvote from "../lib/updateUpvote";
export default async function FeedbackUpvotes({ upvotes, id, flex }) {
  return (
    <div className="px-4 py-2 font-bold rounded-xl bg-[#F2F4FF] text-[#4661E6] inline-block hover:bg-[#CFD7FF] active:bg-[#4661E6] active:text-[#F2F4FF] cursor-pointer">
      <div className={`flex items-center justify-between gap-2 ${flex}`}>
        <Image
          src={"/icon-arrow-down.svg"}
          width={11}
          height={7}
          alt="Upvotes arrow"
          className="rotate-180"
        />

        <form action={updateUpvote}>
          <input
            className="hidden"
            name="upvotes"
            defaultValue={upvotes ? upvotes : 0}
          />
          <input className="hidden" name="id" defaultValue={id ? id : null} />
          <button type="submit">{upvotes}</button>
        </form>
      </div>
    </div>
  );
}
