import Link from "next/link";

export default function Roadmap({ data }) {
  const spanStyles = "justify-self-end font-bold";
  const pStyles = "text-gray-500";
  const plannedData = data ? data.filter((x) => x.status === "Planned") : null;
  const inProgressData = data
    ? data.filter((x) => x.status === "In-Progress")
    : null;

  const liveData = data ? data.filter((x) => x.status === "Live") : null;
  return (
    <div className="bg-white rounded-md p-5 grid grid-cols-2 gap-2">
      <h1 className="font-bold text-xl">Roadmap</h1>
      <Link href={"/roadmap"}>
        <p className="justify-self-end text-[#4661E6] underline">View</p>
      </Link>
      <p className={pStyles}>Planned</p>
      <span className={spanStyles}>{plannedData.length}</span>
      <p className={pStyles}>In-Progess</p>
      <span className={spanStyles}>{inProgressData.length}</span>
      <p className={pStyles}>Live</p>
      <span className={spanStyles}>{liveData.length}</span>
    </div>
  );
}
