import Button from "./Button";
import postComment from "../lib/postComment";

export default async function AddComment({ id }) {
  const postCommentWithID = postComment.bind(null, id);
  return (
    <div className="bg-white p-5 rounded-md space-y-5">
      <h1 className="text-2xl font-bold">Add Comment</h1>
      <form action={postCommentWithID}>
        <input className="hidden" name="full_name" defaultValue={"Jio Pacho"} />
        <input
          className="hidden"
          name="username"
          defaultValue={"jiobautista__"}
        />
        <textarea
          cols={50}
          rows={3}
          className="w-full p-5 bg-[#F7F8FD]"
          placeholder="Type your comment here"
          name="content"
        />
        <div className="flex items-center justify-between mt-5">
          <p>250 Characters left</p>
          <div>
            <Button bg={"bg-[#4661E6]"}>Post Comment</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
