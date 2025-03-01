import Image from "next/image";
import Product from "./Product";
export default function Planned({ data }) {
  const planned_data = data
    ? data
        .filter((elements) => elements.status === "Planned")
        .map((elements) => (
          <>
            <Product data={elements} border={"border-t-[#F49F85]"}>
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={"/icon-orange-oval.png"}
                  width={8}
                  height={8}
                  alt="orange icon"
                />
                {elements.status}
              </div>
            </Product>
          </>
        ))
    : null;

  console.log(planned_data);
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-wide">
        Planned ({planned_data.length})
      </h1>
      <h2 className="text-gray-500">Ideas prioritized for research</h2>
      {planned_data}
    </div>
  );
}
