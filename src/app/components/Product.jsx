import Link from "next/link";
import Image from "next/image";
import Chip from "./Chip";

export default function Product({ data, border }) {
  return (
    <div className={border ? `border-t-8 rounded-md ${border}` : null}>
      <Link href={`/${data.productid}`} className="block">
        <div className="bg-white p-8 rounded-md grid grid-cols-2 gap-y-3">
          <p className="font-bold col-span-2">{data.title}</p>
          <p className="text-gray-500 col-span-2">{data.description}</p>
          <Chip gridPosition={"col-span-2"}>{data.category}</Chip>
          <Chip>
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
            0
          </Chip>
        </div>
      </Link>
    </div>
  );
}
