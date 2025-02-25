import Container from "./components/Container";
import Product from "./components/Product";
import fetchProducts from "./lib/fetchProducts";
import EmptyFeedback from "./components/EmptyFeedback";
import Sort from "./components/Sort";
import NavBar from "./navigationbar/Navbar";

export default async function Home({ searchParams }) {
  const { sort, filter } = await searchParams;
  const rows = await fetchProducts(sort);
  const products = filter ? rows.filter((x) => x.category === filter) : rows;
  console.log(rows);
  return (
    <>
      <NavBar data={rows} />
      <Sort />
      <Container>
        <div className="py-5 space-y-5">
          {products.map((elements) => (
            <>
              <div key={elements.id}>
                <Product data={elements} />
              </div>
            </>
          ))}
          {products.length === 0 && (
            <>
              <div>
                <EmptyFeedback />
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
}
