import Image from "next/image";
import Product from "./Product";
export default function Live({ data }) {
  const live_data = data
    ? data
        .filter((elements) => elements.status === "Live")
        .map((elements) => (
          <>
            <Product data={elements} border={"border-t-[#AD1FEA]"}>
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={"/icon-purple-oval.png"}
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
        Live ({live_data.length})
      </h1>
      <h2 className="text-gray-500">Released features</h2>
      {live_data}
    </div>
  );
}
