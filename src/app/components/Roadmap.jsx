import Link from "next/link";
import Image from "next/image";

export default function Roadmap({ data }) {
  const spanStyles = "font-bold";
  const pStyles = "text-gray-500 grow";
  const plannedData = data ? data.filter((x) => x.status === "Planned") : null;
  const inProgressData = data
    ? data.filter((x) => x.status === "In-progress")
    : null;

  const liveData = data ? data.filter((x) => x.status === "Live") : null;
  return (
    <div className="bg-white rounded-md p-5 space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Roadmap</h1>
        <Link href={"/roadmap"} className="text-[#4661E6] underline block">
          View
        </Link>
      </div>

      <div className="flex items-center justify-between gap-2">
        <Image
          src={"/icon-orange-oval.png"}
          width={8}
          height={8}
          alt="orange icon"
        />
        <p className={pStyles}>Planned</p>
        <span className={spanStyles}>{plannedData.length}</span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <Image
          src={"/icon-blue-oval.png"}
          width={8}
          height={8}
          alt="blue icon"
        />
        <p className={pStyles}>In-Progess</p>
        <span className={spanStyles}>{inProgressData.length}</span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <Image
          src={"/icon-purple-oval.png"}
          width={8}
          height={8}
          alt="purple icon"
        />
        <p className={pStyles}>Live</p>
        <span className={spanStyles}>{liveData.length}</span>
      </div>
    </div>
  );
}
