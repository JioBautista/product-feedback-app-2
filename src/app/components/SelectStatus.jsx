"use client";
import { useState } from "react";

export default function SelectStatus({ data }) {
  const [statusValue, setValue] = useState(data ? data[0].status : "");
  const status = ["Suggestion", "Planned", "In-progress", "Live"];

  return (
    <select
      className="w-full bg-[#F7F8FD] px-5 py-3 font-normal rounded-md mb-5"
      name={"status"}
      onChange={(e) => setValue(e.target.value)}
      value={statusValue}
    >
      {status.map((items, index) => (
        <option value={items} key={index}>
          {items}
        </option>
      ))}
    </select>
  );
}
