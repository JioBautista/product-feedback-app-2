import fetchComments from "../lib/fetchComments";
import Image from "next/image";

export default async function Comments({ id }) {
  const comments = await fetchComments(id);
  return (
    <div className="bg-white p-8 rounded-md space-y-5">
      <h1 className="font-bold text-xl">
        {comments ? comments.length : 0} Comments
      </h1>
      {comments
        ? comments.map((comment) => (
            <>
              <div key={comment.id} className="border-b-2 space-y-3 pb-5">
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
                    <p className="font-bold">{comment.full_name}</p>
                    <p className="text-gray-500">@{comment.username}</p>
                  </div>

                  <p className="font-bold grow text-right text-[#4661E6]">
                    Reply
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">{comment.content}</p>
                </div>
              </div>
            </>
          ))
        : null}
    </div>
  );
}
