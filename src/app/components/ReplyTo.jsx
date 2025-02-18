import Button from "./Button";
import postReply from "../lib/postReply";
export default function ReplyTo({ comment_id, reply_to }) {
  const postReplyWithCommentId = postReply.bind(null, comment_id);
  return (
    <div className="flex flex-col gap-2">
      <form action={postReplyWithCommentId}>
        <input className="hidden" name="full_name" defaultValue={"Jio Pacho"} />
        <input
          className="hidden"
          name="username"
          defaultValue={"jiobautista__"}
        />
        <input
          className="hidden"
          name="replyto"
          defaultValue={`@${reply_to}`}
        />
        <textarea
          name="content"
          cols={20}
          rows={2}
          className="border-2 w-full bg-[#F7F8FD] p-3"
          placeholder={`Reply to: @${reply_to}`}
        />
        <Button bg={"bg-[#AD1FEA]"}>Post Reply</Button>
      </form>
    </div>
  );
}
