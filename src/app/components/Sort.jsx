import Container from "./Container";
import AddFeedback from "./AddFeedback";
import Dropdown from "./Dropdown";
import Image from "next/image";

export default async function Sort({ data }) {
  return (
    <div className="bg-[#373f68] py-5 relative md:bg-transparent">
      <Container>
        <div className="flex items-center justify-between md:bg-[#373f68] rounded-lg gap-3 md:p-5">
          <Image
            className="hidden md:block"
            src={"/icon-suggestions.svg"}
            width={23}
            height={24}
            alt="Suggestions Icon"
          />
          <h1 className="hidden md:block text-lg font-bold text-white">
            {data ? data.length : 0} Suggestions
          </h1>
          <Dropdown />
          <AddFeedback />
        </div>
      </Container>
    </div>
  );
}
