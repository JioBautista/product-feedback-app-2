"use client";
import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

export default function createQueryString() {
  const searchParams = useSearchParams();
  const queryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return queryString;
}
