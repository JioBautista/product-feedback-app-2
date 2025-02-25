import Container from "../components/Container";
import Form from "../components/Form";
import createFeedback from "../lib/createFeedback";
import GoBackButton from "../components/GoBackButton";
export default function NewFeedback() {
  return (
    <Container>
      <div className="py-5 space-y-10 max-w-[540px] mx-auto">
        <GoBackButton />
        <Form fn={createFeedback} />
      </div>
    </Container>
  );
}
