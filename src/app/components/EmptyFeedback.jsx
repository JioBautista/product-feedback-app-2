import Image from "next/image";
import AddFeedback from "./AddFeedback";

export default function EmptyFeedback() {
  return (
    <div className="bg-white px-6 py-20 rounded-md flex flex-col items-center gap-3">
      <Image
        src="/illustration-empty.svg"
        width={102}
        height={108}
        alt="Empty feedback"
      />
      <h1 className="font-bold text-2xl">There is no feedback yet.</h1>
      <p className="text-gray-500 text-center">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <AddFeedback />
    </div>
  );
}
