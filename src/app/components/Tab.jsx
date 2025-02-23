"use client";
import React from "react";
import Link from "next/link";

export default function Tab({ href, data, text, borderT }) {
  const [border, setBorder] = React.useState("border-b-gray border-b-2");
  return (
    <Link
      href={href}
      className={`block py-4 ${border} w-full text-center text-gray-500 font-bold text-sm`}
      onFocus={() => setBorder(borderT)}
      onBlur={() => setBorder("border-b-gray border-b-2")}
    >
      {text} ({data})
    </Link>
  );
}
