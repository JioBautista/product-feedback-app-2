import Container from "./components/Container";
import Product from "./components/Product";
import fetchProducts from "./lib/fetchProducts";
import EmptyFeedback from "./components/EmptyFeedback";
import Sort from "./components/Sort";
import NavBar from "./navigationbar/Navbar";

export default async function Home({ searchParams }) {
  const { filter, sort } = await searchParams;
  const rows = await fetchProducts(filter, sort);
  console.log(rows);
  return (
    <>
      <NavBar data={rows} />
      <Sort />
      <Container>
        <div className="py-5 space-y-5">
          {rows.map((items) => (
            <>
              <div key={items.productid}>
                <Product data={items} />
              </div>
            </>
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
