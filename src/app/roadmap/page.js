import Container from "../components/Container";
import fetchProducts from "../lib/fetchProducts";
import Product from "../components/Product";
import Image from "next/image";
import Planned from "../components/Planned";

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
  const capitalizedStatus = status ? capitalizeFirstLetter(status) : "";
  // 5. Another conditional statement that filters the data based on the status variable
  const filtered_products = products_data.filter(
    (x) => x.status === capitalizedStatus
  );
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

          <div className="hidden md:block">
            <Planned data={products_data} />
          </div>
        </div>
      </Container>
    </div>
  );
}
