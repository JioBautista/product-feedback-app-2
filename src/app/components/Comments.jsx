import fetchComments from "../lib/fetchComments";
import Replies from "./Replies";
import Comment from "./Comment";

export default async function Comments({ product_id }) {
  const comments = await fetchComments(product_id);
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
                  <Replies comment_id={comment.id} />
                </Comment>
              </div>
            </>
          ))
        : null}
    </div>
  );
}
