import Link from "next/link";
import Image from "next/image";
import Chip from "./Chip";
import fetchComments from "../lib/fetchComments";

export default async function Product({ data, border }) {
  const comments = await fetchComments(data.id);
  return (
    <div className={border ? `border-t-8 rounded-md ${border}` : null}>
      <div className="bg-white p-8 rounded-md grid grid-cols-2 gap-y-3">
        <Link href={`/${data.id}`} className="block">
          <p className="font-bold col-span-2 hover:text-[#4661E6]">
            {data.title}
          </p>
        </Link>
        <p className="text-gray-500 col-span-2">{data.description}</p>
        <Chip gridPosition={"col-span-2"}>{data.category}</Chip>
        <Chip
          gridPosition={
            "hover:bg-[#CFD7FF] active:bg-[#4661E6] active:text-[#F2F4FF] cursor-pointer"
          }
        >
          <Image
            src={"/icon-arrow-down.svg"}
            width={11}
            height={7}
            alt="Upvotes arrow"
            className="rotate-180"
          />
          {data.upvotes}
        </Chip>
        <Chip gridPosition={"justify-self-end"}>
          <Image
            className="mr-3"
            src={"/icon-comments.svg"}
            width={18}
            height={16}
            alt="Comments icon"
          />
          {comments ? comments.length : 0}
        </Chip>
      </div>
    </div>
  );
}
