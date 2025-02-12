import Link from "next/link";
import Container from "@/app/components/Container";
import Form from "@/app/components/Form";
import fetchProduct from "@/app/lib/fetchProduct";
import updateFeedback from "@/app/lib/updateFeedback";

export default async function editFeedback({ params }) {
  const id = (await params).productID;
  const rows = await fetchProduct(id);
  const updateFeedbackWithID = updateFeedback.bind(null, id);
  return (
    <Container>
      <div className="py-5 space-y-5 max-w-[540px] mx-auto">
        <Link href={"/"} className="p-2 font-bold">
          Go Back
        </Link>
        <Form data={rows} fn={updateFeedbackWithID} />
      </div>
    </Container>
  );
}
