import fetchReplies from "../lib/fetchReplies";
import Comment from "./Comment";

export default async function Replies({ id }) {
  const replies = await fetchReplies(id);

  console.log(replies);
  if (replies.length > 0) {
    return replies.map((reply) => (
      <div className="pl-8 border-l-2">
        <Comment data={reply} />
      </div>
    ));
  } else {
    return null;
  }
}
