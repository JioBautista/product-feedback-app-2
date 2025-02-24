import Tab from "./Tab";
export default async function Tabs() {
  return (
    <div className="flex items-center">
      <Tab
        href={"/roadmap/?status=planned"}
        text={"Planned"}
        borderT={"border-b-[#F49F85] border-b-4"}
      />
      <Tab
        href={"/roadmap/?status=in-progress"}
        text={"In-Progress"}
        borderT={"border-b-[#AD1FEA] border-b-4"}
      />
      <Tab
        href={"/roadmap/?status=live"}
        text={"Live"}
        borderT={"border-b-[#62BCFA] border-b-4"}
      />
    </div>
  );
}
