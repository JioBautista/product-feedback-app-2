import Link from "next/link";

export default async function Tabs() {
  return (
    <div className="flex items-center justify-between py-5">
      <Link href={"/roadmap/Live"}>Live</Link>
      <Link href={"/roadmap/In-Progress"}>In Progress</Link>
      <Link href={"/roadmap/Planned"}>Planned</Link>
    </div>
  );
}
