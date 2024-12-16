import Container from "./components/Container";
import Product from "./components/Product";
import fetchProducts from "./lib/fetchProducts";
import EmptyFeedback from "./components/EmptyFeedback";

export default async function Home({ searchParams }) {
  const filter = (await searchParams).filter;
  const rows = await fetchProducts(filter);
  return (
    <Container>
      <div className="py-5 space-y-5">
        {rows.map((items) => (
          <Product data={items} />
        ))}
        {rows.length === 0 && (
          <>
            <EmptyFeedback />
          </>
        )}
      </div>
    </Container>
  );
}
