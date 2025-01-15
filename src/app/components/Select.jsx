"use client";
import React from "react";

export default function Select({ name, data, option }) {
  const [optionValue, setValue] = React.useState(data ? data[0].category : "");
  return (
    <select
      className="w-full bg-[#F7F8FD] px-5 py-3 font-normal rounded-md mb-5"
      name={name}
      onChange={(e) => setValue(e.target.value)}
      value={optionValue}
    >
      {option.map((items, index) => (
        <option value={items} key={index}>
          {items}
        </option>
      ))}
    </select>
  );
}
