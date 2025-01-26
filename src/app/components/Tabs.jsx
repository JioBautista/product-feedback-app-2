import Link from "next/link";
import fetchProducts from "../lib/fetchProducts";

export default async function Tabs() {
  const data = await fetchProducts();
  const plannedData = data ? data.filter((x) => x.status === "Planned") : null;
  const inProgressData = data
    ? data.filter((x) => x.status === "In-Progress")
    : null;

  const liveData = data ? data.filter((x) => x.status === "Live") : null;

  console.log(data);
  return (
    <div className="flex items-center justify-between py-5">
      <Link href={"/roadmap/live"}>Live ({liveData.length})</Link>
      <Link href={"/roadmap/in-progress"}>
        In Progress ({inProgressData.length})
      </Link>
      <Link href={"/roadmap/planned"}>Planned ({plannedData.length})</Link>
    </div>
  );
}
