import Container from "./components/Container";
import Product from "./components/Product";
import fetchProducts from "./lib/fetchProducts";
import EmptyFeedback from "./components/EmptyFeedback";
import Sort from "./components/Sort";

export default async function Home({ searchParams }) {
  const { filter, sort } = await searchParams;
  const rows = await fetchProducts(filter, sort);
  return (
    <>
      <Sort />
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
    </>
  );
}
