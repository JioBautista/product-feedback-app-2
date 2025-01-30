"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

export default function Filters({ fn }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const filters = [
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
      <Link
        href={"/"}
        className="px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-2xl"
        onClick={() => fn()}
      >
        All
      </Link>
      {filters.map((elements, index) => (
        <Link
          href={pathname + "?" + createQueryString("filter", elements.link)}
          className="px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-2xl"
          onClick={() => fn()}
        >
          {elements.name}
        </Link>
      ))}
    </div>
  );
}
