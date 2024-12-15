export default function Product({ data }) {
  const spanStyles =
    "col-span-2 justify-self-start px-4 py-2 bg-[#F2F4FF] text-[#4661E6] font-bold rounded-full";
  console.log(data);
  return (
    <div className="bg-white p-5 rounded-md grid grid-cols-2 gap-2">
      <p className="font-bold col-span-2">{data.title}</p>
      <p className="text-gray-500 col-span-2">{data.description}</p>
      <span className={spanStyles}>{data.category}</span>
      <span className={spanStyles}>{data.upvotes}</span>
    </div>
  );
}
