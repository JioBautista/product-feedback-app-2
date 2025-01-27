import Link from "next/link";
import fetchProducts from "../lib/fetchProducts";
import Tab from "./Tab";

export default async function Tabs() {
  const data = await fetchProducts();
  const plannedData = data ? data.filter((x) => x.status === "Planned") : null;
  const inProgressData = data
    ? data.filter((x) => x.status === "In-Progress")
    : null;

  const liveData = data ? data.filter((x) => x.status === "Live") : null;

  console.log(data);
  return (
    <div className="flex items-center">
      <Tab
        href={"/roadmap/planned"}
        text={"Planned"}
        data={plannedData.length}
      />
      <Tab
        href={"/roadmap/in-progress"}
        text={"In-Progress"}
        data={inProgressData.length}
      />
      <Tab href={"/roadmap/live"} text={"Live"} data={liveData.length} />
    </div>
  );
}
