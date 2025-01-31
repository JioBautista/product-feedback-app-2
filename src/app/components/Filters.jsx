"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import createQueryString from "../lib/createQueryString";

export default function Filters({ fn }) {
  const pathname = usePathname();
  const queryString = createQueryString();
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
          href={pathname + "?" + queryString("filter", elements.link)}
          className="px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-2xl"
          onClick={() => fn()}
        >
          {elements.name}
        </Link>
      ))}
    </div>
  );
}
