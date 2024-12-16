import fetchProduct from "../lib/fetchProduct";
import Product from "../components/Product";
import Container from "../components/Container";
import EditButton from "../components/EditButton";
import Link from "next/link";

export default async function ProductDetail({ params }) {
  const productid = (await params).productID;
  const rows = await fetchProduct(productid);

  return (
    <Container>
      <div className="py-5 space-y-5">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="p-2 font-bold">
            Go Back
          </Link>

          <Link href={`/edit/${productid}`}>
            <EditButton />
          </Link>
        </div>
        {rows.map((items) => (
          <Product data={items} />
        ))}
      </div>
    </Container>
  );
}