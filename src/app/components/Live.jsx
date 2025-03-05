import FeedbackTitle from "./FeedbackTitle";
import FeedbackDesc from "./FeedbackDesc";
import Chip from "./Chip";
import FeedbackUpvotes from "./FeedbackUpvotes";
import FeedbackComments from "./FeedbackComments";
import Image from "next/image";
export default function Live({ data }) {
  const live_data = data
    ? data
        .filter((elements) => elements.status === "Live")
        .map((elements) => (
          <>
            <div className="border-t-[#62BCFA] border-t-8 rounded-md">
              <div className="p-5 bg-white rounded-md grid grid-cols-2 gap-y-3">
                {/* STATUS */}
                <div className="flex items-center gap-3 mb-3 col-span-2 text-gray-500">
                  <Image
                    src={"/icon-purple-oval.png"}
                    width={8}
                    height={8}
                    alt="purple icon"
                  />
                  {elements.status}
                </div>

                {/* TITLE, DESCRIPTION & CATEGORY */}
                <span className="col-span-2">
                  <FeedbackTitle href={`/${elements.id}`}>
                    {elements.title}
                  </FeedbackTitle>
                  <FeedbackDesc>{elements.description}</FeedbackDesc>
                  <Chip>{elements.category}</Chip>
                </span>

                {/* UPVOTES */}
                <span>
                  <FeedbackUpvotes
                    id={elements.id}
                    upvotes={elements.upvotes}
                    flex={null}
                  />
                </span>

                {/* COMMENTS */}
                <span className="justify-self-end self-center">
                  <FeedbackComments id={elements.id} />
                </span>
              </div>
            </div>
          </>
        ))
    : null;
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-wide">
        Live ({live_data.length})
      </h1>
      <h2 className="text-gray-500">Released features</h2>
      {live_data}
    </div>
  );
}
