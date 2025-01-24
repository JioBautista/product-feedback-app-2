import Container from "@/app/components/Container";
import fetchStatus from "@/app/lib/fetchStatus";
import Product from "@/app/components/Product";

// THIS IS A STATIC PAGE THAT RENDERS DATA BASED ON URL
export default async function Tab({ params }) {
  const tab = (await params).tab;
  const rows = await fetchStatus(tab);
  console.log(rows);
  return (
    <div>
      <Container>
        {rows ? rows.map((items) => <Product data={items} />) : null}
      </Container>
    </div>
  );
}
