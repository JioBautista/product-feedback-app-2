import Image from "next/image";
import Product from "./Product";
export default function InProgress({ data }) {
  const inProgress_data = data
    ? data
        .filter((elements) => elements.status === "In-progress")
        .map((elements) => (
          <>
            <Product data={elements} border={"border-t-[#AD1FEA]"}>
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={"/icon-blue-oval.png"}
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
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-wide">
        In-Progress ({inProgress_data.length})
      </h1>
      <h2 className="text-gray-500">Currently being developed</h2>
      {inProgress_data}
    </div>
  );
}
