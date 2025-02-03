import Link from "next/link";
import Image from "next/image";

export default function Product({ data, border }) {
  const spanStyles =
    "col-span-2 justify-self-start px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-xl md:col-span-1 md:col-start-2";
  return (
    <div className={border ? `border-t-8 rounded-md ${border}` : null}>
      <Link href={`/${data.productid}`} className="block">
        <div className="bg-white p-5 rounded-md grid grid-cols-2 gap-2 md:grid-cols-7 md:gap-1">
          <p className="font-bold col-span-2 md:col-start-2 md:col-span-7">
            {data.title}
          </p>
          <p className="text-gray-500 col-span-2 md:col-start-2 md:col-span-7">
            {data.description}
          </p>
          <span className={spanStyles}>{data.category}</span>
          <span
            className={
              "col-span-2 justify-self-start px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-xl flex items-center gap-2 md:col-span-1 md:col-start-1 md:row-start-1"
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
          </span>
        </div>
      </Link>
    </div>
  );
}
