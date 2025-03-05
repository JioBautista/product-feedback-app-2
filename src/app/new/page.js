import Form from "../components/Form";
import createFeedback from "../lib/createFeedback";
import GoBackButton from "../components/GoBackButton";
export default function NewFeedback() {
  return (
    <div className="p-5 space-y-10 max-w-[540px] mx-auto lg:col-span-4">
      <GoBackButton />
      <Form fn={createFeedback} />
    </div>
  );
}
