"use client";

import Image from "next/image";
import ReplyTo from "./ReplyTo";
import React from "react";
export default function Reply({ data, comment_id }) {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div key={data.id} className="space-y-3 pb-5">
      <div className="flex items-center gap-3">
        <div className="bg-[#F7F8FD] rounded-full p-1 border-2">
          <Image
            src={"/icons8-user-50.png"}
            width={25}
            height={25}
            alt="user icon"
          />
        </div>
        <div className="grow">
          <p className="font-bold">{data.full_name}</p>
          <p className="text-gray-500">@{data.username}</p>
        </div>
        <div>
          <p
            className="font-bold text-right text-[#4661E6] cursor-pointer hover:underline"
            onClick={() => setOpen(!isOpen)}
          >
            Reply
          </p>
        </div>
      </div>

      <div>
        <p className="text-gray-500 md:pl-12">
          {data.replyto ? (
            <span className="font-bold text-[#4661E6]">{data.replyto}</span>
          ) : null}{" "}
          {data.content}
        </p>
      </div>
      {isOpen ? (
        <ReplyTo comment_id={comment_id} reply_to={data.username} />
      ) : null}
    </div>
  );
}
