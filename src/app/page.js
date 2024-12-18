import Container from "./components/Container";
import Product from "./components/Product";
import fetchProducts from "./lib/fetchProducts";
import EmptyFeedback from "./components/EmptyFeedback";
import Sort from "./components/Sort";

export default async function Home({ searchParams }) {
  const { filter, sort } = await searchParams;
  const rows = await fetchProducts(filter);

  if (sort === "Least Upvotes") {
    rows.sort((a, b) => a.upvotes - b.upvotes);
  } else if (sort === "Most Upvotes") {
    rows.sort((a, b) => b.upvotes - a.upvotes);
  }
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
