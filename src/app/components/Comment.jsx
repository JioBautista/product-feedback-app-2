"use client";

import Image from "next/image";
import ReplyTo from "./ReplyTo";
import React from "react";
export default function Comment({ children, data }) {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div key={data.id} className="pb-5">
      <div className="flex items-center gap-3">
        {/* 1. User Icon */}
        <div className="bg-[#F7F8FD] rounded-full p-1 border-2">
          <Image
            src={"/icons8-user-50.png"}
            width={25}
            height={25}
            alt="user icon"
          />
        </div>

        {/* 2. Full name and username */}
        <div className="grow">
          <p className="font-bold">{data.full_name}</p>
          <p className="text-gray-500">@{data.username}</p>
        </div>
        {/* 3. Reply button */}
        <div>
          <p
            className="font-bold text-right text-[#4661E6] hover:underline cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          >
            Reply
          </p>
        </div>
      </div>

      {/* 4. Comment */}
      <div className="md:pl-12 pb-5 mb-5">
        <p className="text-gray-500">{data.content}</p>
      </div>

      {/* 5.Replies component */}
      {children}

      {/* 6.ReplyTo component based on true or false value */}
      {isOpen ? (
        <ReplyTo comment_id={data.id} reply_to={data.username} />
      ) : null}
    </div>
  );
}
