"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import createQueryString from "../lib/createQueryString";
import Image from "next/image";

export default function Dropdown() {
  const [isOpen, setOpen] = useState(false);
  const [sortBy, isSorted] = useState("Most Upvotes");
  const linkStyles = "text-start text-gray-500 hover:text-[#AD1FEA]";
  const queryString = createQueryString();
  const pathname = usePathname();
  const sort = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  function handleClick(value) {
    setOpen(!isOpen);
    isSorted(value);
  }
  return (
    <>
      <div className="text-white flex items-center gap-1 md:grow">
        <button onClick={() => setOpen(!isOpen)}>
          Sort by : <span className="font-bold text-sm">{sortBy}</span>
        </button>
        {isOpen && (
          <div className="absolute -bottom-44 bg-white p-5 rounded-xl flex flex-col gap-5 shadow-2xl">
            {sort.map((elements) => (
              <>
                <div key={elements}>
                  <Link
                    href={pathname + "?" + queryString("sort", elements)}
                    className={linkStyles}
                    onClick={() => handleClick(elements)}
                  >
                    {elements}
                  </Link>
                </div>
              </>
            ))}
          </div>
        )}
        <Image
          src={"/icon-arrow-down-white.svg"}
          width={10}
          height={6}
          alt="down arrow"
          className={`${isOpen ? "rotate-180" : null}`}
        />
      </div>
    </>
  );
}
