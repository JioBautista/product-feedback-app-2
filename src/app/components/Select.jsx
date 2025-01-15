"use client";
import React from "react";

export default function Select({ children, defaultValue, name, value }) {
  const [optionValue, setValue] = React.useState("");
  return (
    <select
      className="w-full bg-[#F7F8FD] px-5 py-3 font-normal rounded-md mb-5"
      name={name}
      value={value ? value : null}
      defaultValue={defaultValue ? defaultValue : null}
    >
      {children}
    </select>
  );
}
