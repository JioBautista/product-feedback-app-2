import Link from "next/link";
import fetchProducts from "../lib/fetchProducts";
import Tab from "./Tab";

export default async function Tabs() {
  const data = await fetchProducts();
  const plannedData = data ? data.filter((x) => x.status === "Planned") : null;
  const inProgressData = data
    ? data.filter((x) => x.status === "In-progress")
    : null;

  const liveData = data ? data.filter((x) => x.status === "Live") : null;
  return (
    <div className="flex items-center">
      <Tab
        href={"/roadmap/planned"}
        text={"Planned"}
        data={plannedData.length}
        borderT={"border-b-[#F49F85] border-b-4"}
      />
      <Tab
        href={"/roadmap/in-progress"}
        text={"In-Progress"}
        data={inProgressData.length}
        borderT={"border-b-[#AD1FEA] border-b-4"}
      />
      <Tab
        href={"/roadmap/live"}
        text={"Live"}
        data={liveData.length}
        borderT={"border-b-[#62BCFA] border-b-4"}
      />
    </div>
  );
}
