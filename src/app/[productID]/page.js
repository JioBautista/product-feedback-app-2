import fetchProduct from "../lib/fetchProduct";
import Product from "../components/Product";
import Container from "../components/Container";
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
    <Container>
      <div className="py-5 space-y-5 relative">
        <div className="flex items-center justify-between">
          <GoBackButton />

          <Link href={`/${product_id}/edit`}>
            <Button bg={"bg-[#4661E6]"}>Edit Feedback</Button>
          </Link>
        </div>

        {product_data.map((product) => (
          <Product data={product} />
        ))}

        <Comments product_id={product_id} />
        <AddComment product_id={product_id} />
      </div>
    </Container>
  );
}
