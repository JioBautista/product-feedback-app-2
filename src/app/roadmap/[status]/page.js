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

  console.log(rows);
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
            ? rows.map((items) => (
                <>
                  <div className="border-t-indigo-500 border-t-8 rounded-md">
                    <Product data={items} />
                  </div>
                </>
              ))
            : null}
        </div>
      </Container>
    </div>
  );
}
