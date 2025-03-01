import Link from "next/link";
import Image from "next/image";
import Chip from "./Chip";
import fetchComments from "../lib/fetchComments";
import updateUpvote from "../lib/updateUpvote";

export default async function Product({ data, border, children }) {
  const comments = await fetchComments(data.id);
  return (
    <div className={border ? `border-t-8 rounded-md ${border}` : null}>
      <div className="bg-white p-5 rounded-md grid grid-cols-2 gap-y-3 md:flex md:items-center md:gap-5">
        <div className="col-span-2 md:order-2 md:grow">
          {children}
          {/* 1.FEEDBACK TITLE */}
          <Link
            href={`/${data.id}`}
            className="font-bold hover:text-[#4661E6] block"
          >
            {data.title}
          </Link>

          {/* 2.FEEDBACK DESCRIPTION */}
          <p className="text-gray-500 mb-3">{data.description}</p>
          {/* FEEDBACK CATEGORY */}
          <Chip>
            <span>{data.category}</span>
          </Chip>
        </div>

        {/* 3.FEEDBACK UPVOTES */}
        <Chip
          gridPosition={
            "justify-self-start hover:bg-[#CFD7FF] active:bg-[#4661E6] active:text-[#F2F4FF] cursor-pointer md:order-1 md:self-start"
          }
        >
          <div className="flex items-center justify-between gap-2 md:flex-col">
            <Image
              src={"/icon-arrow-down.svg"}
              width={11}
              height={7}
              alt="Upvotes arrow"
              className="rotate-180"
            />
            {/* 4.UPVOTE BUTTON HIDDEN INPUTS */}
            <form action={updateUpvote}>
              <input
                className="hidden"
                name="upvotes"
                defaultValue={data ? data.upvotes : 0}
              />
              <input
                className="hidden"
                name="id"
                defaultValue={data ? data.id : null}
              />
              <button type="submit">{data.upvotes}</button>
            </form>
          </div>
        </Chip>

        {/* 5.FEEDBACK COMMENTS ICON */}
        <div className="flex items-center gap-3 justify-self-end font-bold md:order-3">
          <Image
            src={"/icon-comments.svg"}
            width={18}
            height={16}
            alt="Comments icon"
          />
          {comments ? comments.length : 0}
        </div>
      </div>
    </div>
  );
}
