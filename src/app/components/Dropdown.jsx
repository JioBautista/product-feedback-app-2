"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Dropdown() {
  const [isOpen, setOpen] = useState(false);
  const [sortBy, isSorted] = useState("Most Upvotes");
  const linkStyles = "text-start text-gray-500";
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const sort = [
    { name: "Most Upvotes", link: "Most Upvotes" },
    { name: "Least Upvotes", link: "Least Upvotes" },
    { name: "Most Comments", link: "Most Comments" },
    { name: "Least Comments", link: "Least Comments" },
  ];

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

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
                  href={
                    pathname + "?" + createQueryString("sort", elements.link)
                  }
                  className={linkStyles}
                  onClick={() => handleClick(elements.name)}
                >
                  {elements.name}
                </Link>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
