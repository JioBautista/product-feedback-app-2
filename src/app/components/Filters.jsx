"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import createQueryString from "../lib/createQueryString";

export default function Filters({ fn }) {
  const pathname = usePathname();
  const queryString = createQueryString();
  const filters = ["UI", "UX", "Enhancement", "Bug", "Feature"];
  const linkStyles =
    "px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-2xl hover:bg-[#CFD7FF] active:bg-[#4661E6] active:text-[#F2F4FF] cursor-pointer";
  return (
    <div className="bg-white rounded-lg flex items-center flex-wrap gap-2 p-5">
      <Link href={"/"} className={linkStyles} onClick={() => fn()}>
        All
      </Link>
      {filters.map((elements) => (
        <>
          <Link
            href={pathname + "?" + queryString("filter", elements)}
            className={linkStyles}
            onClick={() => fn()}
          >
            {elements}
          </Link>
        </>
      ))}
    </div>
  );
}
