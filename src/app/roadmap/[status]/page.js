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
        <div className="space-y-10 py-5">
          <h1 className="text-3xl font-bold tracking-wide">
            {capitalizedStatus} (
            {rows
              ? rows.filter((x) => x.status === capitalizedStatus).length
              : 0}
            )
          </h1>
          {rows
            ? rows.map((items) => {
                if (items.status === "Planned") {
                  return <Product data={items} border={"border-t-[#F49F85]"} />;
                } else if (items.status === "In-progress") {
                  return <Product data={items} border={"border-t-[#AD1FEA]"} />;
                } else if (items.status === "Live") {
                  return <Product data={items} border={"border-t-[#62BCFA]"} />;
                }
              })
            : null}
        </div>
      </Container>
    </div>
  );
}
