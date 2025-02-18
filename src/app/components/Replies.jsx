import fetchReplies from "../lib/fetchReplies";
import Reply from "./Reply";

export default async function Replies({ comment_id }) {
  const replies = await fetchReplies(comment_id);
  if (replies.length > 0) {
    return replies.map((reply) => (
      <div className="pl-8 border-l-2">
        <Reply data={reply} comment_id={comment_id} />
      </div>
    ));
  } else {
    return null;
  }
}
