"use client";
import React from "react";
import Link from "next/link";

export default function Tab({ href, data, text }) {
  const [border, setBorder] = React.useState("");
  return (
    <div
      className={`py-5 px-2 ${border} w-full text-center`}
      onClick={() => setBorder("border-b-indigo-500 border-b-4")}
      onBlur={() => setBorder("")}
    >
      <Link href={href} className="border border-black">
        {text} ({data})
      </Link>
    </div>
  );
}
