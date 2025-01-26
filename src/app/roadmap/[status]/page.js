import Container from "@/app/components/Container";
import fetchStatus from "@/app/lib/fetchStatus";
import Product from "@/app/components/Product";

// THIS IS A STATIC PAGE THAT RENDERS DATA BASED ON URL
export default async function Tab({ params }) {
  const status = (await params).status;

  function capitalizeFirstLetter(x) {
    return String(x).charAt(0).toUpperCase() + String(x).slice(1);
  }

  const capitalizedStatus = capitalizeFirstLetter(status);
  const rows = await fetchStatus(capitalizedStatus);
  return (
    <div>
      <Container>
        <div className="space-y-5">
          {rows ? rows.map((items) => <Product data={items} />) : null}
        </div>
      </Container>
    </div>
  );
}
