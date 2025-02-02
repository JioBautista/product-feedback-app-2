"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import createQueryString from "../lib/createQueryString";

export default function Dropdown() {
  const [isOpen, setOpen] = useState(false);
  const [sortBy, isSorted] = useState("Most Upvotes");
  const linkStyles = "text-start text-gray-500";
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
      <div className="text-white">
        <button onClick={() => setOpen(!isOpen)}>
          Sort by : <span className="font-bold text-sm">{sortBy}</span>
        </button>
        {isOpen && (
          <div className="absolute -bottom-44 bg-white p-5 rounded-xl flex flex-col gap-5 shadow-2xl">
            {sort.map((elements) => (
              <>
                <Link
                  href={pathname + "?" + queryString("sort", elements)}
                  className={linkStyles}
                  onClick={() => handleClick(elements)}
                >
                  {elements}
                </Link>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
