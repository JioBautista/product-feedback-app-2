"use client";
import React from "react";
import Link from "next/link";

export default function Tab({ href, data, text }) {
  const [border, setBorder] = React.useState("border-b-gray border-b-2");
  return (
    <div
      className={`py-5 px-2 ${border} w-full text-center text-gray-500 font-bold`}
      onFocus={() => setBorder("border-b-indigo-500 border-b-4 text-black")}
      onBlur={() => setBorder("border-b-gray border-b-2")}
    >
      <Link href={href}>
        {text} ({data})
      </Link>
    </div>
  );
}
