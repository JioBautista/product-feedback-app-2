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
            <div>
              <Planned data={products_data} />
            </div>
          ) : null}
          {status === "in-progress" ? (
            <div>
              <InProgress data={products_data} />
            </div>
          ) : null}
          {status === "live" ? (
            <div>
              <Live data={products_data} />
            </div>
          ) : null}

          <div className="hidden md:block md:space-y-5">
            <Planned data={products_data} />
            <InProgress data={products_data} />
            <Live data={products_data} />
          </div>
        </div>
      </Container>
    </div>
  );
}
