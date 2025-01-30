"use client";
import React from "react";
import Link from "next/link";

export default function Tab({ href, data, text, borderT }) {
  const [border, setBorder] = React.useState("border-b-gray border-b-2");
  return (
    <div
      className={`py-5 px-1 ${border} w-full text-center text-gray-500 font-bold`}
      onClick={() => setBorder(borderT)}
      onBlur={() => setBorder("border-b-gray border-b-2")}
    >
      <Link href={href}>
        {text} ({data})
      </Link>
    </div>
  );
}
