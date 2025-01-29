"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useState } from "react";
export default function Dropdown() {
  const [isOpen, setOpen] = useState(false);
  const [sort, isSorted] = useState("Most Upvotes");
  const buttonStyles = "text-start text-gray-500";
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      setOpen(!isOpen);
      isSorted(value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <div className="text-white">
        <button onClick={() => setOpen(!isOpen)}>
          Sort by : <span className="font-bold text-sm">{sort}</span>
        </button>
        {isOpen && (
          <div className="absolute -bottom-44 bg-white p-5 rounded-xl flex flex-col gap-5 shadow-2xl">
            <button
              onClick={() =>
                router.push(
                  pathname + "?" + createQueryString("sort", "Most Upvotes")
                )
              }
              className={buttonStyles}
            >
              Most Upvotes
            </button>
            <button
              onClick={() =>
                router.push(
                  pathname + "?" + createQueryString("sort", "Least Upvotes")
                )
              }
              className={buttonStyles}
            >
              Least Upvotes
            </button>
            <button
              onClick={() => handler("Most Comments")}
              className={buttonStyles}
            >
              Most Comments
            </button>
            <button
              onClick={() => handler("Least Comments")}
              className={buttonStyles}
            >
              Least Comments
            </button>
          </div>
        )}
      </div>
    </>
  );
}
