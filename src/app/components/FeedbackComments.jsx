import fetchComments from "../lib/fetchComments";
import Image from "next/image";
export default async function FeedbackComments({ id }) {
  const comments = await fetchComments(id);
  return (
    <div className="flex items-center gap-3 font-bold">
      <Image
        src={"/icon-comments.svg"}
        width={18}
        height={16}
        alt="Comments icon"
      />
      {comments ? comments.length : 0}
    </div>
  );
}
