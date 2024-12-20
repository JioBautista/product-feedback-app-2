import Container from "../components/Container";
import Link from "next/link";
import Form from "../components/Form";

export default function NewFeedback() {
  return (
    <Container>
      <div className="py-5 space-y-5 max-w-[540px] mx-auto">
        <Link href={"/"} className="p-2 font-bold">
          Go Back
        </Link>
        <Form />
      </div>
    </Container>
  );
}
