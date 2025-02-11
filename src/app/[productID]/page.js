import fetchProduct from "../lib/fetchProduct";
import Product from "../components/Product";
import Container from "../components/Container";
import Button from "../components/Button";
import Link from "next/link";
import AddComment from "../components/AddComment";
import Comments from "../components/Comments";

export default async function ProductDetail({ params }) {
  const productid = (await params).productID;
  const rows = await fetchProduct(productid);

  return (
    <Container>
      <div className="py-5 space-y-5 relative">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="p-2 font-bold">
            Go Back
          </Link>

          <Link href={`/${productid}/edit`}>
            <Button bg={"bg-[#4661E6]"}>Edit Feedback</Button>
          </Link>
        </div>
        {rows.map((items) => (
          <Product data={items} />
        ))}

        <Comments id={productid} />
        <AddComment />
      </div>
    </Container>
  );
}
