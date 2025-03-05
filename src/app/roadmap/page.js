import Container from "../components/Container";
import fetchProducts from "../lib/fetchProducts";
import Planned from "../components/Planned";
import InProgress from "../components/InProgress";
import Live from "../components/Live";

export default async function Roadmap({ searchParams }) {
  // 1. Grabs URL searchParams if true
  const status = (await searchParams).status;
  // 2. Fetches data from Database
  const products_data = await fetchProducts();
  return (
    // Render
    <div>
      <Container>
        <div className="space-y-3 py-5">
          {status === "planned" ? (
            <span className="md:hidden">
              <Planned data={products_data} />
            </span>
          ) : null}
          {status === "in-progress" ? (
            <span className="md:hidden">
              <InProgress data={products_data} />
            </span>
          ) : null}
          {status === "live" ? (
            <span className="md:hidden">
              <Live data={products_data} />
            </span>
          ) : null}

          <div className="hidden md:block md:grid md:grid-cols-3 md:gap-3">
            <Planned data={products_data} />
            <InProgress data={products_data} />
            <Live data={products_data} />
          </div>
        </div>
      </Container>
    </div>
  );
}
