import Image from "next/image";
export default function Comment({ children, data }) {
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
        <div>
          <p className="font-bold">{data.full_name}</p>
          <p className="text-gray-500">@{data.username}</p>
        </div>

        <p className="font-bold grow text-right text-[#4661E6]">Reply</p>
      </div>

      <div>
        <p className="text-gray-500">
          {data.replyto ? (
            <span className="font-bold text-[#4661E6]">{data.replyto}</span>
          ) : null}{" "}
          {data.content}
        </p>
      </div>
      {children}
    </div>
  );
}
