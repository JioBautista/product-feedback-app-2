"use client";

import { useState } from "react";

export default function SelectCategory({ data }) {
  const [categoryValue, setValue] = useState(data ? data[0].category : "");
  const categories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  return (
    <select
      className="w-full bg-[#F7F8FD] px-5 py-3 font-normal rounded-md mb-5"
      name="category"
      onChange={(e) => setValue(e.target.value)}
      value={categoryValue}
    >
      {categories.map((category, index) => (
        <option value={category} key={index}>
          {category}
        </option>
      ))}
    </select>
  );
}
