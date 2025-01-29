"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const buttons = [
    { name: "UI", link: "UI" },
    { name: "UX", link: "UX" },
    { name: "Enhancement", link: "Enhancement" },
    { name: "Bug", link: "Bug" },
    {
      name: "Feature",
      link: `Feature`,
    },
  ];

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="bg-white rounded-lg flex items-center flex-wrap gap-2 p-5">
      <button className="px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-2xl">
        <Link href={"/"}>All</Link>
      </button>
      {buttons.map((elements, index) => (
        <button
          className="px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-2xl"
          key={index}
        >
          <Link
            href={pathname + "?" + createQueryString("filter", elements.link)}
          >
            {elements.name}
          </Link>
        </button>
      ))}
    </div>
  );
}
