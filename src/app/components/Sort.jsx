import Container from "./Container";
import AddFeedback from "./AddFeedback";
import Dropdown from "./Dropdown";

export default function Sort() {
  return (
    <div className="bg-[#373f68] py-5 relative">
      <Container>
        <div className="flex items-center justify-between">
          <Dropdown />
          <AddFeedback />
        </div>
      </Container>
    </div>
  );
}
