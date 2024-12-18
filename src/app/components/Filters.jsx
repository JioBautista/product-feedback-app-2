import Link from "next/link";

export default function Filters() {
  const buttons = [
    { name: "All", link: "/" },
    { name: "UI", link: "/?filter=ux" },
    { name: "UX", link: "/?filter=ux" },
    { name: "Enhancement", link: "/?filter=enhancement" },
    { name: "Bug", link: "/?filter=bug" },
    {
      name: "Feature",
      link: `/?filter=feature`,
    },
  ];

  return (
    <div className="bg-white rounded-lg flex items-center flex-wrap gap-2 p-5">
      {buttons.map((elements) => (
        <button className="px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-2xl">
          <Link href={elements.link}>{elements.name}</Link>
        </button>
      ))}
    </div>
  );
}
