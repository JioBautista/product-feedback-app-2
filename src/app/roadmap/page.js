import Container from "../components/Container";
import Button from "../components/Button";

export default async function Roadmap() {
  return (
    <div className="border  border-black">
      <div className="bg-[#373F68] py-5">
        <Container>
          <div className="bg-[#373F68] text-white flex items-center justify-between">
            <p>Go Back</p>
            <button>Add Feedback</button>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-5 border border-black flex items-center justify-between">
          <p>Planned</p>
          <p>In-Progress</p>
          <p>Live</p>
        </div>
      </Container>
    </div>
  );
}
