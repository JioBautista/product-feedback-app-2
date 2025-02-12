import fetchComments from "../lib/fetchComments";
import Image from "next/image";
import Replies from "./Replies";
import Comment from "./Comment";

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
              <div>
                <Comment data={comment}>
                  <Replies id={comment.id} />
                </Comment>
              </div>
            </>
          ))
        : null}
    </div>
  );
}
