import Container from "../components/Container";
import fetchProducts from "../lib/fetchProducts";
import Product from "../components/Product";

export default async function Roadmap({ searchParams }) {
  // 1. Grabs URL searchParams if true
  const status = (await searchParams).status;
  // 2. Fetches data from Database
  const products_data = await fetchProducts();
  // 3. A function that capitalizes the first letter of the status variable
  function capitalizeFirstLetter(x) {
    return String(x).charAt(0).toUpperCase() + String(x).slice(1);
  }
  // 4. Condtional statement
  const capitalizedStatus = status ? capitalizeFirstLetter(status) : "Planned";
  // 5. Another conditional statement that filters the data based on the status variable
  const filtered_products = status
    ? products_data.filter((x) => x.status === capitalizedStatus)
    : products_data.filter((x) => x.status === "Planned");
  return (
    // Render
    <div>
      <Container>
        <div className="space-y-3 py-5">
          <h1 className="text-2xl font-bold tracking-wide">
            {capitalizedStatus} ({filtered_products.length})
          </h1>

          {filtered_products
            ? filtered_products.map((elements) => {
                if (elements.status === "Planned") {
                  return (
                    <>
                      <h2 className="text-gray-500">
                        Ideas prioritized for research
                      </h2>
                      <Product data={elements} border={"border-t-[#F49F85]"} />
                    </>
                  );
                } else if (elements.status === "In-progress") {
                  return (
                    <>
                      <h2 className="text-gray-500">
                        Currently being developed
                      </h2>
                      <Product data={elements} border={"border-t-[#AD1FEA]"} />
                    </>
                  );
                } else if (elements.status === "Live") {
                  return (
                    <>
                      <h2 className="text-gray-500">Released features</h2>
                      <Product data={elements} border={"border-t-[#62BCFA]"} />
                    </>
                  );
                }
              })
            : null}
        </div>
      </Container>
    </div>
  );
}
