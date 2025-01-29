import Container from "./components/Container";
import Product from "./components/Product";
import fetchProducts from "./lib/fetchProducts";
import EmptyFeedback from "./components/EmptyFeedback";
import Sort from "./components/Sort";
import NavBar from "./navigationbar/Navbar";

export default async function Home({ searchParams }) {
  const { sort, filter } = await searchParams;
  const rows = await fetchProducts(sort);
  const data = rows.filter(filterCategory);

  function filterCategory(el) {
    return el.category === filter;
  }

  return (
    <>
      <NavBar data={rows} />
      <Sort />
      <Container>
        <div className="py-5 space-y-5">
          {data.map((items) => (
            <>
              <div key={items.productid}>
                <Product data={items} />
              </div>
            </>
          ))}
          {data.length === 0 && (
            <>
              <EmptyFeedback />
            </>
          )}
        </div>
      </Container>
    </>
  );
}
