import FeedbackTitle from "../components/FeedbackTitle";
import FeedbackDesc from "../components/FeedbackDesc";
import Chip from "../components/Chip";
import FeedbackUpvotes from "../components/FeedbackUpvotes";
import FeedbackComments from "../components/FeedbackComments";
import fetchProduct from "../lib/fetchProduct";
import Button from "../components/Button";
import Link from "next/link";
import AddComment from "../components/AddComment";
import Comments from "../components/Comments";
import GoBackButton from "../components/GoBackButton";
export default async function ProductDetail({ params }) {
  const product_id = (await params).productID;
  const product_data = await fetchProduct(product_id);
  console.log(product_id);
  return (
    <div className="p-5 space-y-5 relative lg:col-span-4">
      <div className="flex items-center justify-between">
        <GoBackButton />

        <Link href={`/${product_id}/edit`}>
          <Button bg={"bg-[#4661E6]"}>Edit Feedback</Button>
        </Link>
      </div>

      {product_data.map((product) => (
        <>
          <div
            key={product.id}
            className="p-5 bg-white rounded-md grid grid-cols-2 gap-y-5 md:flex md:items-center md:gap-5"
          >
            <div className="col-span-2 md:order-2 md:grow">
              <FeedbackTitle href={`/${product.id}`}>
                {product.title}
              </FeedbackTitle>
              <FeedbackDesc>{product.description}</FeedbackDesc>
              <Chip>{product.category}</Chip>
            </div>

            <span className="justify-self-start md:order-1">
              <FeedbackUpvotes
                id={product.id}
                upvotes={product.upvotes}
                flex={"md:flex-col"}
              />
            </span>

            <span className="justify-self-end md:order-3">
              <FeedbackComments id={product.id} />
            </span>
          </div>
        </>
      ))}

      <Comments product_id={product_id} />
      <AddComment product_id={product_id} />
    </div>
  );
}
